import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const submit=()=>{

    // return Alert.alert(userName,password)
     if (userName=== "avikansh" && password==="avi") {
      Alert.alert(`Thankyou ${userName}`);
        props.navigation.navigate("Home")
    }else{
      Alert.alert(`user name and password is not correct `)
    }
  }
  console.log(userName,password)
  return (
    <>
      <View style={styles.signUpContainer}>
        <Image
          style={styles.backGroundImage}
          source={require("../assets/images/EikmopBG.png")}
        />
        <Text style={styles.headingText}>Log In</Text>

        <Image
          style={styles.logoImage}
          source={require("../assets/images/logo1.png")}
        />
        <Text style={styles.welcomeText}>Welcome</Text>

        <View style={styles.infoContainer}>
          <Image source={require("../assets/images/login.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="First Name"
            placeholderTextColor="white"
            autoCapitalize="none"
            value={userName}
            onChangeText={(actualData)=>setUserName(actualData)}
          />
        </View>
        <View
          style={{
            width: 308,
            height: 1,
            backgroundColor: "#55B600",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 20,
          }}
        ></View>

<View style={styles.infoContainer}>
          <Image source={require("../assets/images/padlockLogo.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(actualData)=>setPassword(actualData)}

          />
          <Image
            style={{ marginLeft: 170 }}
            source={require("../assets/images/eye.png")}
          />
        </View>
        <View
          style={{
            width: 308,
            height: 1,
            backgroundColor: "#55B600",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 20,
          }}
        ></View>

        <TouchableOpacity style={styles.buttonContainer}
        onPress={()=>submit()}
        >
          <Text style={styles.buttonContainerText}>Login In</Text>
          
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  signUpContainer: { flex: 1 },
  backGroundImage: {
    // flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#192e64",
  },
  headingText: {
    // color:"black"
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 37,
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
  logoImage: {
    alignItems: "center",
    alignSelf: "center",
  },
  welcomeText: {
    alignSelf: "center",
    color: "#FF8025",
    fontWeight: "500",
    fontSize: 25,
    marginBottom: 20,
  },
  infoContainer: {
    width: 308,
    height: 40,
    // backgroundColor:"red",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-evenly"
  },
  infoContainerText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginLeft: 15,
  },
  buttonContainer: {
    width: 308,
    height: 44,
    backgroundColor: "#55B600",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  buttonContainerText: {
    color: "white",
    fontWeight: "500",
    lineHeight: 24,
    fontSize: 16,
  },
});

export default Login;
