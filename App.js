import { useEffect, useRef } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <LinearGradient colors={["#1E3A5F", "#1F485B"]} style={styles.background}>
        <View style={styles.containerImage}>
          <Image
            source={require("./assets/android-chrome-192x192.png")}
            style={styles.image}
          />
        </View>

        <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>לחץ כאן</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  text: {
    backgroundColor: "transparent",
    color: "black",
    textAlign: "right",
    fontFamily: "sans-serif",
    fontSize: 26,
    fontWeight: "bold",
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  containerImage: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
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
  languageItem: {},
});
