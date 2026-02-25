import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PrivacyPolicy({ navigation }) {
    const router = useRouter();

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
                          <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 24 }} />
      </View>

      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>1. Introduction</Text>
          <Text style={styles.text}>
            We respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data while using our payout job application.
          </Text>

          <Text style={styles.title}>2. Information We Collect</Text>
          <Text style={styles.text}>
            • Personal details such as name, phone number, and email address.{"\n"}
            • Job application and activity data.{"\n"}
            • Payment and wallet-related information.
          </Text>

          <Text style={styles.title}>3. How We Use Your Information</Text>
          <Text style={styles.text}>
            • To provide and improve our services.{"\n"}
            • To process job applications and payouts.{"\n"}
            • To send important updates and notifications.
          </Text>

          <Text style={styles.title}>4. Data Security</Text>
          <Text style={styles.text}>
            We use industry-standard security measures to protect your data from
            unauthorized access, loss, or misuse.
          </Text>

          <Text style={styles.title}>5. Third-Party Services</Text>
          <Text style={styles.text}>
            We do not sell or share your personal data with third parties, except
            when required by law or for payment processing purposes.
          </Text>

          <Text style={styles.title}>6. Your Rights</Text>
          <Text style={styles.text}>
            You have the right to access, update, or request deletion of your
            personal data at any time.
          </Text>

          <Text style={styles.title}>7. Changes to Policy</Text>
          <Text style={styles.text}>
            This Privacy Policy may be updated from time to time. Continued use
            of the app means you accept the revised policy.
          </Text>

          <Text style={styles.footer}>
            Last updated: February 2026
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F111A",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#1C1F2E",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2A2E43",
    marginBottom: 30,
  },

  title: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 6,
  },

  text: {
    color: "#bbb",
    fontSize: 14,
    lineHeight: 22,
  },

  footer: {
    marginTop: 25,
    color: "#888",
    fontSize: 12,
    textAlign: "center",
  },
});
