import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Register from "../components/Auth/Register";

import React from "react";
import { Header } from "../components/Header";

export default function RegisterScreen() {
  return (
    <LinearGradient
      colors={["#2c3e50", "#34495e"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Header text="welcome-screen.register" />
      <Register />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
