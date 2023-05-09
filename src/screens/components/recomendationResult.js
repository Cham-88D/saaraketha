import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const RecomendationResult = ({ route }) => {
  const { label } = route.params;

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../Background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Rice Variety Recommendation</Text>
        <View style={styles.box}>
          <Text
            style={styles.label}
          >{`Recommended rice variety: ${label}`}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#fff",
  },
  box: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RecomendationResult;
