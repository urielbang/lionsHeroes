import React, { useContext, useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthContextProvider, { AuthContext } from "./app/store/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authContext from "./app/store/auth.context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isTryLogIn, setIsTryLogin] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const authCnx = useContext(AuthContext);

      setIsTryLogin(true);
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCnx.authenticate(storedToken);
      }

      setIsTryLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryLogIn) {
    // return <AppLoading />;
  }

  return (
    <>
      <AuthContextProvider>
        <NavigationContainer>
          <StatusBar barStyle="auto" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="loginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}
const styles = StyleSheet.create({});
