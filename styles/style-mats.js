import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C2833',
      justifyContent:"center",
      alignItems:"center",
    },
    containerItem:{
      backgroundColor:"rgba(8, 124, 167, 0.3)",  
      margin: 5,
      width: 150,
      alignItems:"center",
      justifyContent:"center",
      borderColor: "white",
      borderRadius: 20,
      borderLeftWidth: 1,
      borderRightWidth: 1
    },
    view:{
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      color:'white',
      fontSize:15,
      margin:25,
      fontWeight:'bold',
    },
    img:{
      width: 64,
      height: 64,
      marginBottom: 10
    }
  });
  
  export default styles;