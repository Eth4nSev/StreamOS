import SettingsContainer from "@/components/SettingsContainer";
import SettingsItem from "@/components/SettingsItem";
import styles from "@/styles/style";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";

export default function appearanceScreen() {
  return (
    <>
      <Stack.Screen options={{ headerBackButtonDisplayMode: "minimal" }} />
      <ScrollView style={styles.container}>
        <SettingsContainer>
          <SettingsItem title="Automatic" />
          <SettingsItem title="Light" />
          <SettingsItem title="Dark" selected />
        </SettingsContainer>
      </ScrollView>
    </>
  );
}
