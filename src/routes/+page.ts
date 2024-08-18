import { pb } from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const main = await pb.collection("wedding_v5").getFirstListItem('project="default"');
	return {
		main,
	};

};