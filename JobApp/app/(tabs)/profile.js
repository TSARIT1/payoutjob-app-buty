

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [profile, setProfile] = useState({
    name: "Your Name",
    role: "React Native Developer",
    email: "",
    bio: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    resume: null,
    image: null,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await AsyncStorage.getItem("profileData");
    if (data) setProfile(JSON.parse(data));
  };

  const saveProfile = async () => {
    await AsyncStorage.setItem("profileData", JSON.stringify(profile));
    Alert.alert("Saved", "Profile Updated Successfully");
    setEditMode(false);
  };

  const pickResume = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.assets) {
      setProfile({ ...profile, resume: result.assets[0].name });
    }
  };

  const deleteResume = () => {
    setProfile({ ...profile, resume: null });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setProfile({ ...profile, image: result.assets[0].uri });
    }
  };

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => setEditMode(!editMode)}>
          <FontAwesome name="edit" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

     
      <View style={styles.profileCard}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        
         
<View
  style={{
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 15,
  }}
>
  <FontAwesome name="user" size={40} color="#ffffff" />
</View>
        </TouchableOpacity>

        {editMode && (
          <TouchableOpacity onPress={pickImage}>
            <Text style={{ color: "#6C63FF", marginTop: 8 }}>
              Change Profile Photo
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
      </View>

     
      <View style={styles.infoCard}>
        {[
          { label: "Email", key: "email", icon: "envelope" },
          { label: "Location", key: "location", icon: "map-marker" },
          { label: "Education", key: "education", icon: "graduation-cap" },
          { label: "Experience", key: "experience", icon: "briefcase" },
          { label: "Skills", key: "skills", icon: "code" },
          { label: "Bio", key: "bio", icon: "user" },
        ].map((item, index) => (
          <View style={styles.inputBox} key={index}>
            <Text style={styles.label}>{item.label}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name={item.icon}
                size={18}
                color="#aaa"
                style={{ marginRight: 8 }}
              />
              <TextInput
                style={styles.input}
                editable={editMode}
                value={profile[item.key]}
                onChangeText={(text) =>
                  setProfile({ ...profile, [item.key]: text })
                }
              />
            </View>
          </View>
        ))}

       
        <TouchableOpacity style={styles.resumeBtn} onPress={pickResume}>
          <FontAwesome name="file-pdf-o" size={18} color="#fff" />
          <Text style={styles.resumeText}>
            {profile.resume ? profile.resume : "Upload Resume"}
          </Text>
        </TouchableOpacity>

        {profile.resume && (
          <TouchableOpacity style={styles.deleteBtn} onPress={deleteResume}>
            <FontAwesome name="trash" size={16} color="#fff" />
            <Text style={styles.deleteText}>Remove Resume</Text>
          </TouchableOpacity>
        )}

        {editMode && (
          <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        )}
      </View>

      
      <View style={styles.infoCard}>
        <Text style={{ color: "#6C63FF", fontSize: 16, marginBottom: 10 }}>
          Achievements & Stats
        </Text>

        <View style={styles.infoRow}>
          <FontAwesome name="trophy" size={18} color="#FFD700" />
          <Text style={styles.infoText}>Completed 15+ Projects</Text>
        </View>

        <View style={styles.infoRow}>
          <FontAwesome name="github" size={18} color="#fff" />
          <Text style={styles.infoText}>GitHub: github.com/yourprofile</Text>
        </View>

        <View style={styles.infoRow}>
          <FontAwesome name="linkedin" size={18} color="#0A66C2" />
          <Text style={styles.infoText}>LinkedIn: linkedin.com/in/yourprofile</Text>
        </View>
      </View>

     
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}
          >
            <FontAwesome name="close" size={30} color="#fff" />
          </TouchableOpacity>

          <Image
            source={{ uri: profile.image }}
            style={styles.fullImage}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"#0F111A",padding:20},
  header:{marginTop:45,flexDirection:"row",justifyContent:"space-between"},
  title:{color:"#fff",fontSize:22,fontWeight:"bold"},
  profileCard:{alignItems:"center",marginTop:25},
  avatar:{width:90,height:90,borderRadius:45},
  name:{color:"#fff",fontSize:20,fontWeight:"bold",marginTop:10},
  role:{color:"#aaa"},
  infoCard:{backgroundColor:"#1C1F2E",padding:18,borderRadius:18,marginTop:25},
  inputBox:{marginBottom:14},
  label:{color:"#aaa",fontSize:12,marginBottom:6},
  input:{backgroundColor:"#2A2E43",borderRadius:12,padding:12,color:"#fff",flex:1},
  resumeBtn:{flexDirection:"row",alignItems:"center",backgroundColor:"#2A2E43",padding:12,borderRadius:12,marginTop:10},
  resumeText:{color:"#fff",marginLeft:8},
  deleteBtn:{flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#C0392B",padding:10,borderRadius:25,marginTop:10},
  deleteText:{color:"#fff",marginLeft:6},
  saveBtn:{backgroundColor:"#6C63FF",paddingVertical:12,borderRadius:30,alignItems:"center",marginTop:14},
  saveText:{color:"#fff",fontWeight:"bold"},
  infoRow:{flexDirection:"row",alignItems:"center",marginBottom:12},
  infoText:{color:"#fff",marginLeft:10},
  modalContainer:{flex:1,backgroundColor:"rgba(0,0,0,0.95)",justifyContent:"center",alignItems:"center"},
  fullImage:{width:"100%",height:"80%"},
  closeBtn:{position:"absolute",top:50,right:20,zIndex:10},
});
