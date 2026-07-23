import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

type SettingsLinkProps = {
  title: string;
  href: string;
};

export default function SettingsLink({ title, href }: SettingsLinkProps) {
  return (
    <Link href={href as any} asChild>
      <Pressable style={styles.settingsItem}>
        <Text style={styles.settingsText}>{title}</Text>
        <View style={styles.settingsValueContainer}>
          <Text style={styles.selectedInsideText}>Dark</Text>
          <MaterialIcons name="arrow-forward-ios" size={17} color="#555" />
        </View>
      </Pressable>
    </Link>
  );
}
