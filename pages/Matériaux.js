
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
import DetailsMat from "../pages/DetailsMats";
import styles from "../styles/style-mats"

const Stack = createNativeStackNavigator();

 function Mats({navigation}){
  const [mats, setMats] = useState([]);
  
    const getMats = async () => {
       try {
        const response = await fetch('https://api.atlasacademy.io/export/NA/nice_item.json');
        const json = await response.json();
        setMats(json.filter((filtre) => filtre.id < 94000000));
      } catch (error) {
        console.error(error);
      } 
    }
  
    useEffect(() => {
      getMats();
    }, []);

  
    return (
      <ScrollView 
      contentContainerStyle={styles.container} 
      horizontal>
        <View style={styles.view}>
          <FlatList
          data={mats}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.containerItem}>
              <Text style={styles.text}>{item.name}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Details", {mat: item})}>
                <Image style={styles.img} source={{ uri: item.icon}}/>
              </TouchableOpacity>
            </View>
          )}/>
        </View>
      </ScrollView>
    )
}

export default function AppMats(){
  return(
    <Stack.Navigator initialRouteName="Mats">
      <Stack.Screen name="Mats" component={Mats} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsMat} options={{ headerShown: false }}/>
    </Stack.Navigator>
 )
}
