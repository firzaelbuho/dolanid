<script lang="ts">
	import type { Game } from "$lib/shared/types/Game";
	export let game: Game;
</script>

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
