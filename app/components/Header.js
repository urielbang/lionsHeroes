import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Header = ({
  text,
  goBackCallback,
  shouldShowBackButton = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {shouldShowBackButton && (
        <TouchableOpacity
          onPress={goBackCallback ?? navigation.goBack}
          style={styles.arrow}
        >
          <AntDesign
            name="left"
            size={26}
            color="white"
            style={{ fontWeight: "bold" }}
          />
        </TouchableOpacity>
      )}
      <CustomText allowFontScaling={false} style={styles.headline} tx={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 36,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  headline: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  arrow: {},
});
