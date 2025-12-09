import { useGameDetail } from "./store";
import type { Game } from "$lib/shared/types/Game";

export async function loadGameById(id: string | undefined) {
	useGameDetail.update((s) => ({ ...s, loading: true }));

	const res = await fetch('/data/games.json');
	const data: Game[] = await res.json();

	const game = data.find((g) => g.id === id) || null;

	useGameDetail.update((s) => ({
		...s,
		game,
		loading: false
	}));
}
