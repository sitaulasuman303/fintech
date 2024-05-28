import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SignUpScreen = () => {
  const [country, setCountry] = useState("+977");
  const [number, setNumber] = useState("");
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started</Text>
      <Text style={[defaultStyles.descriptionText, { marginBottom: 30 }]}>
        Enter your phone number. We will send you a conformation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={country}
          onChangeText={setCountry}
          keyboardType="numeric"
          placeholderTextColor={Colors.gray}
          style={styles.input}
        />
        <TextInput
          value={number}
          onChangeText={setNumber}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor={Colors.gray}
          style={[styles.input, { flex: 1, marginLeft: 10 }]}
        />
      </View>
      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text
            style={[defaultStyles.descriptionText, { color: Colors.primary }]}
          >
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </Link>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          number === ""
            ? { backgroundColor: Colors.dark }
            : { backgroundColor: Colors.primary },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    backgroundColor: Colors.lightGray,
    padding: 20,
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
  },
});
export default SignUpScreen;
