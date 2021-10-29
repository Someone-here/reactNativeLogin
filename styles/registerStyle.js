import { StyleSheet } from "react-native";

const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  google: {
    marginTop: 25,
    width: "80%",
    height: 60,
    borderWidth: 2,
  },
  input: {
    borderWidth: 2,
    padding: 10,
    height: 50,
    width: "90%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    width: "90%",
    marginTop: 20,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    color: "black",
  },
  error: { color: "red", margin: 8, marginLeft: 15 },
  modalHeader: {
    backgroundColor: "#f5eeef",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBody: {
    padding: 15,
    backgroundColor: "white",
  },
});

export default registerStyle;
