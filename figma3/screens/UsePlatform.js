import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

const UsePlatform = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/backgroundImage.png")}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/Rocket.png")}
            />
          </View>
          <Text style={styles.containerText}> Click on start Project </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/industry.png")}
            />
          </View>
          <Text style={styles.containerText}> Enter Your Industry </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/package.png")}
            />
          </View>
          <Text style={styles.containerText}> Enter your Product </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/puzzle.png")}
            />
          </View>
          <Text style={styles.containerText}> Know Relevant Compliance </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/puzzle.png")}
            />
          </View>
          <Text style={styles.containerText}> Take Your Application </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/file.png")}
            />
          </View>
          <Text style={styles.containerText}> Sign your Document </Text>
        </View>
        <Image
          style={styles.arrowImage}
          source={require("../assets/PlatformImages/arrow.png")}
        />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainerPics}
              source={require("../assets/PlatformImages/direct-download.png")}
            />
          </View>
          <Text style={styles.containerText}> Download Your Form </Text>
        </View>
  
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    // flex:1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  container: {
    flexDirection: "row",
    width: 300,
    height: 70,
    // backgroundColor: "pink",
    alignSelf: "center",
    // justifyContent:"center",
    marginTop: 10,
    // justifyContent:"space-between",
  },
  imageContainer: {
    height: 63,
    width: 63,
    borderWidth: 1,
    borderColor: "#FF8025",
    // justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignSelf: "center",
    // justifyContent: "space-between",
    backgroundColor: "white",
    justifyContent: "center",
  },
  containerText: {
    color: "#FF8025",
    justifyContent: "flex-end",
    alignSelf: "center",
    marginLeft: 40,
  },
  imageContainerPics: {
    alignSelf: "center",
  },
  arrowImage: {
    alignSelf: "center",
    height: 29,
    width: 21,
  },
});

export default UsePlatform;
