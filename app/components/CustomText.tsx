import React from "react";
import { Text as RNText, TextProps, StyleSheet, View } from "react-native";
import { translate, TxKeyPath } from "../i18n";

interface CustomTextProps extends TextProps {
  tx?: TxKeyPath;
}

const CustomText = ({ tx, style, children, ...props }: CustomTextProps) => {
  const translatedText = tx ? translate(tx) : null;
  return (
    <RNText {...props} style={[styles.defaultFont, style]}>
      {translatedText}
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "SFPro",
  },
});

export default CustomText;
