import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HelpSupport() {
    const router = useRouter();
  const openEmail = () => {
    Linking.openURL("mailto:support@payoutjob.com");
  };

  const openCall = () => {
    Linking.openURL("tel:+911234567890");
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Quick Help</Text>

          <View style={styles.helpItem}>
            <Ionicons name="briefcase-outline" size={22} color="#6C63FF" />
            <Text style={styles.helpText}>
              How do I apply for a job?
            </Text>
          </View>

          <View style={styles.helpItem}>
            <Ionicons name="wallet-outline" size={22} color="#6C63FF" />
            <Text style={styles.helpText}>
              When will I receive my payment?
            </Text>
          </View>

          <View style={styles.helpItem}>
            <Ionicons name="card-outline" size={22} color="#6C63FF" />
            <Text style={styles.helpText}>
              How to complete KYC verification?
            </Text>
          </View>

          <View style={styles.helpItem}>
            <Ionicons name="alert-circle-outline" size={22} color="#6C63FF" />
            <Text style={styles.helpText}>
              Why was my job application rejected?
            </Text>
          </View>
        </View>

       
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact Support</Text>

          <TouchableOpacity style={styles.contactBtn} onPress={openEmail}>
            <Ionicons name="mail-outline" size={22} color="#fff" />
            <Text style={styles.contactText}>Email Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBtn} onPress={openCall}>
            <Ionicons name="call-outline" size={22} color="#fff" />
            <Text style={styles.contactText}>Call Support</Text>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.footer}>
          Support available Mon–Sat, 10 AM – 6 PM
        </Text>
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
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },

  helpItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  helpText: {
    color: "#bbb",
    fontSize: 14,
    marginLeft: 12,
  },

  contactBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
    padding: 14,
    borderRadius: 14,
    marginTop: 12,
  },

  contactText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
  },

  footer: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30,
  },
});
