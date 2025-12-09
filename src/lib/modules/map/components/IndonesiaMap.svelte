<script lang="ts">
  import { PROVINCE_LIST } from "../values";
  import * as svc from "../service";

  function onSelect(id: string) {
    const prov = PROVINCE_LIST.find((p) => p.id === id) || null;
    svc.setSelected(prov);
  }
</script>

<div class="relative w-full flex justify-center">
  <svg
    viewBox="0 0 900 450"
    class="w-full max-w-4xl fill-base-300 stroke-base-content/40"
  >
    <!-- CONTOH BEBERAPA PROVINSI -->
    <path
      id="jawa-tengah"
      d="M 350 250 L 450 250 L 440 290 L 360 290 Z"
      class="hover:fill-primary cursor-pointer transition-colors"
      on:click={() => onSelect('jawa-tengah')}
    />

    <path
      id="jawa-barat"
      d="M 250 240 L 350 250 L 340 290 L 260 280 Z"
      class="hover:fill-primary cursor-pointer transition-colors"
      on:click={() => onSelect('jawa-barat')}
    />

    <path
      id="jawa-timur"
      d="M 450 250 L 550 260 L 540 300 L 460 290 Z"
      class="hover:fill-primary cursor-pointer transition-colors"
      on:click={() => onSelect('jawa-timur')}
    />

    <path
      id="bali"
      d="M 600 300 L 630 305 L 620 320 L 600 315 Z"
      class="hover:fill-primary cursor-pointer transition-colors"
      on:click={() => onSelect('bali')}
    />

    <path
      id="dki-jakarta"
      d="M 300 230 L 320 230 L 320 240 L 300 240 Z"
      class="hover:fill-primary cursor-pointer transition-colors"
      on:click={() => onSelect('dki-jakarta')}
    />
  </svg>
</div>
