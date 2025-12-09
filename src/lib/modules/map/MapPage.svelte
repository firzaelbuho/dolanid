<script lang="ts">
  import { useMap } from "./store";
  import ProvinceCard from "./components/ProvinceCard.svelte";
	import MapSvg from "./components/MapSvg.svelte";

  $: state = $useMap;
</script>

<div class="w-full h-[calc(100vh-4rem)] flex gap-4 p-4">

  <!-- LEFT: MAP -->
  <div class="flex-1 rounded-xl overflow-hidden shadow-xl bg-base-200">
    <MapSvg />
  </div>

  <!-- RIGHT: SIDEBAR PANEL -->
  <aside
    class="w-80 bg-base-100 border border-base-300 shadow-xl rounded-xl p-4 flex flex-col gap-4"
  >
    <h2 class="text-xl font-bold mb-2">Informasi Provinsi</h2>

    <!-- Card muncul di sini -->
    {#if state.selected}
      <ProvinceCard prov={state.selected} />
    {:else}
      <p class="text-sm opacity-70">
        Klik provinsi pada peta untuk melihat data permainan yang terindeks.
      </p>
    {/if}
  </aside>
</div>
