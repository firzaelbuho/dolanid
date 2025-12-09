import { useMap } from "./store";
import type { ProvinceData } from "./types";

export function setSelected(prov: ProvinceData | null) {
  useMap.update((s) => ({ ...s, selected: prov }));
}
