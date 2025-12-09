import { writable } from 'svelte/store';
import type { MapState } from './types';
import { MAP_DEFAULT_STATE } from './values';

export function createMapStore() {
  return writable<MapState>({ ...MAP_DEFAULT_STATE });
}

export const useMap = createMapStore();
