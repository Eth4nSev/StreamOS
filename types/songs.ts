import { Song } from "./song";

export const songs: Song[] = [
  {
    id: 1,
    title: "Chaos Theory",
    artist: "GRiZ & Wooli",
    artwork: require("../assets/songs/chaos_theory.jpg"),
    audio: require("../assets/audio/chaos_theory.m4a"),
  },
  {
    id: 2,
    title: "Night Terrors",
    artist: "Hyper Potions, Boom Kitty & CHOMPO",
    artwork: require("../assets/songs/night_terrors.jpg"),
    audio: require("../assets/audio/night_terrors.m4a"),
    video: require("../assets/videos/night_terrors.mp4"),
  },
];
