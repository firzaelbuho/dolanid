<script lang="ts">
	import { useHome } from "../store";
	import * as svc from "../service";

	$: state = $useHome;

	// Update search text
	function onInput(event: Event) {
		const target = event.target as HTMLInputElement;
		svc.setSearch(target.value);
	}
</script>

<section class="py-10 max-w-4xl mx-auto px-4">
	<h2 class="text-xl font-semibold mb-4">Search Games</h2>

	<input
		type="text"
		placeholder="Search for a game…"
		class="input input-bordered w-full"
		value={state.search}
		on:input={onInput}
	/>
</section>
