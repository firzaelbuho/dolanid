import type { Game } from "$lib/shared/types/Game";

export interface GameListState {
	search: string;
	games: Game[];
}
