import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function PredictionScreen() {
  const [state, setState] = useState("");
  const [year, setYear] = useState("");
  const [nitrogen_prg, setNitrogenPrg] = useState("");
  const [nitrogen_Pounds_Acre, setNitrogenPoundsAcre] = useState("");
  const [phosphorous_prg, setPhosphorousPrg] = useState("");
  const [phosphorous_Pounds_Acre, setPhosphorousPoundsAcre] = useState("");
  const [potash_prg, setPotashPrg] = useState("");
  const [potash_pounds_Acre, setPotashPoundsAcre] = useState("");
  const [areaPlanted_acres, setAreaPlantedAcres] = useState("");
  const [harvested_Area_acres, setHarvestedAreaAcres] = useState("");
  const [lint_Yield_Pounds_Harvested_Acre, setLintYield] = useState("");
  const [prediction, setPrediction] = useState("");

  const navigation = useNavigation();

  const validateInputs = () => {
    if (
      state === "" ||
      nitrogen_prg === "" ||
      nitrogen_Pounds_Acre === "" ||
      phosphorous_prg === "" ||
      phosphorous_Pounds_Acre === "" ||
      potash_prg === "" ||
      potash_pounds_Acre === "" ||
      areaPlanted_acres === "" ||
      harvested_Area_acres === "" ||
      lint_Yield_Pounds_Harvested_Acre === ""
    ) {
      Alert.alert("All fields are required.");
      return false;
    }

    return true;
  };

  const predictCropYield = () => {
    if (!validateInputs()) {
      return;
    }

    axios
      .post("http://192.168.8.101:5000/predict", {
        state: state,
        year: 2020,
        nitrogen_presentage: nitrogen_prg,
        nitrogen_Pounds_Acre: nitrogen_Pounds_Acre,
        phosphorous_presentage: phosphorous_prg,
        phosphorous_Pounds_Acre: phosphorous_Pounds_Acre,
        potash_presentage: potash_prg,
        potash_pounds_Acre: potash_pounds_Acre,
        areaPlanted_acres: areaPlanted_acres,
        harvested_Area_acres: harvested_Area_acres,
        lint_Yield_Pounds_Harvested_Acre: lint_Yield_Pounds_Harvested_Acre,
      })
      .then((response) => {
        setPrediction(response.data.prediction);

        navigation.navigate("PredictionResult", { label: prediction });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Background.jpg")}
        style={styles.background}
      >
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={{ color: "white", fontSize: 20 }}>State:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setState(text)}
              value={state}
            />
            {/* <Text>Year:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setYear(text)}
        value={year}
      /> */}
            <Text style={{ color: "white", fontSize: 20 }}>
              Nitrogen Presentage:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNitrogenPrg(text)}
              value={nitrogen_prg}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Nitrogen Pounds _Acre:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNitrogenPoundsAcre(text)}
              value={nitrogen_Pounds_Acre}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Phosphorous Presentage:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhosphorousPrg(text)}
              value={phosphorous_prg}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Phosphorous Pounds_Acre:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhosphorousPoundsAcre(text)}
              value={phosphorous_Pounds_Acre}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Potash Presentage:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPotashPrg(text)}
              value={potash_prg}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Potash Pounds_Acre:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPotashPoundsAcre(text)}
              value={potash_pounds_Acre}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Area Planted (in acres):
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setAreaPlantedAcres(text)}
              value={areaPlanted_acres}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Harvested Area (in acres):
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setHarvestedAreaAcres(text)}
              value={harvested_Area_acres}
            />
            <Text style={{ color: "white", fontSize: 20 }}>
              Lint Yield (in pounds harvested per acre):
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setLintYield(text)}
              value={lint_Yield_Pounds_Harvested_Acre}
            />
          </View>
          <Button
            title="Predict Crop Yield"
            onPress={predictCropYield}
            style={styles.button}
            textStyle={styles.buttonText}
          />

          {prediction !== "" && (
            <Text style={styles.prediction}>
              Predicted crop yield: {prediction} pounds per acre
            </Text>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 20,
    marginBottom: 20,
    marginTop: 70,
  },
  input: {
    height: 30,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "yellow",
    borderColor: "#ccc",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    resizeMode: "cover",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  prediction: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0099ff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
