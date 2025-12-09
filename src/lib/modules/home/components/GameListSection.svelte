<script lang="ts">
	import { useHome } from "../store";

	$: state = $useHome;

	// protect state.games so we never crash on SSR
	$: filtered = (state.games ?? []).filter((g) =>
		g.name.toLowerCase().includes(state.search.toLowerCase())
	);
</script>



<section class="py-12 max-w-5xl mx-auto px-4">
	<h2 class="text-2xl font-semibold mb-6">Game List</h2>

	{#if filtered.length === 0}
		<p class="opacity-60">No games found.</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{#each filtered as game (game.id)}
				<a
					href={"/games/" + game.id}
					class="card bg-base-100 border border-base-300 shadow hover:shadow-lg transition"
				>
					<div class="card-body">
						<h3 class="text-lg font-bold">{game.name}</h3>
						<p class="text-sm opacity-70">{game.region}</p>
						<p class="text-sm line-clamp-2">{game.description}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</section>
