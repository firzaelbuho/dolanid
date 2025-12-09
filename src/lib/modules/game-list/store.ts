import { writable } from "svelte/store";
import type { GameListState } from "./types";
import { DEFAULT_GAME_LIST_STATE } from "./values";

export function createGameListStore() {
	return writable<GameListState>(DEFAULT_GAME_LIST_STATE);
}

export const useGameList = createGameListStore();
