import { writable } from "svelte/store";
import type { GameDetailState } from "./types";
import { DEFAULT_GAME_DETAIL_STATE } from "./values";

export function createGameDetailStore() {
	return writable<GameDetailState>(DEFAULT_GAME_DETAIL_STATE);
}

export const useGameDetail = createGameDetailStore();
