import { MaterialIcons } from "@expo/vector-icons";
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
          {song.explicit && (
            <MaterialIcons name="explicit" size={16} color="#888" />
          )}
        </Text>

        <Text style={styles.songArtist} numberOfLines={1}>
          {song.artist}
        </Text>
      </View>
      <View>
        <MaterialIcons name="more-vert" size={28} color="white" />
      </View>
    </Pressable>
  );
}
