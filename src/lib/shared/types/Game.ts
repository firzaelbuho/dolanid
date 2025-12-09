export interface GameDetail {
	playerCount: number;        // number of players
	equipment: string[];        // tools / materials required
	rules: string[];            // game rules
}

export interface Game {
	id: string;                 // unique identifier (slug or uuid)
	name: string;               // game name
	region: string;             // origin region (example: "West Java")
	description: string;        // short description
	detail: GameDetail;         // technical details
}
