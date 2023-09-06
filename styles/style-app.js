import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    BG: {
      backgroundColor: "#3A405A",
      flex: 1,
    },
    centrer:{
      alignItems: "center",
      justifyContent: "center"
    },
    containerDB: {
      backgroundColor: "#99B2DD",
      shadowColor: "black",
      height: 50,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    DB: {
      fontSize: 40,
      color: "white",
      textAlign: "center",
    },
    redirection:{
        flexDirection: "row"
    },
    containerRedirection:{
        alignItems: "center",
        justifyContent: "flex-end",
    },
    textRedirection:{
        color: "white",
        fontSize: 20
    },
    img:{
        height: 70,
        width: 70,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    }
  });

  export default styles;