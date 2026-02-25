import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginSignup() {   
  const router = useRouter();

  const [screen, setScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (!form.email) return;
    if (screen !== "forgot" && !form.password) return;
    if (screen === "signup" && !form.name) return;

    if (screen === "forgot") {
      setScreen("login");
      return;
    }

    
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>PayoutJob</Text>

        <Text style={styles.subtitle}>
          {screen === "login"
            ? "Login to your job account"
            : screen === "signup"
            ? "Create your job profile"
            : "Recover your password"}
        </Text>

        {screen === "signup" && (
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#888"
              style={styles.input}
              value={form.name}
              onChangeText={(t) => handleChange("name", t)}
            />
          </View>
        )}

        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={20} color="#aaa" />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            value={form.email}
            onChangeText={(t) => handleChange("email", t)}
          />
        </View>

        {screen !== "forgot" && (
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#aaa" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              style={styles.input}
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={(t) => handleChange("password", t)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
        )}

        {screen === "login" && (
          <TouchableOpacity onPress={() => setScreen("forgot")}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>
            {screen === "login"
              ? "Login"
              : screen === "signup"
              ? "Sign Up"
              : "Send Reset Link"}
          </Text>
        </TouchableOpacity>

        <View style={styles.switchRow}>
          {screen !== "login" && (
            <TouchableOpacity onPress={() => setScreen("login")}>
              <Text style={styles.switchText}>Back to Login</Text>
            </TouchableOpacity>
          )}

          {screen === "login" && (
            <TouchableOpacity onPress={() => setScreen("signup")}>
              <Text style={styles.switchText}>Create new account</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F111A",
    padding: 25,
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6C63FF",
    textAlign: "center",
  },
  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1F2E",
    padding: 14,
    borderRadius: 14,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
  link: {
    color: "#6C63FF",
    textAlign: "right",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#6C63FF",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  switchRow: {
    marginTop: 25,
    alignItems: "center",
  },
  switchText: {
    color: "#aaa",
    marginTop: 8,
  },
});
