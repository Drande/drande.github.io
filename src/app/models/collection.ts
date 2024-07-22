import { Game, GameBase } from "./game";

export interface Collection {
  id:          number;
  updated_at:  Date;
  title:       string;
  created_at:  Date;
  games_count: number;
  games:       GameBase[];
}

export interface CompleteCollection extends Collection {
  games: Game[];
}

export interface Embed {
  height:     number;
  width:      number;
  fullscreen: boolean;
}

export interface User {
  url:           string;
  id:            number;
  username:      string;
  cover_url?:    string;
  display_name?: string;
}
