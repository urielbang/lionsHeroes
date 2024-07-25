import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import CustomText from "./CustomText";

interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean;
  color?: String;
}

export function Button({
  isDisabled: disabled = false,
  color,
  onPress,
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      {...props}
      style={[styles.container, disabled && styles.disabled, props.style]}
    >
      <CustomText
        style={[styles.text, { color: color ? color : "white" }]}
        allowFontScaling={false}
        tx={children}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3FA2F6",
    borderRadius: 30,
    paddingVertical: 13,
    width: "85%",
    bottom: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  disabled: {
    backgroundColor: "#A0A0A0",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
