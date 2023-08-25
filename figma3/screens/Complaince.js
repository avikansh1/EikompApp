import {
  View,
  Text,
  ImageBackground,
  ImageBackgroundBase,
  StyleSheet,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Complaince = () => {
    // const [modalVisible, setModalVisible] = useState(false);
 

  return (

    
    <View style={styles.container}>
      <ImageBackground
        style={styles.worldMapImage}
        source={require("../assets/images/worldMap.png")}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 17,
            textAlign: "auto",
            marginTop: 46,
          }}
        >
          Your Compliance Dashboard
        </Text>
        <Image
          style={styles.tinymanImage}
          source={require("../assets/images/Tiny-man-sitting-on-chair.png")}
        />

        <Text style={{color:"white", fontWeight:"500",fontSize:14, lineHeight:23, alignSelf:"center"}} >
          Please Enter The Following Details To Start{`\n`}                   A New Application:
        </Text>

        <Text style={{color:"red", fontWeight:"400",fontSize:12, lineHeight:18, alignSelf:"center",justifyContent:"center", textAlign:"center"}} >
        You Need To Feel At Least One Data Point To See The List Of{`\n`} 
        Compliance
        </Text>

        <TextInput placeholder="Enter Industry" placeholderTextColor={"white"} 
        style={ {alignSelf:"flex-start" , marginLeft:42,fontWeight:"700",lineHeight:20}} />

        <View style={styles.straightLine}></View>

        <TextInput placeholder="Name Of Product" placeholderTextColor={"white"} 
        style={{alignSelf:"flex-start",alignItems:"center",marginLeft:42,fontWeight:"700",lineHeight:20}} />

        <View style={styles.straightLine}></View>

        <TextInput placeholder="Region" placeholderTextColor={"white"} 
        style={{alignSelf:"flex-start",alignItems:"center",marginLeft:42, fontWeight:"700",lineHeight:20 }} />

        <View style={styles.straightLine}></View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonContainerText}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  worldMapImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
  },
  tinymanImage: {
    marginTop: 9,
  },
  straightLine: {
    width: 308,
    height: 1,
    backgroundColor: "#FF8025",
    marginTop: 8,
    alignSelf: "center",
    marginBottom:40,
  },
  buttonContainer: {
    width: 108,
    height: 34,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 20,
    justifyContent: "center",
    borderRadius:6,
  },
  buttonContainerText: {
    color: "#FF8025",
    fontWeight: "500",
    lineHeight: 24,
    fontSize: 16,
  },
});

export default Complaince;
