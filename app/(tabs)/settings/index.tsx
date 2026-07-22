import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Link href="/(tabs)/settings/appearance" asChild>
        <Pressable style={styles.settingsCard}>
          <View style={styles.settingsLink}>
            <Text style={styles.settingsText}>Appearance</Text>

            <View style={styles.settingsValueContainer}>
              <Text style={styles.selectedInsideText}>Dark</Text>

              <MaterialIcons name="arrow-forward-ios" size={17} color="#555" />
            </View>
          </View>
        </Pressable>
      </Link>
    </ScrollView>
  );
}
