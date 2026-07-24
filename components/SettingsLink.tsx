import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

type external = "internal" | "external";

type SettingsLinkProps = {
  title: string;
  href: string;
  type?: external;
  selectedValue?: string;
};

export default function SettingsLink({
  title,
  href,
  type = "internal",
  selectedValue,
}: SettingsLinkProps) {
  return (
    <Link href={href as any} asChild>
      {type === "external" ? (
        <Pressable style={styles.settingsItem}>
          <Text style={{ fontSize: 17, color: "#0188fe" }}>{title}</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.settingsItem}>
          <Text style={styles.settingsText}>{title}</Text>
          <View style={styles.settingsValueContainer}>
            {selectedValue && (
              <Text style={styles.selectedInsideText}>Dark</Text>
            )}
            <MaterialIcons name="arrow-forward-ios" size={17} color="#555" />
          </View>
        </Pressable>
      )}
    </Link>
  );
}
