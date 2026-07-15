import { FlatList, View } from "react-native";

import SongCard from "../../components/SongCard";
import styles from "../../styles/style";
import { songs } from "../../types/songs";

export default function Songs() {
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <SongCard song={item} onPress={() => console.log(item.title)} />
          )}
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}
