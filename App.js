import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity, Redirect } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from "./styles/style-app";
import Servant from "./pages/Servants";
import Matériaux from "./pages/Matériaux";
import MC from "./pages/Mystic_code";
import CE from "./pages/Craft_essence"


const Stack = createNativeStackNavigator();

 function Home({navigation}) {
    
  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.containerDB}>
        <StatusBar hidden />
        <Text style={styles.DB}>FGO DATABASE</Text>
      </View>

      <View style={styles.centrer}>
        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des persos */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Servant')}>
              <Image
                style={styles.img}
                source={require("./assets/Class-All-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Servants</Text>
          </View>

          {/* Bouton pour aller sur la sélection des matériaux */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Matériaux')}>
              <Image
                style={styles.img}
                source={require("./assets/Chest-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Materials</Text>
          </View>

          {/* Bouton pour aller sur la sélection des mystic code */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Mystic_Code')}>
              <Image
                style={styles.img}
                source={require("./assets/Mysticcodeandcommandseal.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Mystic Code</Text>
          </View>
        </View>

        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des craft essence */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Craft_Essence')}>
              <Image
                style={styles.img}
                source={require("./assets/Spellbook.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Craft Essence</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      <Stack.Screen name="Servant" component={Servant}  options={{headerShown: false}}/>
      <Stack.Screen name="Matériaux" component={Matériaux}  options={{headerShown: false}}/>
      <Stack.Screen name="Mystic_Code" component={MC}  options={{headerShown: false}}/>
      <Stack.Screen name="Craft_Essence" component={CE}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}