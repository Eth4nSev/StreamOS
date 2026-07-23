import styles from "@/styles/style";
import { Children, ReactNode } from "react";
import { Text, View } from "react-native";
import Separator from "./separator";

type SettingsContainerProps = {
  title?: string;
  children?: ReactNode;
};

export default function SettingsContainer({
  title,
  children,
}: SettingsContainerProps) {
  const items = Children.toArray(children);
  return (
    <View style={{ margin: 16 }}>
      {title && (
        <Text
          style={{
            color: "#888",
            fontSize: 17,
            marginLeft: 16,
            marginBottom: 8,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      )}
      <View style={styles.settingsContainer}>
        {items.map((children, index) => (
          <View key={index}>
            {children}
            {index < items.length - 1 && <Separator />}
          </View>
        ))}
      </View>
    </View>
  );
}
