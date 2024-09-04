import React from "react";
import { Text as RNText, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

const CustomText = ({ tx, style, ...props }) => {
  const { t } = useTranslation();

  return (
    <RNText {...props} style={[styles.defaultFont, style]}>
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
