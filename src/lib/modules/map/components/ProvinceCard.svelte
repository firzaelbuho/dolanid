<script lang="ts">
  import type { ProvinceData } from "../types";
  export let prov: ProvinceData | null = null;
</script>

{#if prov}
<div class="bg-base-100 shadow-xl border border-base-300 p-4 rounded-xl w-72 animate-fadeIn space-y-2">
  <div class="font-bold text-lg">{prov.name}</div>

  <div class="text-sm opacity-80">
    Permainan terindeks: <span class="font-semibold">{prov.count}</span>
  </div>

  <button class="btn btn-primary btn-sm w-full mt-2">
    Lihat Detail
  </button>
</div>
{/if}

<style>
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
