import type { ProvinceData } from "./types";

export const MAP_DEFAULT_STATE = {
  hovered: null,
  selected: null
} as const;

export const PALETTE_PASTEL = [
  "#FDE2E4", // pink soft
  "#E2ECE9", // mint soft
  "#FFEDD8", // peach
  "#E8E8FD", // lavender
  "#FFF3B0", // yellow soft
  "#D1F5D3", // green milk
  "#FDECC8", // cream
  "#E7F1FF", // baby blue
  "#FFE3F4", // pink-lilac
  "#E6F8F9"  // aqua pastel
];


export const PROVINCE_LIST = [
  { id: "aceh", name: "Aceh", count: 0 },
  { id: "sumatera-utara", name: "Sumatera Utara", count: 0 },
  { id: "sumatera-barat", name: "Sumatera Barat", count: 0 },
  { id: "riau", name: "Riau", count: 0 },
  { id: "kepulauan-riau", name: "Kepulauan Riau", count: 0 },
  { id: "jambi", name: "Jambi", count: 0 },
  { id: "bengkulu", name: "Bengkulu", count: 0 },
  { id: "sumatera-selatan", name: "Sumatera Selatan", count: 0 },
  { id: "bangka-belitung", name: "Bangka Belitung", count: 0 },
  { id: "lampung", name: "Lampung", count: 0 },
  { id: "banten", name: "Banten", count: 0 },
  { id: "dki-jakarta", name: "DKI Jakarta", count: 0 },
  { id: "jawa-barat", name: "Jawa Barat", count: 0 },
  { id: "jawa-tengah", name: "Jawa Tengah", count: 0 },
  { id: "daerah-istimewa-yogyakarta", name: "DI Yogyakarta", count: 0 },
  { id: "jawa-timur", name: "Jawa Timur", count: 0 },
  { id: "bali", name: "Bali", count: 0 },
  { id: "nusa-tenggara-barat", name: "Nusa Tenggara Barat", count: 0 },
  { id: "nusa-tenggara-timur", name: "Nusa Tenggara Timur", count: 0 },
  { id: "kalimantan-barat", name: "Kalimantan Barat", count: 0 },
  { id: "kalimantan-tengah", name: "Kalimantan Tengah", count: 0 },
  { id: "kalimantan-selatan", name: "Kalimantan Selatan", count: 0 },
  { id: "kalimantan-timur", name: "Kalimantan Timur", count: 0 },
  { id: "kalimantan-utara", name: "Kalimantan Utara", count: 0 },
  { id: "sulawesi-utara", name: "Sulawesi Utara", count: 0 },
  { id: "sulawesi-tengah", name: "Sulawesi Tengah", count: 0 },
  { id: "sulawesi-selatan", name: "Sulawesi Selatan", count: 0 },
  { id: "sulawesi-tenggara", name: "Sulawesi Tenggara", count: 0 },
  { id: "gorontalo", name: "Gorontalo", count: 0 },
  { id: "sulawesi-barat", name: "Sulawesi Barat", count: 0 },
  { id: "maluku", name: "Maluku", count: 0 },
  { id: "maluku-utara", name: "Maluku Utara", count: 0 },
  { id: "papua-barat", name: "Papua Barat", count: 0 },
  { id: "papua-barat-daya", name: "Papua Barat Daya", count: 0 },
  { id: "papua", name: "Papua", count: 0 },
  { id: "papua-tengah", name: "Papua Tengah", count: 0 },
  { id: "papua-pegunungan", name: "Papua Pegunungan", count: 0 },
  { id: "papua-selatan", name: "Papua Selatan", count: 0 }
];

