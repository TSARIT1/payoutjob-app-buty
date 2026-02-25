import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Responses() {
  const responses = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Pvt Ltd",
      status: "Pending",
      location: "Remote",
      appliedOn: "2 Feb 2026",
    },
    {
      id: 2,
      title: "Telecaller",
      company: "Greenshopgo India Pvt Ltd",
      status: "Viewed",
      location: "Delhi",
      appliedOn: "30 Jan 2026",
    },
    {
      id: 3,
      title: "Delivery Executive",
      company: "Zomato",
      status: "Selected",
      location: "Kanpur",
      appliedOn: "28 Jan 2026",
    },
    {
      id: 4,
      title: "Office Assistant",
      company: "ABC Pvt Ltd",
      status: "Rejected",
      location: "Lucknow",
      appliedOn: "25 Jan 2026",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return styles.pending;
      case "Viewed":
        return styles.viewed;
      case "Selected":
        return styles.selected;
      case "Rejected":
        return styles.rejected;
      default:
        return {};
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     
      <View style={styles.header}>
        <Text style={styles.title}>Responses</Text>
        <Ionicons name="notifications-outline" size={26} color="#fff" />
      </View>

     
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <MaterialIcons name="send" size={24} color="#6C63FF" />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Applied</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="eye" size={24} color="#00C9A7" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Viewed</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle" size={24} color="#FFB800" />
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Selected</Text>
        </View>
      </View>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["All", "Pending", "Viewed", "Selected", "Rejected"].map(
          (item, index) => (
            <View key={index} style={styles.filterChip}>
              <Text style={styles.filterText}>{item}</Text>
            </View>
          )
        )}
      </ScrollView>

     
      <Text style={styles.sectionTitle}>Your Applications</Text>

      {responses.map((item) => (
        <View key={item.id} style={styles.responseCard}>
          <View style={styles.responseTop}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={[styles.status, getStatusStyle(item.status)]}>
              {item.status}
            </Text>
          </View>

          <Text style={styles.company}>{item.company}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="location" size={14} color="#aaa" />
              <Text style={styles.metaText}>{item.location}</Text>
            </View>

            <View style={styles.metaItem}>
              <FontAwesome5 name="calendar-alt" size={13} color="#aaa" />
              <Text style={styles.metaText}>{item.appliedOn}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.viewBtnText}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}

      
      <View style={styles.tipBox}>
        <Ionicons name="information-circle" size={22} color="#6C63FF" />
        <Text style={styles.tipText}>
          Tip: Complete your profile to get faster responses from recruiters.
        </Text>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F111A",
    padding: 20,
  },

  header: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  statCard: {
    backgroundColor: "#1C1F2E",
    width: "32%",
    padding: 15,
    borderRadius: 18,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 16,
  },

  statLabel: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },

  filterChip: {
    backgroundColor: "#1C1F2E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 25,
    marginRight: 10,
  },

  filterText: {
    color: "#fff",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 15,
  },

  responseCard: {
    backgroundColor: "#1C1F2E",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
  },

  responseTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  status: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: "#fff",
  },

  pending: {
    backgroundColor: "#FFB800",
  },

  viewed: {
    backgroundColor: "#6C63FF",
  },

  selected: {
    backgroundColor: "#00C9A7",
  },

  rejected: {
    backgroundColor: "#FF5C5C",
  },

  company: {
    color: "#aaa",
    marginTop: 6,
  },

  metaRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  metaText: {
    color: "#aaa",
    fontSize: 12,
    marginLeft: 5,
  },

  viewBtn: {
    backgroundColor: "#6C63FF",
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 25,
    alignItems: "center",
  },

  viewBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  tipBox: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 15,
    borderRadius: 18,
    marginTop: 25,
    alignItems: "center",
  },

  tipText: {
    color: "#aaa",
    marginLeft: 10,
    fontSize: 13,
    flex: 1,
  },
});