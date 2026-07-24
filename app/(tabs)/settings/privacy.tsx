import styles from "@/styles/style";
import { ScrollView, Text } from "react-native";

export default function PrivacyPage() {
  return (
    <ScrollView style={styles.textContainer}>
      <Text style={styles.heading}>Privacy Policy</Text>

      <Text style={styles.paragraph}>Last Updated: July 23, 2026</Text>

      <Text style={styles.paragraph}>
        StreamOS respects your privacy. This Privacy Policy explains what
        information the app collects, how it is used, and your rights while
        using the app.
      </Text>

      <Text style={styles.subheading}>Information We Collect</Text>

      <Text style={styles.paragraph}>
        • StreamOS does not require an account to use.
      </Text>

      <Text style={styles.paragraph}>
        • StreamOS does not collect personal information such as your name,
        email address, phone number, or location.
      </Text>

      <Text style={styles.paragraph}>
        • Any music, playlists, favorites, or settings are stored locally on
        your device unless a future feature states otherwise.
      </Text>

      <Text style={styles.subheading}>How Your Information Is Used</Text>

      <Text style={styles.paragraph}>
        Information stored by StreamOS is used only to provide app
        functionality, remember your preferences, and improve your listening
        experience.
      </Text>

      <Text style={styles.subheading}>Data Sharing</Text>

      <Text style={styles.paragraph}>
        StreamOS does not sell, rent, or share your personal information with
        third parties.
      </Text>

      <Text style={styles.subheading}>Third-Party Services</Text>

      <Text style={styles.paragraph}>
        Future versions of StreamOS may integrate third-party services such as
        music providers or analytics. If these features are added, this Privacy
        Policy will be updated to describe what information is shared and why.
      </Text>

      <Text style={styles.subheading}>Data Security</Text>

      <Text style={styles.paragraph}>
        Reasonable measures are taken to help protect information stored by the
        app. However, no method of electronic storage or transmission is
        completely secure.
      </Text>

      <Text style={styles.subheading}>Children's Privacy</Text>

      <Text style={styles.paragraph}>
        StreamOS is not directed toward children under the age required by
        applicable law. The app does not knowingly collect personal information
        from children.
      </Text>

      <Text style={styles.subheading}>Changes to This Policy</Text>

      <Text style={styles.paragraph}>
        This Privacy Policy may be updated from time to time. Changes become
        effective when the updated version is published within the app.
      </Text>

      <Text style={styles.subheading}>Contact</Text>

      <Text style={styles.paragraph}>
        If you have questions about this Privacy Policy, please contact the
        StreamOS developer through the project's GitHub page or other official
        contact methods.
      </Text>
    </ScrollView>
  );
}
