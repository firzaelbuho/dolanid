import type { Game } from "$lib/shared/types/Game";

export interface GameDetailState {
	game: Game | null;
	loading: boolean;
}
