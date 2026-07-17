import { Image } from "expo-image";
import { ScrollView, View } from "react-native";
import styles from "../../styles/style";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/streamOS.png")}
          style={{ width: 130, height: 32 }}
        />
      </View>
    </ScrollView>
  );
}
