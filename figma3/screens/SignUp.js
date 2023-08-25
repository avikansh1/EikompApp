import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <>
      <View style={styles.signUpContainer}>
        <Image
          style={styles.backGroundImage}
          source={require("../assets/images/EikmopBG.png")}
        />
        <Text style={styles.headingText}>Sign Up</Text>

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
          <Image source={require("../assets/images/login.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="Last Name"
            placeholderTextColor="white"
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
          <Image source={require("../assets/images/businessLogo.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="Company Name"
            placeholderTextColor="white"
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
          <Image source={require("../assets/images/emailLogo.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="Email"
            placeholderTextColor="white"
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
          <Image source={require("../assets/images/phoneLogo.png")} />
          <TextInput
            style={styles.infoContainerText}
            placeholder="Mobile Number"
            placeholderTextColor="white"
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

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonContainerText}>Sign Up</Text>
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

export default SignUp;
