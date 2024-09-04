import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomText from "../CustomText";
import FlatButton from "../ui/FlatButton";
import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Register = ({ onAuthenticate }) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
    name: false,
  });

  const navigation = useNavigation();

  function switchAuthModeHandler() {
    navigation.replace("loginScreen");
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword, name } = credentials;

    email = email.trim();
    password = password.trim();
    name = name.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;
    const nameIsValid = name.length > 0 && name.length <= 10;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      !emailsAreEqual ||
      !passwordsAreEqual ||
      !nameIsValid
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
        name: !nameIsValid,
      });
      return;
    }

    onAuthenticate({ email, password, name });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={false}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          <CustomText tx="register-screen.log-in-instead" />
        </FlatButton>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
