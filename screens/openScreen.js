import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import openScreenStyle from "../styles/openScreenStyle";
import { auth } from "../firebaseConf";

function openScreen({ navigation }) {
  if (auth.currentUser != null) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  }

  return (
    <View style={openScreenStyle.background}>
      <Image
        borderWidth={2}
        source={require("../assets/images/download.png")}
        style={{
          height: "87%",
          marginBottom: 25,
        }}
      />
      <View style={openScreenStyle.buttonView}>
        <TouchableOpacity
          style={openScreenStyle.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={openScreenStyle.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={openScreenStyle.register}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={openScreenStyle.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default openScreen;
