import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
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
import servant from "../nice_servant.json";
import Details from "../pages/DetailsPerso";
import styles from "../styles/style-servant"

const Stack = createNativeStackNavigator();

function ServArcher({navigation}) {
  const archer = servant.filter((name) => name.className === "archer");

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
        source={require("../assets/Class-Archer-Gold.png")}
      />

      <FlatList
        data={archer}
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
    <Stack.Navigator initialRouteName="Archer">
      <Stack.Screen name="Archer" component={ServArcher} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
    </Stack.Navigator>
 )
}


