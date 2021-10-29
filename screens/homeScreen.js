import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import homeStyle from "../styles/homeStyle";
import { auth } from "../firebaseConf";

function HomeScreen({ navigation }) {
  if (auth.currentUser == null) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Open" }],
    });
  }

  const signOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Open" }],
    });
    auth.signOut();
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={[homeStyle.center, { fontSize: 30 }]}>
        Hello {auth.currentUser.displayName}
      </Text>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Contacts")}
          style={{ marginTop: 25, borderWidth: 2, width: "80%", height: 50 }}
        >
          <Text style={homeStyle.center}>Manage Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={signOut}
          style={{ marginTop: 25, borderWidth: 2, width: "80%", height: 50 }}
        >
          <Text style={homeStyle.center}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
