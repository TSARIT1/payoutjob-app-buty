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
import { router } from "expo-router";

export default function Home() {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Telecaller",
      company: "Greenshopgo Pvt Ltd",
      salary: "₹15,000 - ₹20,000",
      location: "Delhi",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Delivery Executive",
      company: "Zomato",
      salary: "₹18,000 - ₹25,000",
      location: "Kanpur",
      type: "Part Time",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Tech Solutions",
      salary: "₹25,000 - ₹40,000",
      location: "Remote",
      type: "WFH",
    },
    {
      id: 4,
      title: "Office Assistant",
      company: "ABC Pvt Ltd",
      salary: "₹12,000 - ₹18,000",
      location: "Lucknow",
      type: "Full Time",
    },
    {
      id: 5,
      title: "Customer Support",
      company: "Flipkart",
      salary: "₹20,000 - ₹30,000",
      location: "WFH",
      type: "Remote",
    },
  ];

  const JobCard = ({ job }) => (
    <TouchableOpacity
      style={styles.jobCard}
      activeOpacity={0.85}
      onPress={() =>
        router.push({
          pathname: "/component/jobdetail",
          params: job,
        })
      }
    >
      <View style={styles.jobTop}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.verified}>✔ Verified</Text>
      </View>

      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>

      <View style={styles.tagRow}>
        <Text style={styles.tag}>{job.type}</Text>
        <Text style={styles.tagLight}>{job.location}</Text>
      </View>

      <View style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply Now</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
   
      <View style={styles.header}>
        <Text style={styles.logo}>TSAR IT PayoutJob</Text>
        <Ionicons name="notifications-outline" size={26} color="#fff" />
      </View>

    
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search job title, company, skill..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

    
      <View style={styles.locationRow}>
        <Ionicons name="location" size={16} color="#6C63FF" />
        <Text style={styles.locationText}>Uttar Pradesh</Text>
      </View>

     
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Explore Work from Home Jobs</Text>
        <Text style={styles.heroSub}>
          10,000+ verified opportunities waiting for you
        </Text>
        <TouchableOpacity style={styles.heroBtn}>
          <Text style={styles.heroBtnText}>Start Applying</Text>
        </TouchableOpacity>
      </View>

    
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["WFH", "Part Time", "Freshers", "High Salary", "Night Shift"].map(
          (item, index) => (
            <View key={index} style={styles.filterChip}>
              <Text style={styles.filterText}>{item}</Text>
            </View>
          )
        )}
      </ScrollView>

      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Apply to these Jobs</Text>
        <TouchableOpacity onPress={() => setShowAllJobs(!showAllJobs)}>
          <Text style={styles.viewAll}>
            {showAllJobs ? "Show Less" : "View All"}
          </Text>
        </TouchableOpacity>
      </View>

      {!showAllJobs && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {jobs.map((job) => (
            <View key={job.id} style={{ marginRight: 15 }}>
              <JobCard job={job} />
            </View>
          ))}
        </ScrollView>
      )}

      {showAllJobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}

      
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <MaterialIcons name="work" size={24} color="#6C63FF" />
          <Text style={styles.statNumber}>50K+</Text>
          <Text style={styles.statLabel}>Jobs</Text>
        </View>

        <View style={styles.statBox}>
          <Ionicons name="people" size={24} color="#00C9A7" />
          <Text style={styles.statNumber}>20K+</Text>
          <Text style={styles.statLabel}>Companies</Text>
        </View>

        <View style={styles.statBox}>
          <Ionicons name="checkmark-done" size={24} color="#FFB800" />
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Verified</Text>
        </View>
      </View>

    
      <Text style={styles.sectionTitle}>Jobs for your needs</Text>

      <View style={styles.jobTypeRow}>
        <View style={styles.jobTypeCard}>
          <FontAwesome5 name="home" size={24} color="#6C63FF" />
          <Text style={styles.jobTypeText}>Work From Home</Text>
          <Text style={styles.jobTypeSub}>63 Jobs</Text>
        </View>

        <View style={styles.jobTypeCard}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#00C9A7" />
          <Text style={styles.jobTypeText}>Nearby Jobs</Text>
          <Text style={styles.jobTypeSub}>120 Jobs</Text>
        </View>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F111A", padding: 20 },
  header: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 14,
    borderRadius: 15,
    marginTop: 20,
  },
  searchInput: { marginLeft: 10, flex: 1, color: "#fff" },
  locationRow: { flexDirection: "row", marginTop: 12 },
  locationText: { color: "#aaa", marginLeft: 6 },
  hero: {
    backgroundColor: "#1C1F2E",
    borderRadius: 20,
    padding: 25,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  heroTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  heroSub: { color: "#bbb", marginTop: 8 },
  heroBtn: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 15,
    alignSelf: "flex-start",
  },
  heroBtnText: { color: "#fff", fontWeight: "bold" },
  filterChip: {
    backgroundColor: "#1C1F2E",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
    marginRight: 10,
  },
  filterText: { color: "#fff" },
  sectionHeader: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  viewAll: { color: "#6C63FF", fontWeight: "bold" },
  jobCard: {
    backgroundColor: "#1C1F2E",
    padding: 18,
    borderRadius: 20,
    width: 260,
    marginTop: 15,
  },
  jobTop: { flexDirection: "row", justifyContent: "space-between" },
  jobTitle: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  verified: { color: "#00C9A7", fontSize: 12 },
  company: { color: "#aaa", marginTop: 4 },
  salary: { color: "#00C9A7", marginTop: 8, fontWeight: "bold" },
  tagRow: { flexDirection: "row", marginTop: 10 },
  tag: {
    backgroundColor: "#2A2E43",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    marginRight: 8,
  },
  tagLight: {
    backgroundColor: "#2A2E43",
    color: "#bbb",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },
  applyBtn: {
    backgroundColor: "#6C63FF",
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 25,
    alignItems: "center",
  },
  applyText: { color: "#fff", fontWeight: "bold" },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },
  statBox: {
    backgroundColor: "#1C1F2E",
    width: "32%",
    borderRadius: 18,
    padding: 15,
    alignItems: "center",
  },
  statNumber: { color: "#fff", fontWeight: "bold", marginTop: 6 },
  statLabel: { color: "#aaa", fontSize: 12 },

  
  jobTypeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  jobTypeCard: {
    backgroundColor: "#1C1F2E",
    width: "48%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  jobTypeText: {
    color: "#fff",
    marginTop: 10,
    fontWeight: "bold",
  },

  jobTypeSub: {
    color: "#aaa",
    marginTop: 4,
  },
});


