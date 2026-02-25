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

export default function Applied({ navigation }) {
    const router = useRouter();
  const jobs = [
    {
      id: 1,
      title: "Survey Form Filling",
      company: "DataPlus",
      date: "12 Feb 2026",
      status: "Pending",
    },
    {
      id: 2,
      title: "App Testing",
      company: "TechWorld",
      date: "10 Feb 2026",
      status: "Approved",
    },
    {
      id: 3,
      title: "Content Review",
      company: "MediaHub",
      date: "08 Feb 2026",
      status: "Rejected",
    },
  ];

  const statusColor = (status) => {
    if (status === "Approved") return "#00C9A7";
    if (status === "Rejected") return "#ff4d4d";
    return "#FFD166";
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Applied Jobs</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs.map((job) => (
          <View key={job.id} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.title}>{job.title}</Text>
              <Text
                style={[
                  styles.status,
                  { color: statusColor(job.status) },
                ]}
              >
                {job.status}
              </Text>
            </View>

            <Text style={styles.company}>{job.company}</Text>

            <View style={styles.footerRow}>
              <View style={styles.dateRow}>
                <Ionicons name="calendar-outline" size={14} color="#888" />
                <Text style={styles.date}>{job.date}</Text>
              </View>

              <TouchableOpacity style={styles.viewBtn}>
                <Text style={styles.viewText}>View</Text>
              </TouchableOpacity>
            </View>
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

  card: {
    backgroundColor: "#1C1F2E",
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: "#2A2E43",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  status: {
    fontSize: 13,
    fontWeight: "bold",
  },

  company: {
    color: "#aaa",
    marginTop: 6,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    color: "#888",
    fontSize: 12,
    marginLeft: 6,
  },

  viewBtn: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },

  viewText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
