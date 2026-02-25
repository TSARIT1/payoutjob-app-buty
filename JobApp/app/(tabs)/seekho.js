import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Seekho() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
    
      <View style={styles.header}>
        <Text style={styles.title}>Seekho</Text>
        <Ionicons name="school-outline" size={26} color="#fff" />
      </View>

    
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Upgrade Your Skills</Text>
        <Text style={styles.heroSub}>
          Learn job-ready skills and increase your chances of getting hired
        </Text>

        <View style={styles.heroBadges}>
          <Text style={styles.heroBadge}>Free Courses</Text>
          <Text style={styles.heroBadge}>Job Focused</Text>
          <Text style={styles.heroBadge}>Certified</Text>
        </View>
      </View>

     
      <View style={styles.statsRow}>
        <StatCard icon="play-circle" label="Courses" value="120+" />
        <StatCard icon="users" label="Learners" value="50K+" />
        <StatCard icon="briefcase" label="Job Ready" value="100%" />
      </View>

     
      <Text style={styles.sectionTitle}>Popular Skills</Text>
      <View style={styles.skillRow}>
        <SkillChip icon="code" label="Frontend" />
        <SkillChip icon="mobile-alt" label="React Native" />
        <SkillChip icon="headset" label="Customer Support" />
        <SkillChip icon="bullhorn" label="Digital Marketing" />
        <SkillChip icon="chart-line" label="Sales" />
        <SkillChip icon="laptop-code" label="IT Basics" />
      </View>

     
      <Text style={styles.sectionTitle}>Recommended for You</Text>

      <CourseCard
        title="Frontend Development"
        level="Beginner"
        duration="6 Weeks"
        tag="High Demand"
        icon="laptop-code"
      />

      <CourseCard
        title="React Native Job Track"
        level="Intermediate"
        duration="8 Weeks"
        tag="Top Pick"
        icon="mobile-alt"
      />

      <CourseCard
        title="Customer Support Executive"
        level="Beginner"
        duration="4 Weeks"
        tag="WFH Jobs"
        icon="headset"
      />

    
      <Text style={styles.sectionTitle}>Career Paths</Text>

      <PathCard
        title="IT Job Path"
        desc="Learn basics → frontend → real projects → job ready"
        icon="briefcase"
      />

      <PathCard
        title="Work From Home Path"
        desc="Communication → tools → mock interviews"
        icon="home"
      />

     
      <View style={styles.tipBox}>
        <Ionicons name="bulb-outline" size={22} color="#FFB800" />
        <Text style={styles.tipText}>
          Tip: Completing courses increases recruiter responses by 3x.
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}



const StatCard = ({ icon, label, value }) => (
  <View style={styles.statCard}>
    <FontAwesome5 name={icon} size={22} color="#6C63FF" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const SkillChip = ({ icon, label }) => (
  <View style={styles.skillChip}>
    <FontAwesome5 name={icon} size={14} color="#00C9A7" />
    <Text style={styles.skillText}>{label}</Text>
  </View>
);

const CourseCard = ({ title, level, duration, tag, icon }) => (
  <View style={styles.courseCard}>
    <View style={styles.courseLeft}>
      <FontAwesome5 name={icon} size={28} color="#6C63FF" />
    </View>

    <View style={{ flex: 1 }}>
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.courseMeta}>
        {level} • {duration}
      </Text>

      <View style={styles.courseFooter}>
        <Text style={styles.courseTag}>{tag}</Text>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const PathCard = ({ title, desc, icon }) => (
  <View style={styles.pathCard}>
    <MaterialIcons name={icon} size={28} color="#6C63FF" />
    <View style={{ marginLeft: 12 }}>
      <Text style={styles.pathTitle}>{title}</Text>
      <Text style={styles.pathDesc}>{desc}</Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  heroCard: {
    backgroundColor: "#1C1F2E",
    padding: 22,
    borderRadius: 22,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  heroSub: {
    color: "#aaa",
    marginTop: 6,
  },
  heroBadges: {
    flexDirection: "row",
    marginTop: 15,
    flexWrap: "wrap",
  },
  heroBadge: {
    backgroundColor: "#2A2E43",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  statCard: {
    backgroundColor: "#1C1F2E",
    width: "32%",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
  },
  statValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
  },
  statLabel: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1F2E",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 10,
  },
  skillText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 6,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 16,
    borderRadius: 18,
    marginBottom: 15,
  },
  courseLeft: {
    width: 45,
    alignItems: "center",
    marginRight: 12,
    marginTop: 4,
  },
  courseTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  courseMeta: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  courseTag: {
    backgroundColor: "#2A2E43",
    color: "#00C9A7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 11,
  },
  startBtn: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  startText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  pathCard: {
    flexDirection: "row",
    backgroundColor: "#1C1F2E",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    alignItems: "center",
  },
  pathTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  pathDesc: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 2,
    width: "90%",
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