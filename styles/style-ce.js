import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C2833',
      justifyContent:"center",
      alignItems:"center",
    },
    containerItem:{
      backgroundColor:"#853B40",  
      margin: 5,
      width: 175,
      alignItems:"center",
      justifyContent:"center",
      borderRightColor: "white",
      borderWidth: 3
    },
    view:{
      justifyContent:"center",
      alignItems:"center"
    },
    star:{
      flexDirection:"row",
      marginBottom: 10,
      color: "#FFD700"
    },
    text:{
      color:'white',
      fontSize:15,
      margin:20,
      fontWeight:'bold',
    },
    img:{
      width: 150,
      height: 300,
      marginBottom: 10,
      borderRadius: 20
    }
  });
  
  export default styles;