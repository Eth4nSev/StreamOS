import { StyleSheet } from "react-native";

export const Colors = {
  light: {
    background: "#f2f2f6",
    card: "#fff",
    text: "#000",
    separator: "#aaa",
  },
  dark: {
    background: "#000",
    card: "#222",
    text: "#fff",
    separator: "#555",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  textContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: 16,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },

  title: {
    color: Colors.dark.text,
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },

  sectionTitle: {
    color: Colors.dark.text,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },

  text: {
    color: Colors.dark.text,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: Colors.dark.card,
  },

  albumArtwork: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  songInfo: {
    flex: 1,
    marginLeft: 14,
  },

  songTitle: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: "600",
  },

  songArtist: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
  footer: {
    padding: 60,
  },
  header: {
    padding: 10,
    margin: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.card,
  },
  settingsContainer: {
    backgroundColor: Colors.dark.card,
    borderRadius: 20,
  },
  settingsItem: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingsItemPressed: {
    opacity: 0.7,
    backgroundColor: "#333",
  },
  settingsText: {
    color: Colors.dark.text,
    fontSize: 17,
  },
  settingsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.dark.separator,
    marginHorizontal: 16,
  },
  selectedInsideText: {
    color: "#888",
    fontSize: 17,
  },
  settingsValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  settingsCardPressed: {
    opacity: 0.65,
  },
  heading: {
    color: Colors.dark.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  subheading: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
  paragraph: {
    color: "#999",
    fontSize: 17,
  },
});

export default styles;
