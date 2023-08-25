import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import TransparentButton from "./TransparentButton";
import React from "react";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.homePageContainer}>
      <Image
        style={styles.worldMapPic}
        source={require("../assets/images/worldMap.png")}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: 17,
          alignSelf: "center",
          marginTop: 36,
        }}
      >
        Your Compliance Dashboard
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/correct.png")}
          />
        </View>
        <TransparentButton
          title="know Your Compliance"
          onPress={() => props.navigation.navigate("Complaince")}
        />
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/newProject.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("NewProject")}
        >
          <Text style={styles.infoText}> My New Project </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/graph.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("progressApplication")}
        >
          <Text style={styles.infoText}>
           
            Application Progress & Reporting
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/infoPic.png")}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("UsePlatform");
          }}
        >
          <Text style={styles.infoText}> How to use this Platform </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/analyticspic.png")}
          />
        </View>
        <TouchableOpacity  style={styles.button} onPress={()=>{  props.navigation.navigate("Analytics")}} >
        <Text style={styles.infoText}> Analytics </Text>

        </TouchableOpacity>
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/cubes.png")}
          />
        </View>
        <Text style={styles.infoText}>
          {" "}
          Help WIth Pre- Compliance{`\n`} Product Design
        </Text>
      </View>
      <View style={styles.straightLine}></View>

      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/deliveryTruck.png")}
          />
        </View>
        <Text style={styles.infoText}>Logistic Support</Text>
      </View>
      <View style={styles.straightLine}></View>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyling}
            source={require("../assets/images/testPic.png")}
          />
        </View>
        <Text style={styles.infoText}> Test and Inspiration Support</Text>
      </View>
      <View style={styles.straightLine}></View>
      {/* <Button title="Go to  LogIn Screen" onPress={()=>props.navigation.navigate("SignUpPage")} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
  },
  worldMapPic: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#192e64",
  },
  infoContainer: {
    height: 80,
    width: 360,
    // backgroundColor: "red",
    alignSelf: "center",
    marginTop: 7,
    flexDirection: "row",
  },
  imageContainer: {
    height: 74,
    width: 74,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 9,
  },
  imageStyling: {
    justifyContent: "center",
    alignSelf: "center",
    // height:41
  },
  infoText: {
    alignSelf: "center",
    marginLeft: 35,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "500",
    color: "white",
  },
  straightLine: {
    width: 360,
    height: 1,
    backgroundColor: "#FF8025",
    marginTop: 8,
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
  },
});

export default HomeScreen;
