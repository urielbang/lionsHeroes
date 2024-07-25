import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomText from "./CustomText";
import { useNavigation } from "@react-navigation/native";

export const Header = ({
  text,
  goBackCallback,
  shouldShowBackButton = true,
}: {
  text: string;
  goBackCallback?: () => void;
  shouldShowBackButton?: boolean;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {shouldShowBackButton && (
        <TouchableOpacity
          onPress={goBackCallback ?? navigation.goBack}
          style={styles.arrow}
        >
          <Icon name="angle-left" size={30} color="white" />
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
