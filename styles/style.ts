import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#000",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },

  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },

  text: {
    color: "#fff",
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
    backgroundColor: "#111",
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  songArtist: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
});

export default styles;
