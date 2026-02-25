import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import * as DocumentPicker from "expo-document-picker";

export default function Apply() {

  
  const { title, company, salary, location, type } =
    useLocalSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const data = await AsyncStorage.getItem("profileData");
      if (data) {
        const profile = JSON.parse(data);
        setName(profile.name || "");
        setEmail(profile.email || "");
        setResume(profile.resume || "");
      }
    } catch (error) {
      console.log(error);
    }
  };

 
  const uploadResume = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.assets) {
      setResume(result.assets[0].name);
    }
  };

  
  const handleSubmit = () => {
    if (!name || !email || !phone || !coverLetter) {
      Alert.alert("Error ", "Please fill all required fields");
      return;
    }

    const applicationData = {
      jobTitle: title,
      company,
      salary,
      location,
      type,
      applicantName: name,
      applicantEmail: email,
      phone,
      resume,
      coverLetter,
    };

    console.log("Submitted Data:", applicationData);

    Alert.alert(
      "Application Submitted 🎉",
      `You applied for ${title} at ${company}`
    );

    setPhone("");
    setCoverLetter("");
  };

  return (
    <ScrollView style={styles.container}>
      
    
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.jobInfo}>{location} • {type}</Text>
        <Text style={styles.salary}>{salary}</Text>
      </View>

      
      <View style={styles.card}>

        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone *</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter phone number"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
        />

       
        <Text style={styles.label}>Resume *</Text>
        <TouchableOpacity style={styles.resumeBtn} onPress={uploadResume}>
          <Text style={styles.resumeText}>
            {resume ? resume : "Upload Resume"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Cover Letter *</Text>
        <TextInput
          style={[styles.input, { height: 120 }]}
          value={coverLetter}
          onChangeText={setCoverLetter}
          placeholder="Write why you are perfect for this job..."
          placeholderTextColor="#aaa"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Application</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F111A",
    padding: 20,
  },

  jobCard: {
    backgroundColor: "#1C1F2E",
    padding: 18,
    borderRadius: 18,
    marginTop: 40,
  },

  jobTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  company: {
    color: "#aaa",
    marginTop: 4,
  },

  jobInfo: {
    color: "#aaa",
    marginTop: 4,
  },

  salary: {
    color: "#00C9A7",
    marginTop: 4,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#1C1F2E",
    padding: 18,
    borderRadius: 18,
    marginTop: 20,
  },

  label: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#2A2E43",
    borderRadius: 12,
    padding: 12,
    color: "#fff",
    marginTop: 5,
  },

  resumeBtn: {
    backgroundColor: "#2A2E43",
    padding: 12,
    borderRadius: 12,
    marginTop: 6,
  },

  resumeText: {
    color: "#fff",
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
