import { BadgeSeverity } from "./badge-severity";

export interface GameBase {
  classification:  string;
  has_demo:        boolean;
  min_price:       number;
  p_windows:       boolean;
  in_press_system: boolean;
  embed:           Embed;
  type:            string;
  p_android:       boolean;
  title:           string;
  cover_url:       string;
  user:            User;
  published_at:    Date;
  id:              number;
  p_osx:           boolean;
  p_linux:         boolean;
  url:             string;
  created_at:      Date;
  can_be_bought:   boolean;
  short_text?:     string;
}

export interface GameTag {
  label: string;
  severity: BadgeSeverity;
}

export interface Game extends GameBase {
  views_count:     number;
  published:       boolean;
  purchases_count: number;
  downloads_count: number;
  tags?:           GameTag[];
}


export interface Embed {
  width:      number;
  height:     number;
  fullscreen: boolean;
}

export interface User {
  id:            number;
  url:           string;
  username:      string;
  display_name?: string;
  cover_url?:    string;
}
