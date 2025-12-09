<script lang="ts">
	import GameListPage from "$lib/modules/game-list/GameListPage.svelte";
	export let data;
</script>

<GameListPage games={data.games} />
