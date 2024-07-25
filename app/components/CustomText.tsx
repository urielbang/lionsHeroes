import React from "react";
import { Text as RNText, TextProps, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

interface CustomTextProps extends TextProps {
  tx?: string;
}

const CustomText = ({ tx, style, ...props }: CustomTextProps) => {
  const { t } = useTranslation();

  return (
    <RNText {...props} style={[styles.defaultFont, style]}>
      {/* {tx ? t(tx) : props.children} */}
      <Text>{t(String(tx))}</Text>
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "SFPro",
  },
});

export default CustomText;
