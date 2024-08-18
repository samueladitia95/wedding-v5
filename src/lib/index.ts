// place files you want to import through the `$lib` alias in this folder.
import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

export function createInstance() {
	return new PocketBase(PUBLIC_POCKETBASE_URL);
}

const pb = createInstance();

pb.autoCancellation(false);

export { pb };
