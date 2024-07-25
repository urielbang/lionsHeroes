import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <WelcomeScreen />
    </>
  );
}
const styles = StyleSheet.create({});
