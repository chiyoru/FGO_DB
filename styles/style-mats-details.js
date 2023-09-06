import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2833',
    justifyContent:"center",
    alignItems:"center",
  },
  titre:{
    color:'white',
    fontSize:25,
    margin:25,
    fontWeight:'bold',
  },
  img:{
      width:128,
      height:128
  },
  infos:{
      justifyContent:"center",
      alignItems:"center",
      margin: 20
  },
  infosText:{
      borderWidth: 1,
      borderColor: "white",
      width: 350,
      alignItems:"center",
      justifyContent:"center"
  },
  text:{
      color: "#A8D5E2",
      fontSize:15,
      padding:  10
  },
  type:{
      color: "#A8D5E2",
      fontSize:15,
      padding:  10,
      textTransform:"uppercase"
  }
});

  
  export default styles;