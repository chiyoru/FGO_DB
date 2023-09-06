
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
import DetailsCE from "./DetailsCE";
import styles from "../styles/style-ce"

const Stack = createNativeStackNavigator();

 function CE({navigation}){
  const [CEs, setCEs] = useState([]);
  
    const getCEs = async () => {
       try {
        const response = await fetch('https://api.atlasacademy.io/export/NA/nice_equip.json');
        const json = await response.json();
        setCEs(json);
      } catch (error) {
        console.error(error);
      } 
    }
  
    useEffect(() => {
      getCEs();
    }, []);

    return (
      <ScrollView 
      contentContainerStyle={styles.container} 
      horizontal>
        <View style={styles.view}>
          <FlatList
          data={CEs}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
              <Text style={styles.text}>{item.name}</Text>
              <View style={styles.star}>
                {[...Array(item.rarity)].map((e, i) => (
                  <Text key={i} style={styles.star}>★</Text>
                ))}
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Details", {CE: item})}>
                <Image style={styles.img} source={{ uri: item.extraAssets.charaGraph.equip[item.id]}}/>
              </TouchableOpacity>
            </View>
          )}/>
        </View>
      </ScrollView>
    )
}

export default function AppMats(){
  return(
    <Stack.Navigator initialRouteName="CEs">
      <Stack.Screen name="CEs" component={CE} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsCE} options={{ headerShown: false }}/>
    </Stack.Navigator>
 )
}
