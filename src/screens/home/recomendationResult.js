import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const RecomendationResult = ({ route }) => {
  const { label } = route.params;
  const [deciptionList, setDescriptionList] = useState([
    { id: 1, value: '"At405"', description: "Sample Description" },
    { id: 2, value: '"At404"', description: "test Description" },
    { id: 3, value: '"At406"', description: "dummy Description" },
  ]);
  return (
    <ImageBackground
      source={require("../../../assets/bg3.png")}
      style={styles.landing}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Rice Variety Recommendation</Text>
          <Text
            style={styles.label}
          >{`Recommended rice variety: ${label}`}</Text>
          {deciptionList.map((data) => {
            console.log(
              "match condtion : " +
                (data.value == label) +
                " value " +
                data.value +
                " check " +
                label
            );
            if (data.value == label) {
              return (
                <Text style={[styles.label, { marginTop: 6 }]}>
                  {data.description}
                </Text>
              );
            }
          })}
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
  landing: {
    backgroundColor: "#edebeb",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000033",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#000",
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
    height: 250,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RecomendationResult;
