import { useHome } from "./store";
import type { Game } from "$lib/shared/types/Game";

export function setSearch(value: string) {
	useHome.update((s) => ({ ...s, search: value }));
}

export function setGames(list: Game[]) {
	useHome.update((s) => ({ ...s, games: list }));
}
