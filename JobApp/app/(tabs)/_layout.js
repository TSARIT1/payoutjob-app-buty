


import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          backgroundColor: "#0F111A",
          height: 70,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: "absolute",
          elevation: 15,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginBottom: 6,
        },
      }}
    >
    
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="home" color={color} focused={focused} />
          ),
        }}
      />

   
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Job",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="briefcase" color={color} focused={focused} />
          ),
        }}
      />

     
      <Tabs.Screen
        name="Responses"
        options={{
          title: "Responses",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="file-alt" color={color} focused={focused} />
          ),
        }}
      />

     
      <Tabs.Screen
        name="seekho"
        options={{
          title: "Seekho",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="graduation-cap" color={color} focused={focused} />
          ),
        }}
      />

    
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="user" color={color} focused={focused} />
          ),
        }}
      />

     
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="cog" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}



function TabIcon({ icon, color, focused }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: focused ? "#E0E7FF" : "transparent",
        padding: focused ? 10 : 6,
        borderRadius: 16,
        transform: [{ translateY: focused ? -6 : 0 }],
        shadowColor: focused ? "#2563EB" : "transparent",
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: focused ? 6 : 0,
      }}
    >
      <FontAwesome5
        name={icon}
        size={focused ? 20 : 18}
        color={focused ? "#2563EB" : color}
      />
    </View>
  );
}
