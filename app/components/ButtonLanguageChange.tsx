import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next, { languageResources } from "../services/i18next";
import languageList from "../services/languagesList.json";

export default function ButtonLanguageChange() {
  const { t } = useTranslation();
  const [visible, setVisible] = React.useState(false);
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  return (
    <>
      <View style={styles.content}>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
          <View style={styles.languageList}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageItem}
                  onPress={() => changeLanguage(item)}
                >
                  <Text>{languageList[item].nativeName}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
        <Text style={styles.text}>{t("welcome")}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.buttonText}>{t("change-language")}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  languageList: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#6258e8",
  },
  text: {
    backgroundColor: "transparent",
    color: "black",
    textAlign: "right",
    fontFamily: "sans-serif",
    fontSize: 26,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#a3731b",
    borderRadius: 25,
    alignItems: "center",
    width: "50%",
  },
});
