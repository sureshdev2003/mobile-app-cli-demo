import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");   // Navigate to Home Screen
    }, 2000); // 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://i.ibb.co/2FsfXqM/splash-logo.png" }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
  },
});
