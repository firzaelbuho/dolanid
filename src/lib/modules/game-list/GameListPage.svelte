<script lang="ts">
	import type { Game } from "$lib/shared/types/Game";

	import { useGameList } from "./store";
	import * as svc from "./service";
	import GameListItem from "./components/GameListItem.svelte";

	export let games: Game[]; // from +page.ts

	$: svc.setGames(games);   // push into module state
	$: state = $useGameList;  // local reactive state

	$: filtered = state.games.filter((g) =>
		g.name.toLowerCase().includes(state.search.toLowerCase())
	);

	function onInput(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		svc.setSearch(value);
	}
</script>

<div class="max-w-5xl mx-auto px-4 space-y-8">

	<!-- Title -->
	<h1 class="text-3xl font-bold">Game List</h1>

	<!-- Search Bar -->
	<input
		type="text"
		class="input input-bordered w-full"
		placeholder="Search games..."
		value={state.search}
		on:input={onInput}
	/>

	<!-- List -->
	{#if filtered.length === 0}
		<p class="opacity-60">No games found.</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{#each filtered as game}
				<GameListItem {game} />
			{/each}
		</div>
	{/if}

</div>
