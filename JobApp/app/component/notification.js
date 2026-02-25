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

export default function Notification({ navigation }) {
    const router = useRouter();
  const notifications = [
    {
      id: 1,
      title: "Job Approved",
      message: "Your job application has been approved.",
      time: "2 min ago",
      unread: true,
      icon: "checkmark-circle-outline",
      color: "#00C9A7",
    },
    {
      id: 2,
      title: "Payment Credited",
      message: "₹250 has been added to your wallet.",
      time: "1 hour ago",
      unread: true,
      icon: "wallet-outline",
      color: "#6C63FF",
    },
    {
      id: 3,
      title: "KYC Under Review",
      message: "Your KYC verification is under review.",
      time: "Yesterday",
      unread: false,
      icon: "time-outline",
      color: "#FFD166",
    },
    {
      id: 4,
      title: "Withdraw Successful",
      message: "₹500 transferred to your bank account.",
      time: "2 days ago",
      unread: false,
      icon: "cash-outline",
      color: "#00C9A7",
    },
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
                          <Ionicons name="arrow-back" size={24} color="#fff" />
                        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {notifications.map((item) => (
          <View
            key={item.id}
            style={[
              styles.notificationCard,
              item.unread && styles.unreadCard,
            ]}
          >
            <View
              style={[
                styles.iconBox,
                { backgroundColor: item.color + "20" },
              ]}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={item.color}
              />
            </View>

            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            {item.unread && <View style={styles.dot} />}
          </View>
        ))}
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

  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#2A2E43",
    alignItems: "center",
  },

  unreadCard: {
    borderColor: "#6C63FF",
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  message: {
    color: "#bbb",
    fontSize: 13,
    marginTop: 2,
  },

  time: {
    color: "#888",
    fontSize: 11,
    marginTop: 4,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6C63FF",
  },
});
