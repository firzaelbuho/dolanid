import type { PageLoad } from "./$types";
import type { Game } from "$lib/shared/types/Game";
import { API_BASE_URL } from "$lib/shared/values/config";

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(API_BASE_URL + "/dolanid/games");

	if (!res.ok) {
		return { games: [] };
	}

	const json = await res.json();
	const games: Game[] = json.data;

	return { games };
};
