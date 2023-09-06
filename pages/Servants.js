import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity, Redirect } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from "../styles/style-app";
import Archer from "../classes/archer";
import Saber from "../classes/saber";
import Lancer from "../classes/lancer"
import Rider from "../classes/rider"
import Caster from "../classes/caster"
import Assassin from "../classes/assassin"
import Berserker from "../classes/berserker"
import Ruler from "../classes/ruler"
import Avenger from "../classes/avenger"
import MoonCancer from "../classes/mooncancer"
import AlterEgo from "../classes/alterego"
import Foreigner from "../classes/foreigner"
import Shielder from "../classes/shielder"
import Matériaux from "../pages/Matériaux";


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
          {/* Bouton pour aller sur la sélection des Saber */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Saber')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Saber-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Saber</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Archer */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Archer')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Archer-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Archer</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Lancer */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Lancer')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Lancer-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Lancer</Text>
          </View>
        </View>

        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des Rider */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Rider')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Rider-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Rider</Text>
          </View>
          
          {/* Bouton pour aller sur la sélection des Caster */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Caster')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Caster-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Caster</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Assassin */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Assassin')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Assassin-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Assassin</Text>
          </View>
        </View>

        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des Zerk */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Berserker')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Berserker-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Berserker</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Ruler */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Ruler')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Ruler-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Ruler</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Avenger */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Avenger')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Avenger-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Avenger</Text>
          </View>
        </View>

        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des Moon Cancer */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('MoonCancer')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-MoonCancer-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Moon Cancer</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Alter Ego */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('AlterEgo')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Alterego-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Alter Ego</Text>
          </View>

          {/* Bouton pour aller sur la sélection des Foreigner */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Foreigner')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Foreigner-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Foreigner</Text>
          </View>
        </View>

        <View style={styles.redirection}>
          {/* Bouton pour aller sur la sélection des Shielder (Mash) */}
          <View style={styles.containerRedirection}>
            <TouchableOpacity onPress={() => navigation.navigate('Shielder')}>
              <Image
                style={styles.img}
                source={require("../assets/Class-Shielder-Gold.png")}
              />
            </TouchableOpacity>
            <Text style={styles.textRedirection}>Shielder</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App(){
  return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      <Stack.Screen name="Saber" component={Saber}  options={{headerShown: false}}/>
      <Stack.Screen name="Archer" component={Archer}  options={{headerShown: false}}/>
      <Stack.Screen name="Lancer" component={Lancer}  options={{headerShown: false}}/>
      <Stack.Screen name="Rider" component={Rider}  options={{headerShown: false}}/>
      <Stack.Screen name="Caster" component={Caster}  options={{headerShown: false}}/>
      <Stack.Screen name="Assassin" component={Assassin}  options={{headerShown: false}}/>
      <Stack.Screen name="Berserker" component={Berserker}  options={{headerShown: false}}/>
      <Stack.Screen name="Ruler" component={Ruler}  options={{headerShown: false}}/>
      <Stack.Screen name="Avenger" component={Avenger}  options={{headerShown: false}}/>
      <Stack.Screen name="MoonCancer" component={MoonCancer}  options={{headerShown: false}}/>
      <Stack.Screen name="AlterEgo" component={AlterEgo}  options={{headerShown: false}}/>
      <Stack.Screen name="Foreigner" component={Foreigner}  options={{headerShown: false}}/>
      <Stack.Screen name="Shielder" component={Shielder}  options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

