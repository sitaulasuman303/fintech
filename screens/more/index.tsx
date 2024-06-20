import { View, Text, Image } from "react-native";
import React from "react";
import { Lock1, Logout, Messages1, Profile2User } from "iconsax-react-native";
import { defaultStyles } from "@/constants/Styles";
const seetingsOptions = [
  {
    image: <Lock1 size="28" color="#185cab" />,
    title: "Change Password",
    onPress: () => null,
    hasLogOut: true,
  },
  {
    image: <Profile2User size="28" color="#185cab" />,
    title: "Switch Login Role",
    onPress: () => null,
    hasLogOut: true,
  },
  {
    image: <Messages1 size="28" color="#185cab" />,
    title: "Feedbacks",
    onPress: () => null,
    hasLogOut: true,
  },
  {
    image: <Logout size="32" color="#185cab" />,
    title: "Logout",
    onPress: () => null,
    hasLogOut: false,
  },
];
const MoreScreen = () => {
  return <View style={defaultStyles.container}></View>;
};

export default MoreScreen;
