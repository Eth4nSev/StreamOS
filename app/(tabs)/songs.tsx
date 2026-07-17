import { Image } from "expo-image";
import { FlatList, ScrollView, View } from "react-native";

import SongCard from "../../components/SongCard";
import styles from "../../styles/style";
import { songs } from "../../types/songs";

export default function Songs() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/streamOS.png")}
          style={{ width: 130, height: 32 }}
        />
      </View>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <SongCard song={item} onPress={() => console.log(item.title)} />
        )}
      />
    </ScrollView>
  );
}
