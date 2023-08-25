import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ApplicationProgress = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/backgroundImage.png")}
      >
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsText}> Select Options</Text>
          <Image
            style={styles.optionImage}
            source={require("../assets/images/Vector.png")}
          />
        </View>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsText}> Search</Text>
          <Image
            style={styles.optionImage}
            source={require("../assets/images/seacrchIcon.png")}
          />
        </View>

        <View style={styles.progressContainer1}>
          <Text style={styles.progressContainer1Text}>Project Code:</Text>
          <Text style={styles.progressContainer1Text2}>Eik/23w/TEC/4373</Text>
          <Image style source={require("../assets/images/plus.png")} />
        </View>

        <View style={styles.mainProgressContainer}>
          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Compliance Type:</Text>
            <Text style={styles.progressContainerText2} >TEC</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Product Name:</Text>
            <Text style={styles.progressContainerText2} >Test equipment</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Model Number:</Text>
            <Text style={styles.progressContainerText2} >989jo</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Associated Number/Family Model:</Text>
            <Text style={styles.progressContainerText2} >olkml</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Start Date:</Text>
            <Text style={styles.progressContainerText2} >30/05/23</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Estimated Completion Date:</Text>
            <Text style={styles.progressContainerText2} >15/7/23</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Status:</Text>
            <Text style={styles.progressContainerText2} >Ongoing</Text>
          </View>

          <View style={styles.progressContainer}>
            <Text style={styles.progressContainerText1} >Actual End Date:</Text>
            <Text style={styles.progressContainerText2} >29-05-23</Text>
          </View>
        </View>

        <View style={styles.progressContainer1}>
          <Text style={styles.progressContainer1Text}>Project Code:</Text>
          <Text style={styles.progressContainer1Text2}>Eik/23w/TEC/4373</Text>
          <Image style source={require("../assets/images/minus.png")} />
        </View>

        <View style={styles.progressContainer1}>
          <Text style={styles.progressContainer1Text}>Project Code:</Text>
          <Text style={styles.progressContainer1Text2}>Eik/23w/TEC/4373</Text>
          <Image style source={require("../assets/images/minus.png")} />
        </View>

        <View style={styles.progressContainer1}>
          <Text style={styles.progressContainer1Text}>Project Code:</Text>
          <Text style={styles.progressContainer1Text2}>Eik/23w/TEC/4373</Text>
          <Image style source={require("../assets/images/minus.png")} />
        </View>

        <TouchableOpacity style={{width:140,height:35,borderRadius:6,backgroundColor:"#fff",alignSelf:"center",marginTop:20,alignItems:"center",justifyContent:"center" }} >
        <Text style={{fontWeight:700,lineHeight:17,fontWeight:'12',color:"#FF8025", alignSelf:"center"}}>Download Table data</Text>

        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  optionsContainer: {
    width: 308,
    height: 70,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  optionsText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
  },
  optionImage: {
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  progressContainer1: {
    width: 308,
    height: 46,
    backgroundColor: "white",
    borderRadius: 7,
    // alignItems:"center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    marginTop:8,
  },
  progressContainer1Text: {
    color: "#FF8025",
    alignSelf: "center",
    // marginLeft:9
  },
  progressContainer1Text2: {
    alignSelf: "center",
    // marginLeft:5,
    color: "#999491",
    fontWeight: "400",
    lineHeight: 21,
    fontSize: 14,
    marginRight: 30,
  },
  mainProgressContainer: {
    width: 308,
    height: 182,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 7,
  },
  progressContainer:{
    flexDirection:"row",
    marginTop:6,
  
  },
  progressContainerText1:{
fontWeight:400,
fontSize:10,
lineHeight:15,
color:"#FF8025",
alignSelf:"center",
marginLeft:15,

  },
  progressContainerText2:{
    fontWeight:400,
    fontSize:10,
    lineHeight:15,
    color:"#FF8025",
    alignSelf:"center",
    color:"#999491",
    marginLeft:10,
  }
});

export default ApplicationProgress;
