import { StyleSheet } from "react-native";

const openScreenStyle = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  login: {
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 50,
    width: 150,
    borderRadius: 10,
  },
  register: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 50,
    width: 150,
    borderRadius: 10,
  },
  registerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default openScreenStyle;
