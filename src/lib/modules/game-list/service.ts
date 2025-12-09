import { useGameList } from "./store";
import type { Game } from "$lib/shared/types/Game";

export function setSearch(value: string) {
	useGameList.update((s) => ({ ...s, search: value }));
}

export async function loadGames() {
	const res = await fetch("/games.json");
	const data = await res.json();

	useGameList.update((s) => ({
		...s,
		games: data
	}));
}

export function setGames(list: Game[]) {
	useGameList.update((s) => ({ ...s, games: list }));
}
