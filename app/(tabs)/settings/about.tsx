import SettingsContainer from "@/components/SettingsContainer";
import SettingsItem from "@/components/SettingsItem";
import SettingsLink from "@/components/SettingsLink";
import styles from "@/styles/style";
import { songs } from "@/types/songs";
import { ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <SettingsContainer>
        <SettingsItem title="App Name" subtitle="StreamOS" />
        <SettingsItem title="Version" subtitle="0.4.0" />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem title="Songs" subtitle={songs.length.toString()} />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsItem title="Developer" subtitle="Ethan Severy" />
        <SettingsItem title="Framework" subtitle="Expo SDK 54" />
        <SettingsLink
          title="GitHub Page"
          type="external"
          href="https://github.com/Eth4nSev/StreamOS"
        />
        <SettingsLink
          title="Report a Bug"
          type="external"
          href="https://github.com/Eth4nSev/StreamOS/issues/new"
        />
      </SettingsContainer>
      <SettingsContainer>
        <SettingsLink title="Terms of Service" href="/(tabs)/settings/terms" />
        <SettingsLink title="Privacy Policy" href="/(tabs)/settings/privacy" />
      </SettingsContainer>
    </ScrollView>
  );
}
