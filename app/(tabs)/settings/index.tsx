import SettingsContainer from "@/components/SettingsContainer";
import SettingsLink from "@/components/SettingsLink";
import styles from "@/styles/style";
import { ScrollView } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <SettingsContainer title="General">
        <SettingsLink title="About" href="/(tabs)/settings/about" />
      </SettingsContainer>
    </ScrollView>
  );
}
