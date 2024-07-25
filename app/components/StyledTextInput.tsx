import { Ref, forwardRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";

export interface StyledTextInputProps extends TextInputProps {
  isPassword?: boolean;
}

export const StyledTextInput = forwardRef(function StyledTextInput(
  props: StyledTextInputProps,
  ref: Ref<TextInput>
) {
  const { isPassword } = props;
  const [showPassword, setShowPassword] = useState(false);

  const styples = StyleSheet.create({
    eyeIconContainer: {
      alignItems: "flex-end",
      paddingBottom: 5,
      position: "absolute",
      alignSelf: "center",
      top: 25,
      right: 15,
    },
  });

  return (
    <View>
      <TextInput
        {...props}
        ref={ref}
        placeholderTextColor={"#B8B8B8"}
        allowFontScaling={false}
        secureTextEntry={isPassword && !showPassword}
        style={[
          {
            borderColor: colors.text,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 0,
            fontSize: 18,
            height: 55,
            alignItems: "center",
            borderRadius: 10,
            color: colors.text,
            marginTop: 10,
            textAlign: "left",
          },
          props.style,
        ]}
      />
      {isPassword && (
        <TouchableOpacity
          style={styples.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <IconFeather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});
