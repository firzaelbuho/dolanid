<script lang="ts">
	import HomePage from "$lib/modules/home/HomePage.svelte";
	export let data;

	console.table(data.games)
</script>

<HomePage games={data.games} />
