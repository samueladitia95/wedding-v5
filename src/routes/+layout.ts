import { pb } from '$lib/pocketbase';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const main = await pb.collection('wedding_v5').getFirstListItem('project="default"');

	// Songs
	let song;
	if (main.song_url) {
		song = pb.files.getUrl(main, main.song_url);
	}

	return {
		main,
		song
	};
};
