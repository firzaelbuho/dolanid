import { writable } from "svelte/store";
import type { HomeState } from "./types";
import { DEFAULT_HOME_STATE } from "./values";

export function createHomeStore() {
	return writable<HomeState>(DEFAULT_HOME_STATE);
}

export const useHome = createHomeStore();
