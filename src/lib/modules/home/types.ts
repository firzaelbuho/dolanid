import type { Game } from '$lib/shared/types/Game.ts';

export interface HomeState {
	search: string;
	games: Game[];
}
