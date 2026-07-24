import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch, Text, View } from "react-native";

type types = "switch" | "text" | "option";

type SettingItemProps = {
  title: string;
  selected?: boolean;
  subtitle?: string;
  type?: types;
};

export default function SettingsItem({
  title,
  selected,
  subtitle,
  type,
}: SettingItemProps) {
  return (
    <View style={styles.settingsItem}>
      <Text style={styles.settingsText}>{title}</Text>
      {selected && <MaterialIcons name="check" size={20} color={"#0188fe"} />}
      {subtitle && (
        <Text style={{ fontSize: 17, color: "#888" }}>{subtitle}</Text>
      )}
      {type === "switch" && <Switch style={{ margin: 0, padding: 0 }} />}
    </View>
  );
}
