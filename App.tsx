import React, { useContext, useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthContextProvider, { AuthContext } from "./app/store/auth.context";
import HomeLionsScreen from "./app/screens/HomeLionsScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const authCnx = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCnx.authenticate(storedToken);
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };

    fetchToken();
  }, [authCnx.token]);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="home" component={HomeLionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
