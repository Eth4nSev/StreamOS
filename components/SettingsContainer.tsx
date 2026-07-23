import styles from "@/styles/style";
import { Children, ReactNode } from "react";
import { View } from "react-native";
import Separator from "./separator";

type SettingsContainerProps = {
  children?: ReactNode;
};

export default function SettingsContainer({
  children,
}: SettingsContainerProps) {
  const items = Children.toArray(children);
  return (
    <View style={styles.settingsContainer}>
      {items.map((children, index) => (
        <View key={index}>
          {children}
          {index < items.length - 1 && <Separator />}
        </View>
      ))}
    </View>
  );
}
