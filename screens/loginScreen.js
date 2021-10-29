import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from "react-native";
import registerStyle from "../styles/registerStyle";
import { auth } from "../firebaseConf";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [borderFp, setBorderFp] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fpEmail, setFpEmail] = useState("");

  const loginHere = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.code);
        setError(err.message);
      });
  };

  const passReset = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(fpEmail)) {
      auth
        .sendPasswordResetEmail(fpEmail)
        .then(() => {
          setError(`Password reset email successfully sent to ${fpEmail}`);
          setBorderFp(false);
        })
        .catch(() =>
          setError("The user doesn't exist, Try registering first.")
        );
    } else {
      setError("Enter a valid email");
      setBorderFp(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={registerStyle.container}>
        {/* Error text */}
        <Text style={registerStyle.error}>{error}</Text>

        {/* FORGOT PASSWORD */}
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={{ flex: 1, backgroundColor: "#5a5a5a6a" }}></View>
          </TouchableWithoutFeedback>
          <View>
            <View style={registerStyle.modalHeader}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                }}
              >
                Forgot Password
              </Text>
            </View>
            <View style={registerStyle.modalBody}>
              <Text style={{ fontSize: 15 }}>
                A link to reset the password will be sent to the email entered
                below:
              </Text>
              <TextInput
                style={
                  borderFp
                    ? [registerStyle.input, { borderColor: "red" }]
                    : registerStyle.input
                }
                placeholder="Email"
                value={fpEmail}
                onChangeText={(val) => setFpEmail(val)}
              />
              <TouchableOpacity
                style={[registerStyle.button, { width: "30%" }]}
                onPress={passReset}
              >
                <Text style={[registerStyle.buttonText, { color: "white" }]}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Email Input */}
        <TextInput
          style={
            error
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Email"
          value={email}
          onChangeText={(val) => setEmail(val)}
        ></TextInput>

        {/* Password Input */}
        <TextInput
          style={
            error
              ? [registerStyle.input, { borderColor: "red" }]
              : registerStyle.input
          }
          placeholder="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}
        ></TextInput>

        {/* Login button */}
        <TouchableOpacity style={registerStyle.button} onPress={loginHere}>
          <Text style={[registerStyle.buttonText, { color: "white" }]}>
            Login
          </Text>
        </TouchableOpacity>

        {/* Forgot Pass btn */}
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            setError(null);
          }}
        >
          <Text style={{ marginTop: 8 }}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Google signUp */}
        <TouchableOpacity style={registerStyle.google}>
          <Text style={registerStyle.buttonText}>Sign In with google</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
