import styles from "@/styles/style";
import { ScrollView, Text } from "react-native";

export default function TermsPage() {
  return (
    <ScrollView style={styles.textContainer}>
      <Text style={styles.heading}>Terms of Service</Text>

      <Text style={styles.paragraph}>Last Updated: July 23, 2026</Text>

      <Text style={styles.subheading}>1. Acceptance of Terms</Text>
      <Text style={styles.paragraph}>
        By downloading or using StreamOS, you agree to these Terms of Service.
        If you do not agree to these terms, do not use the app.
      </Text>

      <Text style={styles.subheading}>2. Use of the App</Text>
      <Text style={styles.paragraph}>
        StreamOS is provided for personal, non-commercial use unless otherwise
        stated. You agree to use the app in a lawful manner and not attempt to
        interfere with its operation, security, or functionality.
      </Text>

      <Text style={styles.subheading}>3. Content</Text>
      <Text style={styles.paragraph}>
        The music, artwork, logos, interface, and other content available within
        StreamOS may be protected by copyright and other intellectual property
        laws. You may not copy, distribute, modify, or resell any content
        without permission from the appropriate owner.
      </Text>

      <Text style={styles.subheading}>4. Availability</Text>
      <Text style={styles.paragraph}>
        While we strive to keep StreamOS available at all times, we do not
        guarantee uninterrupted service. Features may be changed, updated, or
        removed at any time without prior notice.
      </Text>

      <Text style={styles.subheading}>5. User Responsibility</Text>
      <Text style={styles.paragraph}>
        You are responsible for how you use StreamOS. You agree not to use the
        app for unlawful activities, to distribute malicious software, or to
        attempt unauthorized access to systems or data.
      </Text>

      <Text style={styles.subheading}>6. No Warranty</Text>
      <Text style={styles.paragraph}>
        StreamOS is provided "as is" and "as available" without warranties of
        any kind, whether express or implied. We do not guarantee the app will
        always be error-free, secure, or meet your expectations.
      </Text>

      <Text style={styles.subheading}>7. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        To the fullest extent permitted by law, the developers of StreamOS are
        not liable for any direct, indirect, incidental, or consequential
        damages resulting from the use or inability to use the app.
      </Text>

      <Text style={styles.subheading}>8. Third-Party Services</Text>
      <Text style={styles.paragraph}>
        StreamOS may link to or integrate with third-party services. Those
        services operate under their own terms and privacy policies, and we are
        not responsible for their content or practices.
      </Text>

      <Text style={styles.subheading}>9. Updates</Text>
      <Text style={styles.paragraph}>
        We may release updates that add, modify, or remove features. Continued
        use of StreamOS after an update indicates your acceptance of the updated
        version of the app and these Terms of Service.
      </Text>

      <Text style={styles.subheading}>10. Termination</Text>
      <Text style={styles.paragraph}>
        We reserve the right to suspend or terminate access to StreamOS if these
        Terms of Service are violated or if necessary to protect the app or its
        users.
      </Text>

      <Text style={styles.subheading}>11. Changes to These Terms</Text>
      <Text style={styles.paragraph}>
        These Terms of Service may be updated from time to time. The latest
        version will always be available within the app, and the "Last Updated"
        date will reflect any changes.
      </Text>

      <Text style={styles.subheading}>12. Contact</Text>
      <Text style={styles.paragraph}>
        If you have any questions about these Terms of Service, please contact
        the developer through the project's official GitHub repository or any
        other official contact method provided by StreamOS.
      </Text>
    </ScrollView>
  );
}
