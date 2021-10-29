import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import registerStyle from "../styles/registerStyle";
import { auth } from "../firebaseConf";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [name, setName] = useState("");
  const [border, setBorder] = useState(false);
  const [error, setError] = useState(null);

  const signup = () => {
    if (confPass === password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          auth.currentUser.updateProfile({ displayName: name }).then(() => {
            console.log(this.displayName);
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          });
        })
        .catch(function (err) {
          setBorder(true);
          setError(err.message);
          console.log(err.message);
          console.log(err.code);
        });
    } else {
      console.log("Passwords don't match");
      setError("Passwords don't match");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={registerStyle.container}>
        {/* Error Text */}
        <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>

        {/* Name Input */}
        <TextInput
          style={
            border
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Name"
          value={name}
          onChangeText={(val) => setName(val)}
        ></TextInput>

        {/* Email input */}
        <TextInput
          style={
            border
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
        ></TextInput>

        {/* Password input */}
        <TextInput
          style={
            border
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
        ></TextInput>

        {/* Confirm Password */}
        <TextInput
          style={
            border
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Confirm Password"
          value={confPass}
          onChangeText={(val) => setConfPass(val)}
        ></TextInput>

        {/* Signup button */}
        <TouchableOpacity style={registerStyle.button} onPress={signup}>
          <Text style={[registerStyle.buttonText, { color: "white" }]}>
            Register
          </Text>
        </TouchableOpacity>

        {/* Signup with google */}
        <TouchableOpacity style={registerStyle.google}>
          <Text style={registerStyle.buttonText}>Sign In with google</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegisterScreen;
