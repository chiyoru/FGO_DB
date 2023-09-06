
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsMC from "./DetailsMC";

const Stack = createNativeStackNavigator();

function MC({navigation}){
  const [mc, setMc] = useState([]);
  
    const getMc = async () => {
       try {
        const response = await fetch("https://api.atlasacademy.io/export/NA/nice_mystic_code.json");
        const json = await response.json();
        setMc(json);
      } catch (error) {
        console.error(error);
      } 
    }
  
    useEffect(() => {
      getMc();
    }, []);

  
    return (
        <View style={styles.container}>
          <FlatList
          data={mc}
          renderItem={({ item }) => (
            <View style={styles.mc}>
              <Text style={styles.text}>{item.name}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Details", {mysticCode: item})} style={styles.containerImg}>
                <Image style={styles.img} source={{uri: item.extraAssets.item.female }}/>
                <Image style={styles.img} source={{uri: item.extraAssets.item.male }}/>
              </TouchableOpacity>
            </View>
          )}/>
        </View>
    )
}

export default function AppMC(){
  return(
    <Stack.Navigator initialRouteName="MC">
      <Stack.Screen name="MC" component={MC} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsMC} options={{ headerShown: false }}/>
    </Stack.Navigator>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2833',
    justifyContent:"center",
    alignItems:"center",
  },
  mc:{
    alignItems:"center",
    justifyContent: "center",
    height: 300,
  },
  containerImg:{
    flexDirection:"row",
    borderWidth: 1,
    borderColor: "white",
    padding: 10
  },
  text:{
    color:'white',
    fontSize:17,
    margin:10,
    fontWeight:'bold',
  },
  img:{
    width: 128,
    height: 128,
    marginBottom: 10
  }
});
