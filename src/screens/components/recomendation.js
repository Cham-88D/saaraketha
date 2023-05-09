import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const RiceVarietyRecommendation = () => {
  const [N, setN] = useState("");
  const [P, setP] = useState("");
  const [K, setK] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [label, setLabel] = useState("");

  const navigation = useNavigation();

  const predictRice = () => {
    // const data = {
    //   N: parseFloat(N),
    //   P: parseFloat(P),
    //   K: parseFloat(K),
    //   temperature: parseFloat(temperature),
    //   humidity: parseFloat(humidity),
    //   ph: parseFloat(ph),
    //   rainfall: parseFloat(rainfall),
    // };
    var data = JSON.stringify({
      N: parseFloat(N),
      P: parseFloat(P),
      K: parseFloat(K),
      temperature: parseFloat(temperature),
      humidity: parseFloat(humidity),
      ph: parseFloat(ph),
      rainfall: parseFloat(rainfall),
    });
    var config = {
      method: "post",
      url: "http://192.168.8.101:5000/predictRice",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.predictRice_type));
        let result = JSON.stringify(response.data.predictRice_type);
        setLabel(result);

        navigation.navigate("RecomendationResult", { label: result });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rice Variety Recommendation</Text>
      <TextInput
        label="N"
        value={N}
        onChangeText={(text) => setN(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="P"
        value={P}
        onChangeText={(text) => setP(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="K"
        value={K}
        onChangeText={(text) => setK(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Temperature"
        value={temperature}
        onChangeText={(text) => setTemperature(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Humidity"
        value={humidity}
        onChangeText={(text) => setHumidity(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="pH"
        value={ph}
        onChangeText={(text) => setPh(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Rainfall"
        value={rainfall}
        onChangeText={(text) => setRainfall(text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={predictRice} style={styles.button}>
        Predict
      </Button>
      {/* {label !== "" && (
        <Text style={styles.label}>{`Recommended rice variety: ${label}`}</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 32,
  },
});

export default RiceVarietyRecommendation;
