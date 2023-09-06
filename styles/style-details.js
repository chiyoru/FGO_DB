import { StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C2833',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row",
    },
    capitalize:{
      textTransform: 'capitalize'
    },
    titre:{
      color:'white',
      fontSize:25,
      margin:25,
      fontWeight:'bold',
      alignSelf:"center"
    },
    text:{
      color:'white',
      fontSize:15,
      margin:25,
      alignSelf:"center"
    },
    skillName:{
        color:'white',
        fontSize:15,
        alignSelf:"center"
    },
    desc:{
        color:'#EDFFEC',
        fontSize:13,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        alignSelf:"center",
        fontStyle: "italic",

    },
    alignment:{
      color:"white",
      alignSelf:"center",
      marginTop: -10,
      fontSize: 15
    },
    img:{
      height:400,
      width: 250,
      marginBottom: 10,
      marginTop: 10,
      alignSelf:"center"
    },
    btnContainer:{
      marginBottom: 10,
      marginTop: 10,
      width: 150,
      alignSelf: "center"
    },
    separation:{
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 15,
      color: "white",
      marginBottom: -10
    },
    skill:{
        alignItems: "center",
    },
    containerSkill:{
        borderColor: "white",
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 350
    },
    containerImgName:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },
    imgSkill:{
        width:50,
        height: 50,
        margin: 10,
    }
  
  });

  export default styles;