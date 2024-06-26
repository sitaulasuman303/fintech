import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Lock1, Logout, Messages1, Profile2User } from "iconsax-react-native";
import { defaultStyles } from "@/constants/Styles";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const seetingsOptions = [
  {
    image: <Lock1 size="28" color="#185cab" />,
    title: "Change Password",
    onPress: () => null,
  },
  {
    image: <Profile2User size="28" color="#185cab" />,
    title: "Switch Login Role",
    onPress: () => null,
  },
  {
    image: <Messages1 size="28" color="#185cab" />,
    title: "Feedbacks",
    onPress: () => null,
  },
  {
    image: <Logout size="32" color="#185cab" />,
    title: "Logout",
    onPress: () => null,
  },
];
const MoreScreen = () => {
  const { user } = useUser();
  const { top } = useSafeAreaInsets();
  return (
    <View style={[defaultStyles.container, { marginTop: top }]}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.shadowBox}>
          {user?.imageUrl && (
            <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
          )}
        </View>
      </View>
      <View style={{ marginTop: 16, alignItems: "center", gap: 10 }}>
        <Text style={styles.textStyle}>
          {user?.firstName} {user?.lastName}
        </Text>
        <Text style={{ fontSize: 20 }}>{`${user?.phoneNumbers}`}</Text>
        <Text style={{ fontSize: 20 }}>Registered Nurse</Text>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 165,
    height: 165,
    borderRadius: 165,
  },
  shadowBox: {
    shadowColor: "black",
    borderRadius: 165,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 5,
    elevation: 20, // This is for Android shadow
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
export default MoreScreen;
