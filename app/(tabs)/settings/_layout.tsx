import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerTransparent: true,
          headerBackTitle: "",
        }}
      />
      <Stack.Screen
        name="appearance"
        options={{
          title: "Appearance",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
