import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

const Analytics = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/backgroundImage.png")}
      >
        <View style={styles.headingContainer}>
          <View style={styles.innerHeadingContainer1}>
            <Text style={styles.innerHeadingContainerText2}>
              Filter By Days
            </Text>
            <Image source={require("../assets/images/Vector.png")} />
          </View>
          <View style={styles.innerHeadingContainer2}>
            <Text style={styles.innerHeadingContainerText1}>
              Search By Product Name
            </Text>
          </View>
        </View>

        <Text style={styles.mainText}>Total Application TEC and BIS</Text>

        <View style={styles.graphMainContainer}>
          <Text style={styles.graphValue}>3.5</Text>
          <Text style={styles.graphValue}>3.0</Text>
          <Text style={styles.graphValue}>2.5</Text>
          <Text style={styles.graphValue}>2.0</Text>
          <Text style={styles.graphValue}>1.5</Text>
          <Text style={styles.graphValue}>1.0</Text>
          <Text style={styles.graphValue}>0.5</Text>
          <Text style={styles.graphValue}>0</Text>
          <View style={styles.graphContainer}>
            <View style={styles.graph1}></View>
            <View style={styles.graph2}></View>
            <View style={styles.graph3}></View>
          </View>
          <View style={styles.graphBottomContainer}>
            <Text style={styles.graphBottomContainerText1}>
              Total Application
            </Text>
            <Text style={styles.graphBottomContainerText2}>
              Total Application TEC
            </Text>
            <Text style={styles.graphBottomContainerText3}>
              Total Application BIS
            </Text>
          </View>
          <Text style={styles.mainText}>Total Application TEC and BIS</Text>
        </View>
        <View style={styles.circleGraphContainer} >
        <View style={styles.circleGraph} ></View>

        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexDirection: "row-reverse",
    height: 40,
    width: 300,
    alignSelf: "flex-end",
    marginLeft: 20,
    marginTop: 5,
  },
  innerHeadingContainer2: {
    width: 100,
    height: 18,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: "#BCBCBC",
    marginLeft: 20,
    flexDirection: "row",
  },

  innerHeadingContainer1: {
    width: 73,
    height: 18,
    borderRadius: 3,
    borderWidth: 1,
    // borderHeigth:1,
    backgroundColor: "#BCBCBC",
    marginLeft: 20,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerHeadingContainerText1: {
    fontWeight: 500,
    fontSize: 8,
    lineHeight: 11,
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "space-around",
    marginLeft: 5,
  },
  innerHeadingContainerText2: {
    fontWeight: 500,
    fontSize: 8,
    lineHeight: 11,
    marginLeft: 5,
  },
  mainText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 22,
    color: "#FF8025",
    alignSelf: "center",
  },
  graphMainContainer: {
    height: 265,
    width: 380,
    // backgroundColor: "pink",
    flexWrap: "wrap",
    marginTop: 15,
    // marginRight:100
  },
  graphContainer: {
    height: 218,
    width: 307,
    borderWidth: 1,
    alignSelf: "center",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "#FFFF",
    borderBottomColor: "#ffff",
    // marginBottom:200,
    flexDirection: "row",
    justifyContent: "space-around",
    // marginRight:100,
  },
  graph1: {
    height: 218,
    width: 59,
    backgroundColor: "#FF8025",
  },
  graph2: {
    height: 132,
    width: 59,
    backgroundColor: "#2EB432",
    alignSelf: "flex-end",
  },
  graph3: {
    height: 78,
    width: 59,
    backgroundColor: "#64B5F6",
    alignSelf: "flex-end",
  },
  graphValue: {
    height: 20,
    width: 20,
    // backgroundColor: "red",
    alignSelf: "flex-start",
    marginStart: 25,
    // flexDirection: "column",
    justifyContent: "space-evenly",
    marginBottom: 8.5,
    color: "#FFFF",
    marginRight: 10,
  },
  graphBottomContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: 307,
    height: 15,
    alignSelf: "center",
    marginBottom: 8,
  },
  graphBottomContainerText3: {
    fontWeight: "500",
    fontSize: 6,
    lineHeight: 9,
    color: "#FF8025",
  },
  graphBottomContainerText2: {
    fontWeight: "500",
    fontSize: 6,
    lineHeight: 9,
    color: "#2EB432",
    marginRight: 13,
  },
  graphBottomContainerText1: {
    fontWeight: "500",
    fontSize: 6,
    lineHeight: 9,
    color: "#64B5F6",
  },
  circleGraphContainer:{
    width:252,
    height:192,
    alignSelf:"center",
    backgroundColor:"pink"

  },
  circleGraph:{
    width:164,
    height:161,
    backgroundColor:""
  },
});

export default Analytics;
