import Separator from "@/components/separator";
import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function appearenceScreen() {
  return (
    <>
      <Stack.Screen options={{ headerBackButtonDisplayMode: "minimal" }} />
      <ScrollView style={styles.container}>
        <View style={styles.settingsCard}>
          <Pressable style={styles.settingsLink}>
            <Text style={styles.settingsText}>Automatic</Text>
          </Pressable>
          <Separator />
          <Pressable style={styles.settingsLink}>
            <Text style={styles.settingsText}>Light</Text>
          </Pressable>
          <Separator />
          <Pressable style={styles.settingsLink}>
            <Text style={styles.settingsText}>Dark</Text>
            <MaterialIcons name="done" size={20} color={"#0188fe"} />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
