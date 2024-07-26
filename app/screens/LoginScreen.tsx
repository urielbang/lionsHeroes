import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Header } from "../components/Header";
import Login from "../components/Auth/Login";

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["#2c3e50", "#34495e"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Header text="welcome-screen.login" />
      <Login />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
