import React, { useState, forwardRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import CustomText from "../CustomText";

const Input = forwardRef(function Input(
  {
    label,
    keyboardType = "default",
    secure = false,
    onUpdateValue,
    value,
    isInvalid = false,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const { height } = useWindowDimensions();
  const isIos = Platform.OS === "ios";

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        <CustomText tx={label} />
      </Text>
      <View>
        <TextInput
          {...props}
          ref={ref}
          style={[styles.input, isInvalid && styles.inputInvalid]}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure && !showPassword}
          onChangeText={onUpdateValue}
          value={value}
        />
        {secure && (
          <TouchableOpacity
            style={[
              styles.eyeIconContainer,
              { top: !isIos ? height * 0.008 : height * 0.005 },
            ]}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color={Colors.primary800}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "white",
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
  eyeIconContainer: {
    position: "absolute",
  },
});
