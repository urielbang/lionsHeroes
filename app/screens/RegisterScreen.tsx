import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import React from "react";

export default function RegisterScreen() {
  return (
    <LinearGradient
      colors={["#2c3e50", "#34495e"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
