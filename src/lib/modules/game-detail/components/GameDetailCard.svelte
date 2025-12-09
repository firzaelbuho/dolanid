<script lang="ts">
	import type { Game } from "$lib/shared/types/Game";
	export let game: Game;
</script>

<div class="card bg-base-100 border border-base-300 shadow">
	<div class="card-body">

		<h2 class="text-2xl font-bold">{game.name}</h2>
		<p class="opacity-70">{game.region}</p>

		<p class="mt-4">{game.description}</p>

		<div class="mt-6">
			<h3 class="font-bold mb-1">Details</h3>
			<p>Players: {game.detail.playerCount}</p>

			<h4 class="mt-3 font-semibold">Equipment:</h4>
			<ul class="list-disc ml-5">
				{#each game.detail.equipment as item}
					<li>{item}</li>
				{/each}
			</ul>

			<h4 class="mt-3 font-semibold">Rules:</h4>
			<ul class="list-disc ml-5">
				{#each game.detail.rules as rule}
					<li>{rule}</li>
				{/each}
			</ul>
		</div>

	</div>
</div>
