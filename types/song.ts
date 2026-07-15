export interface Song {
  id: number;
  title: string;
  artist: string;
  artwork: any;
  audio: any;
  video?: any;
  explicit?: boolean;
  favorite?: boolean;
}
