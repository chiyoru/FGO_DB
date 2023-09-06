import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../pages/DetailsPerso";
import styles from "../styles/style-servant"

const Stack = createNativeStackNavigator();

 function Berserker({navigation}){
const [servant, setServant] = useState([]);

  const getServant = async () => {
     try {
      const response = await fetch('https://api.atlasacademy.io/export/NA/nice_servant.json');
      const json = await response.json();
      setServant(json.filter((name) => name.className === "berserker"));
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    getServant();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        hidden={true}
        backgroundColor="red"
        animated={true}
        StatusBarStyle="light-content"
      />

      <Image
        style={styles.img}
        source={require("../assets/Class-Berserker-Gold.png")}
      />

      <FlatList
        data={servant}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.viewChar}>
            <Text style={styles.text}>
              {item.name}{"\n"}
              {[...Array(item.rarity)].map((e, i) => (
                <Text key={i} style={styles.star}>★</Text>
              ))}
              {"\n"}
              <Text style={styles.capitalize}></Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Details", {servant: item, costume1: item.extraAssets.charaGraph})}>
              <Image
                style={styles.ascension}
                source={{ uri: item.extraAssets.charaGraph.ascension[1] }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
              }
export default function App(){
  return(
    <Stack.Navigator initialRouteName="Berserker">
      <Stack.Screen name="Berserker" component={Berserker} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}  options={{headerShown: false}} />
    </Stack.Navigator>
 )
}


