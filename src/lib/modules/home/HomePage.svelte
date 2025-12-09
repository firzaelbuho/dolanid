<script lang="ts">
	import HeroSection from "$lib/modules/home/components/HeroSection.svelte";
	import DescriptionSection from "$lib/modules/home/components/DescriptionSection.svelte";
	import SearchSection from "$lib/modules/home/components/SearchSection.svelte";
	import GameListSection from "$lib/modules/home/components/GameListSection.svelte";
	import { setGames } from "$lib/modules/home/service";
	import type { Game } from "$lib/shared/types/Game";

	export let games: Game[] = [];

	// ONLY HomePage should set store
	$: setGames(games);
</script>

<div class="space-y-8">
	<HeroSection />
	<DescriptionSection />
	<SearchSection />
	<GameListSection />
</div>
