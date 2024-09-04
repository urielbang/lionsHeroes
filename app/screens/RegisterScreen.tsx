import { Alert, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Register from "../components/Auth/Register";
import { createUser } from "../utils/api/auth";

import { AuthContext } from "../store/auth.context";

import React, { useContext, useState } from "react";
import { Header } from "../components/Header";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {
  const [isAuth, setIsAuth] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleRegister = async ({ email, password, name }) => {
    setIsAuth(true);
    try {
      const token = await createUser(email, password, name);
      authCtx.authenticate(token);
      if (token) {
        await AsyncStorage.setItem("token", token);
        navigation.navigate("home");
      }
    } catch (error) {
      Alert.alert(
        "Auth Failed!",
        "Could not create user , please check your input and try again!"
      );
      setIsAuth(false);
    }
  };

  if (isAuth) {
    return <LoadingOverlay message="auth is in progress..." />;
  }

  return (
    <LinearGradient
      colors={["#2c3e50", "#34495e"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Header text="welcome-screen.register" />
      <Register onAuthenticate={handleRegister} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
