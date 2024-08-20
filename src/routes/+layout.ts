import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

type Wish = {
	name: string;
	wish: string;
	created: string;
};

export const load: LayoutLoad = async () => {
	const main = await pb.collection('wedding_v5').getFirstListItem('project="default"');
	const wishes = await pb.collection('rsvp_wedding_v5').getFullList({
		filter: 'project="default"',
		order: '+created',
		fields: 'wishes,from,created'
	});

	// Songs
	let song;
	if (main.song_url) {
		song = pb.files.getUrl(main, main.song_url);
	}

	let wishedFormated: Wish[] = [];
	if (wishes) {
		wishedFormated = wishes.map((el) => {
			return {
				name: el.from,
				wish: el.wishes,
				created: el.created
			};
		});
	}

	return {
		main,
		song,
		wishes: wishedFormated
	};
};
