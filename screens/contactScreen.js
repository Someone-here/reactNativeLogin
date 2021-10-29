import React, { useState, useEffect, Suspense } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { auth, db } from "../firebaseConf";

export default function contactScreen() {
  const [contacts, setContacts] = useState(["YOo"]);

  useEffect(() => {
    const user = db.collection("users").doc(auth.currentUser.uid).get();
    user.then((snap) => {
      setContacts(snap.get("Contacts"));
    });
  }, []);
  return (
    <View>
      <ActivityIndicator size={50} color="#5abaff" />
      <Text>{contacts}</Text>
    </View>
  );
}
