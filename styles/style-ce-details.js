import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
      width:300,
      height:600,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "white",
      marginBottom: 20
  },
  containerInfos:{
    marginBottom: 10
  },
  infos:{
      borderWidth: 1,
      borderColor: "white",
      width: 350,
      alignItems:"center",
      justifyContent:"center",
  },
  text:{
      color: "#F4D8CD",
      fontSize:15,
      padding:  10
  },
  cost:{
    color: "#F4D8CD",
    fontSize:18,
    padding:  10,
    fontWeight:"bold"
},
  type:{
      color: "#A8D5E2",
      fontSize:15,
      padding:  10,
      textTransform:"uppercase"
  }
});

  
  export default styles;