import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import CustomHeader from "@/components/customHeader/CustomHeader";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint={"extraLight"}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="dollar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="lifestyle" options={{ headerShown: false }} />
      <Tabs.Screen name="transfers" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
