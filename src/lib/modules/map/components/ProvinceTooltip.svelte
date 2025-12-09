<script lang="ts">
  import type { ProvinceData } from "../types";
  export let prov: ProvinceData | null = null;
</script>

{#if prov}
<div class="absolute z-20 bg-base-100 shadow-lg rounded-lg border border-base-300 p-3 text-sm pointer-events-none animate-fadeIn">
  <div class="font-semibold">{prov.name}</div>
  <div class="opacity-70 text-xs mt-1">
    Permainan terindeks: <span class="font-medium">{prov.count}</span>
  </div>
</div>
{/if}

<style>
  .animate-fadeIn {
    animation: fadeIn 0.15s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(2px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
