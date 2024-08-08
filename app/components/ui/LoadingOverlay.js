import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LoadingOverlay = ({ message }) => {
  return (
    <LinearGradient
      colors={["#2c3e50", "#34495e"]}
      style={styles.rootContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </LinearGradient>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
