import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TransparentButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "white",
    alignSelf:"center"
  },
  buttonText: {
    alignSelf: "center",
    marginLeft: 35,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "500",
    color: "white",
  },
});

export default TransparentButton;
