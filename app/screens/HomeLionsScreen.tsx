import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Button from "../components/ui/Button";
import { AuthContext } from "../store/auth.context";

export default function HomeLionsScreen({ navigation }) {
  const authCnx = useContext(AuthContext);

  const handleLogout = async () => {
    authCnx.logout();
    navigation.navigate("WelcomeScreen");
  };

  return (
    <View>
      <Text>HomeLionsScreen</Text>
      <Button onPress={handleLogout}>log out</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
