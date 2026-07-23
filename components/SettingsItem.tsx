import styles from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type SettingItemProps = {
  title: string;
  selected?: boolean;
};

export default function SettingsItem({ title, selected }: SettingItemProps) {
  return (
    <View style={styles.settingsItem}>
      <Text style={styles.settingsText}>{title}</Text>
      {selected && <MaterialIcons name="check" size={20} color={"#0188fe"} />}
    </View>
  );
}
