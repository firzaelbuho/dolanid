<script lang="ts">
  import { onMount } from "svelte";
  import { geoMercator, geoPath } from "d3-geo";
  import { PROVINCE_LIST, PALETTE_PASTEL } from "../values";
  import * as svc from "../service";

  let features: any[] = [];
  let pathGenerator: any;

  let width = 900;
  let height = 550;

  function normalize(name: string) {
    return name
      .toLowerCase()
      .replace(/daerah khusus ibukota /g, "dki-")
      .replace(/daerah istimewa /g, "")
      .replace(/ /g, "-")
      .replace(/'/g, "");
  }

  function getColor(index: number) {
    return PALETTE_PASTEL[index % PALETTE_PASTEL.length];
  }

  onMount(async () => {
    const geojson = await fetch("/data/indonesia_provinces.geojson").then(r => r.json());

    const projection = geoMercator()
      .scale(1200)
      .center([118, -2])
      .translate([width / 2, height / 2]);

    pathGenerator = geoPath(projection);
    features = geojson.features;
  });

  function handleClick(f: any) {
    const id = normalize(f.properties.name);
    const prov = PROVINCE_LIST.find((p) => p.id === id) || null;
    svc.setSelected(prov);
  }
</script>

<svg {width} {height} class="bg-base-200 rounded-xl shadow-xl">
  {#each features as f, i}
    <path
      d={pathGenerator(f)}
      class="transition-all duration-150 cursor-pointer"
      stroke="#666"
      stroke-width="0.8"
      fill={getColor(i)}
      on:mouseover={(e) => e.target.setAttribute("fill", "#66a6ff")}
      on:mouseout={(e) => e.target.setAttribute("fill", getColor(i))}
      on:click={() => handleClick(f)}
    />
  {/each}
</svg>
