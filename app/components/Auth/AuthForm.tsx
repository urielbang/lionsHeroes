import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../ui/Button";
import Input from "./Input";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../store/auth.context";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (credentials: {
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    name: string;
  }) => void;
  credentialsInvalid: {
    email: boolean;
    confirmEmail: boolean;
    password: boolean;
    confirmPassword: boolean;
    name: boolean;
  };
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  onSubmit,
  credentialsInvalid,
}) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const authCnx = useContext(AuthContext);
  const navigation = useNavigation();

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
    name: nameIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
      case "name":
        setEnteredName(enteredValue);
        break;
    }
  }

  async function submitHandler() {
    await onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      name: enteredName,
    });

    if (authCnx.isAuthenticated) {
      navigation.navigate("home");
    }
  }

  return (
    <View style={styles.form}>
      <View>
        {!isLogin && (
          <Input
            label="Name"
            onUpdateValue={updateInputValueHandler.bind(this, "name")}
            value={enteredName}
            keyboardType="default"
            isInvalid={nameIsInvalid}
          />
        )}

        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  buttons: {
    marginTop: 12,
  },
});
