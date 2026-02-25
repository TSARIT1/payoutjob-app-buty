
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Setting() {
  const router = useRouter();

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive" },
    ]);
  };

  const Item = ({ icon, title, route, danger }) => (
    <TouchableOpacity
      style={[styles.item, danger && styles.dangerItem]}
      onPress={() => router.push(route)}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={22}
        color={danger ? "#ff4d4d" : "#fff"}
      />
      <Text style={[styles.itemText, danger && { color: "#ff4d4d" }]}>
        {title}
      </Text>
      {!danger && (
        <Ionicons name="chevron-forward" size={20} color="#6C63FF" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Settings</Text>

     
      <Item
        icon="briefcase-outline"
        title="Applied Jobs"
        route="component/Applied"
      />


     
      <Item
        icon="notifications-outline"
        title="Notifications"
        route="component/notification"
      />

      <View style={styles.divider} />

   
      <Item
        icon="help-circle-outline"
        title="Help & Support"
        route="component/Help&support"
      />

      <Item
        icon="document-text-outline"
        title="Privacy Policy"
        route="component/privacy&policy"
      />

      <View style={styles.divider} />

    
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Ionicons name="log-out-outline" size={22} color="#ff4d4d" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F111A",
    padding: 20,
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 40,
    marginBottom: 25,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1F2E",
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#2A2E43",
  },

  itemText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: "#fff",
  },

  divider: {
    height: 1,
    backgroundColor: "#2A2E43",
    marginVertical: 22,
  },

  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ff4d4d",
    backgroundColor: "#1C1F2E",
  },

  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#ff4d4d",
    fontWeight: "600",
  },
});

