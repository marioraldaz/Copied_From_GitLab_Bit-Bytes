/*export const load = async (loadEvent)=> {
    const { fetch } = loadEvent;
    const response = await fetch('http://localhost:4000/profiles');
    const profiles = await response.json();
    return {profiles};
}*/

import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { username } = await parent();

	if (username) {
		throw redirect(303 /*temporal redirect */, '/');
	}
};
