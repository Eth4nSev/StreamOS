import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

import styles from "../styles/style";
import { Song } from "../types/song";

interface SongCardProps {
  song: Song;
  onPress?: () => void;
}

export default function SongCard({ song, onPress }: SongCardProps) {
  return (
    <Pressable style={styles.songCard} onPress={onPress}>
      <Image
        source={song.artwork}
        style={styles.albumArtwork}
        contentFit="cover"
      />

      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {song.title}
        </Text>

        <Text style={styles.songArtist} numberOfLines={1}>
          {song.artist}
        </Text>
      </View>
    </Pressable>
  );
}
