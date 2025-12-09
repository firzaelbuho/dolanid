export interface ProvinceData {
  id: string;
  name: string;
  count: number;
}

export interface MapState {
  hovered: null;         // tidak dipakai lagi (biarkan null biar tidak rusak)
  selected: ProvinceData | null;
}
