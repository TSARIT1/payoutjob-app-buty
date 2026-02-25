import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function JobDetail() {
  const {
    title,
    company,
    salary,
    location,
    type,
  } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>

     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>

        <View style={styles.row}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.verified}>✔ Verified</Text>
        </View>

        <View style={styles.tags}>
          <Text style={styles.tag}>{type}</Text>
          <Text style={styles.tag}>{location}</Text>
        </View>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Job Description</Text>
        <Text style={styles.text}>
          We are looking for a skilled candidate who can handle responsibilities,
          communicate well, and grow with the company.
        </Text>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Required Skills</Text>

        <View style={styles.skillRow}>
          {["Communication", "Basic Computer", "Team Work", "Time Management"].map(
            (skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill}
              </Text>
            )
          )}
        </View>
      </View>

     
<TouchableOpacity
  style={styles.applyBtn}
  onPress={() =>
    router.push({
      pathname: "component/apply",
      params: {
        title,
        company,
        salary,
        location,
        type,
      },
    })
  }
>
  <Text style={styles.applyText}>Apply for this Job</Text>
</TouchableOpacity>


      <View style={{ height: 40 }} />
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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },

  card: {
    backgroundColor: "#1C1F2E",
    padding: 20,
    borderRadius: 20,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  company: {
    color: "#aaa",
    marginTop: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  salary: {
    color: "#00C9A7",
    fontWeight: "bold",
  },

  verified: {
    color: "#6C63FF",
  },

  tags: {
    flexDirection: "row",
    marginTop: 12,
  },

  tag: {
    backgroundColor: "#2A2E43",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    marginRight: 8,
    fontSize: 12,
  },

  section: {
    marginTop: 25,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  text: {
    color: "#bbb",
    lineHeight: 20,
  },

  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skill: {
    backgroundColor: "#1C1F2E",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 12,
  },

  applyBtn: {
    backgroundColor: "#6C63FF",
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  applyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
