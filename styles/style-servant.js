import { StyleSheet} from "react-native";

const stylesServant = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1C2833",
      alignItems: "center",
      justifyContent: "center",
    },
  
    text: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: 15
    },
    img: {
      height: 45,
      width: 45,
      marginBottom: 10,
    },
    ascension: {
      height: 300,
      width: 220,
    },
    capitalize: {
      textTransform: "capitalize",
    },
    scrollView: {
      height: 250,
    },
    viewChar: {
      backgroundColor: "#2A3B4B",
      width: 300,
      height: 500,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#D2D5D8",
      borderRadius: 10,
      borderWidth: 1
    },
    tab: {
      fontSize: 145,
    },
    star:{
        color:"#ffd700"
    }
  });
  
  export default stylesServant;
  