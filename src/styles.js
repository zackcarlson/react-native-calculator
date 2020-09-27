import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  containerHistory: {
    flex: 0.35,
    borderBottomWidth: 1,
    borderColor: "#000"
  },
  containerOutput: {
    flex: 0.25
  },
  containerButtons: {
    flex: 0.4,
    backgroundColor: "#bdc3c7"
  },
  placeholderOutput: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
    paddingLeft: 15
  },
  textDefault: {
    color: "#000",
    fontFamily: "Helvetica-Light",
    fontSize: 30
  }
});
