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
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="terms"
        options={{
          title: "Terms of Service",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="privacy"
        options={{
          title: "Privacy Policy",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
