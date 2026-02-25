import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Jobs() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full Time", "Part Time", "WFH", "Nearby"];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
     
      <View style={styles.header}>
        <Text style={styles.logo}>TSAR IT PayoutJob</Text>
        <Ionicons name="notifications-outline" size={26} color="#fff" />
      </View>

      
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search job title, company, skill..."
          placeholderTextColor="#777"
          style={styles.searchInput}
        />
      </View>

     
      <View style={styles.locationRow}>
        <Ionicons name="location-sharp" size={16} color="#6C63FF" />
        <Text style={styles.locationText}>Uttar Pradesh</Text>
      </View>

     
      <View style={styles.statsRow}>
        <StatCard label="Jobs" value="50K+" />
        <StatCard label="Companies" value="20K+" />
        <StatCard label="Verified" value="100%" />
      </View>

    
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterRow}
      >
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterChip,
              activeFilter === f && styles.filterActive,
            ]}
            onPress={() => setActiveFilter(f)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === f && styles.filterTextActive,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      
      <Text style={styles.sectionTitle}>Apply to these Jobs</Text>

      <JobCard
        title="Telecaller"
        company="Greenshopgo India Pvt Ltd"
        salary="₹15,000 - ₹20,000"
        type="Full Time"
        location="Anand Vihar, Delhi"
        verified
      />

      <JobCard
        title="Delivery Executive"
        company="Zomato"
        salary="₹18,000 - ₹25,000"
        type="Part Time"
        location="Kanpur"
        verified
      />

      <JobCard
        title="Frontend Developer"
        company="Tech Solutions Pvt Ltd"
        salary="₹25,000 - ₹35,000"
        type="WFH"
        location="Remote • Varanasi"
        verified
      />

      <JobCard
        title="Office Assistant"
        company="ABC Pvt Ltd"
        salary="₹12,000 - ₹18,000"
        type="Full Time"
        location="Lucknow"
        verified
      />

      <JobCard
        title="Customer Support Executive"
        company="Flipkart"
        salary="₹20,000 - ₹30,000"
        type="WFH"
        location="Remote"
        verified
      />

      
      <View style={styles.tipBox}>
        <Ionicons name="information-circle" size={22} color="#00C9A7" />
        <Text style={styles.tipText}>
          Tip: Complete your profile to get 3x faster responses from recruiters.
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}



const StatCard = ({ label, value }) => (
  <View style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const JobCard = ({ title, company, salary, type, location, verified }) => (
  <View style={styles.jobCard}>
    <View style={styles.jobTop}>
      <Text style={styles.jobTitle}>{title}</Text>
      {verified && <Text style={styles.verified}>✔ Verified</Text>}
    </View>

    <Text style={styles.company}>{company}</Text>
    <Text style={styles.salary}>{salary}</Text>

    <View style={styles.jobMeta}>
      <View style={styles.metaItem}>
        <MaterialIcons name="work" size={14} color="#aaa" />
        <Text style={styles.metaText}>{type}</Text>
      </View>
      <View style={styles.metaItem}>
        <Ionicons name="location-outline" size={14} color="#aaa" />
        <Text style={styles.metaText}>{location}</Text>
      </View>
    </View>

    <View style={styles.jobFooter}>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="bookmark-outline" size={22} color="#aaa" />
      </TouchableOpacity>
    </View>
  </View>
);



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
  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 14,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },
  searchInput: {
    color: "#fff",
    marginLeft: 10,
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  locationText: {
    color: "#aaa",
    marginLeft: 6,
    fontSize: 13,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  statCard: {
    backgroundColor: "#1C1F2E",
    width: "32%",
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
  },
  statValue: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },
  filterRow: {
    marginTop: 25,
  },
  filterChip: {
    backgroundColor: "#1C1F2E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  filterActive: {
    backgroundColor: "#6C63FF",
  },
  filterText: {
    color: "#aaa",
    fontSize: 12,
  },
  filterTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  jobCard: {
    backgroundColor: "#1C1F2E",
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
  },
  jobTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  verified: {
    color: "#00C9A7",
    fontSize: 12,
  },
  company: {
    color: "#aaa",
    marginTop: 4,
  },
  salary: {
    color: "#00C9A7",
    marginTop: 8,
    fontWeight: "bold",
  },
  jobMeta: {
    marginTop: 10,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  metaText: {
    color: "#aaa",
    fontSize: 12,
    marginLeft: 6,
  },
  jobFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  applyBtn: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 25,
  },
  applyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tipBox: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 14,
    borderRadius: 16,
    marginTop: 30,
    alignItems: "center",
  },
  tipText: {
    color: "#aaa",
    fontSize: 12,
    marginLeft: 8,
    flex: 1,
  },
});