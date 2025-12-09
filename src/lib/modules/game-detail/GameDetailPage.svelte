<script lang="ts">
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { useGameDetail } from "./store";
	import * as svc from "./service";
	import GameDetailCard from "./components/GameDetailCard.svelte";

	$: state = $useGameDetail;

	onMount(() => {
		const id = page.params.id;
		svc.loadGameById(id);
	});
</script>

<div class="max-w-4xl mx-auto px-4 py-6">
	{#if state.loading}
		<p class="opacity-70">Loading...</p>
	{:else if state.game}
		<GameDetailCard game={state.game} />
	{:else}
		<p class="opacity-70">Game not found.</p>
	{/if}
</div>
