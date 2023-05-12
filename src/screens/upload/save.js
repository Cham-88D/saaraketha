import BottomSheet from "@gorhom/bottom-sheet";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Dialog, Portal, Provider, Avatar, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Save = ({ route }) => {
  const navigation = useNavigation();
  const { params } = route;

  useEffect(() => {
    if (params === undefined) {
      navigation.navigate('Upload');
    }
  }, [params, navigation]);

  

  useEffect(() => {
    if (params !== undefined) {
      let { url , pred } = route.params;
      setPredict(pred);
      setPhoto(url);
    }
 
  }, [params]);

  const bottomSheetRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [photo, setPhoto] = useState("");
  const [predict, setPredict] = useState("");
  

  const TextArea = () => {
    if (predict === "ThripsDamage" || predict === "Thrips_damage") {
      return (
        <View style={{ marginLeft: 130, marginTop: 30, marginRight: 20 }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: FontFamily.urbanistSemibold,
            }}
          >
            Thrips Damage
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FontFamily.urbanistMedium,
              marginTop: 10,
              textAlign: "left",
            }}
          >
            Rice blast caused by the fungus Magnopothe oryzae , is generally
            considered the most destructive disease of the rice . Rice blast is
            named as leaf blast , nodel blast,panical blast or neck blast, based
            on the part of the plant infected . A leaf blast infection can kill
            seedings or plants up to the tillering stage. Rce blast occurs in
            areas with low soil moisture, frequent and prolonged periods or rain
            shower,and cool temperature in the daytime.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FontFamily.urbanistSemibold,
            }}
          >
            Symptoms
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FontFamily.urbanistMedium,
              marginTop: 10,
              textAlign: "left",
            }}
          >
            initial symptoms appear as white to gray-green lesions or spots,
            with dark green border
          </Text>
        </View>
      );
    } else if (predict === "rice_blast"|| predict === "RiceBlast" ) {
      return(
        <View style={{ marginLeft: 130, marginTop: 30, marginRight: 20 }}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: FontFamily.urbanistSemibold,
          }}
        >
          Rice Blast
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontFamily.urbanistMedium,
            marginTop: 10,
            textAlign: "left",
          }}
        >
          Rice blast caused by the fungus Magnopothe oryzae , is generally
          considered the most destructive disease of the rice . Rice blast is
          named as leaf blast , nodel blast,panical blast or neck blast, based
          on the part of the plant infected . A leaf blast infection can kill
          seedings or plants up to the tillering stage. Rce blast occurs in
          areas with low soil moisture, frequent and prolonged periods or rain
          shower,and cool temperature in the daytime.
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontFamily.urbanistSemibold,
          }}
        >
          Symptoms
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontFamily.urbanistMedium,
            marginTop: 10,
            textAlign: "left",
          }}
        >
          initial symptoms appear as white to gray-green lesions or spots,
          with dark green border
        </Text>
        </View>
        
      )
    } else {
      return (
        <View style={{ marginLeft: 13, marginTop: 30, marginRight: 20 }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: FontFamily.urbanistSemibold,
            }}
          >
            Healthy 
          </Text>
         
        </View>
      );
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../../../assets/bg3.png")}
        style={styles.landing}
      >
        <Provider>
          <View>
            <Portal>
              <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: FontFamily.urbanistSemibold,
                  }}
                >
                  Prediction Status
                </Text>
              </View>

              <View style={{ marginLeft: 150, marginTop: 30, marginRight: 20 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: FontFamily.urbanistSemibold,
                  }}
                >
                  Captured Image
                </Text>
              </View>
              {photo && (
                <Image
                  style={{
                    width: 352,
                    height: 190,
                    borderRadius: 10,
                    marginLeft: 20,
                    marginTop: 5,
                  }}
                  resizeMode="cover"
                  source={{ uri: photo }}
                />
              )}
              <TextArea />
              <Dialog
                visible={visible}
                onDismiss={hideDialog}
                style={{
                  backgroundColor: "white",
                  marginBottom: 200,
                  paddingBottom: 60,
                }}
              >
                <Dialog.Content>
                  <View style={styles.card}>
                    <Avatar.Icon
                      icon={() => <Ionicons name="cloud-upload" size={40} />}
                      style={styles.avatar}
                    />
                    <View>
                      <Title
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        Save Details
                      </Title>
                      <View style={styles.contentGp}>
                        <Pressable style={styles.press} onPress={showDialog}>
                          <LinearGradient
                            style={[
                              styles.groupChild,
                              styles.groupParentLayout,
                            ]}
                            locations={[0, 1]}
                            colors={["#5ebc00", "#bbff4d"]}
                          />
                          <Text
                            style={[
                              styles.diseaseDetection,
                              styles.ravinduTypo,
                              { marginLeft: 50 },
                            ]}
                          >
                            Save
                          </Text>
                        </Pressable>

                        <Pressable style={styles.press2} onPress={hideDialog}>
                          <LinearGradient
                            style={[
                              styles.groupChild,
                              styles.groupParentLayout,
                            ]}
                            locations={[0, 1]}
                            colors={["#333333", "#333333"]}
                          />

                          <Text
                            style={[
                              styles.diseaseDetection,
                              styles.ravinduTypo,
                              { marginLeft: 30 },
                              { color: "white" },
                            ]}
                          >
                            Save as PDF
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Dialog.Content>
              </Dialog>
            </Portal>
          </View>
        </Provider>
      </ImageBackground>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["15%", "20%"]}
        initialSnapIndex={0}
        borderRadius={100}
        handleIndicatorStyle={{ backgroundColor: "#96E42E" }}
      >
        <Pressable style={styles.press3} onPress={showDialog}>
          <LinearGradient
            style={[styles.groupChild1, styles.groupParentLayout1]}
            locations={[0, 1]}
            colors={["#5ebc00", "#bbff4d"]}
          />

          <Text
            style={[
              styles.diseaseDetection1,
              styles.ravinduTypo1,
              { color: "black" },
              { marginLeft: 18 },
            ]}
          >
            Save Details
          </Text>
        </Pressable>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  landing: {
    backgroundColor: "#edebeb",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },

  groupChild1: {
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupParentLayout1: {
    height: 58,
    width: 200,
    left: 0,
  },

  ravinduTypo1: {
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  diseaseDetection1: {
    top: 16,
    left: 45,
    width: 259,
    height: 25,
    textAlign: "left",
    color: Color.darkslategray_200,
  },
  press3: {
    left: 100,
  },

  avatar: {
    marginHorizontal: 115,
    backgroundColor: "white",
  },

  groupChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupParentLayout: {
    height: 58,
    width: 200,
    left: 0,
  },
  groupPosition: {
    left: 15,
    top: 15,
    position: "absolute",
  },
  groupItem: {
    width: 28,
    height: 28,
  },
  ravinduTypo: {
    fontFamily: FontFamily.urbanistSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  diseaseDetection: {
    top: 16,
    left: 30,
    textAlign: "center",
    color: Color.darkslategray_100,
  },
  press: {
    top: 10,
  },
  press2: {
    top: 20,
    marginBottom: 10,
  },
  press4: {
    top: 20,
    marginBottom: 20,
  },
  contentGp: {
    left: 50,
  },
  card: {
    marginTop: 1,
  },
});

export default Save;
