
import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ScrollView, Button, FlatList } from 'react-native';
import styles from "../styles/style-details";

export default function App({route}) {
  const {servant, costume1} = route.params;
  const [showAscension1, setShowAscension1] = useState(true);
  const [showAscension2, setShowAscension2] = useState(false);
  const [showAscension3, setShowAscension3] = useState(false);
  const [showAscension4, setShowAscension4] = useState(false);
  const [showCostume, setShowCostume] = useState(false);
  const costume = costume1.hasOwnProperty('costume'); //On vérifie que le perso a un costume, pour ne pas les afficher à tout le monde
  const skill1 = (servant.skills.filter((s1) => s1.num === 1)); //Pour le premier skill
  const skill2 = (servant.skills.filter((s2) => s2.num === 2)); //Pour le second skill
  const skill3 = (servant.skills.filter((s3) => s3.num === 3)); //Pour le troisième skill
  const alignement = (servant.traits.filter((align) => align.name.includes("alignment"))); //Pour ressortir les alignements uniquement 

  //Pour le calcul des QP max!
  let qpSkill = 0;
  for(let i = 1; i<=9; i++){
     qpSkill +=  servant.skillMaterials[i].qp * 3;
  }
  let qpAscension = 0;
  for(let i = 0; i<=3; i++){
    qpAscension += servant.ascensionMaterials[i].qp;
  }
  const qp = qpSkill + qpAscension;
  
  for(let i = 1; i<=9; i++){
    let test = servant.skillMaterials[i].items[0].amount;
    console.log(test)
  }
  
  
  return (

    <View style={styles.container}>
      <ScrollView>
          <Text style={styles.titre}>{servant.name} - <Text style={styles.capitalize}>{servant.className}</Text></Text>
          <Text style={styles.alignment}> Alignments: {alignement.map((n) => <Text>{(n.name).replace("alignment", "")} </Text>)}</Text>
              <View style={styles.btnContainer}>
                  <Button
                    color={couleurBtn}
                    title="Ascension 1"
                    onPress={() => {setShowAscension1(!showAscension1); setShowAscension2(null); setShowAscension3(null); setShowAscension4(null); setShowCostume(null)}}
                  />
                {showAscension1 ? (
                <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.ascension[1] }}/>) : null}
              </View>

              <View style={styles.btnContainer}>
                <Button
                  color={couleurBtn}
                  title="Ascension 2"
                  onPress={() => {setShowAscension2(!showAscension2); setShowAscension1(null); setShowAscension3(null); setShowAscension4(null); setShowCostume(null)}}
                />
                {showAscension2 ? (
                <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.ascension[2] }}/>) : null}
              </View>

              <View style={styles.btnContainer}>
                <Button
                  color={couleurBtn}
                  title="Ascension 3"
                  onPress={() => {setShowAscension3(!showAscension3);  setShowAscension1(null);  setShowAscension2(null);  setShowAscension4(null); setShowCostume(null)}}
                />
                {showAscension3 ? (
                <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.ascension[3] }}/>) : null}
              </View>

              <View style={styles.btnContainer}>
                <Button
                  color={couleurBtn}
                  title="Ascension 4"
                  onPress={() => {setShowAscension4(!showAscension4);  setShowAscension1(null);  setShowAscension2(null);  setShowAscension3(null); setShowCostume(null)}}
                />
                {showAscension4 ? (
                <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.ascension[4] }}/>) : null}
              </View>
              {/* <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.costume[servant.id + 30] }}/> */}
              {/* <Text style={styles.text}>{servant.id + 30}</Text> */}

              {costume ? (
              <View style={styles.btnContainer}>
                <Button
                  color={couleurBtn}
                  title="Costume"
                  onPress={() => {setShowCostume(!showCostume);  setShowAscension1(null);  setShowAscension2(null);  setShowAscension3(null); setShowAscension4(null); }}
                />
                {showCostume ? (
                <Image style={styles.img} source={{ uri: servant.extraAssets.charaGraph.costume[servant.id + 30] }}/>) : null}
              </View>) : null}
              <Text style={styles.separation}>__________________________________________________</Text>
              <Text style={styles.titre}>[Skills]</Text>
              <View style={styles.skill}>
                <FlatList
                data={skill1}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.containerSkill}>
                    <View style={styles.containerImgName}>
                      <Image style={styles.imgSkill} source={{uri: item.icon}}/>
                      <Text style={styles.skillName}>{item.name}</Text>
                    </View>
                    <Text style={styles.desc}>{item.detail}</Text>
                  </View>
                  
                )}
                />

                <FlatList
                data={skill2}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.containerSkill}>
                    <View style={styles.containerImgName}>
                      <Image style={styles.imgSkill} source={{uri: item.icon}}/>
                      <Text style={styles.skillName}>{item.name}</Text>
                    </View>
                    <Text style={styles.desc}>{item.detail}</Text>
                  </View>
                  
                )}
                />

                <FlatList
                data={skill3}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.containerSkill}>
                    <View style={styles.containerImgName}>
                      <Image style={styles.imgSkill} source={{uri: item.icon}}/>
                      <Text style={styles.skillName}>{item.name}</Text>
                    </View>
                    <Text style={styles.desc}>{item.detail}</Text>
                  </View>
                  
                )}
                />
              </View>

              <Text style={styles.separation}>__________________________________________________</Text>
              <Text style={styles.titre}>[Materials]</Text>
              <View>
              {/* <FlatList
                data={servant.ascensionMaterials[0].items}
                horizontal
                renderItem={({ item }) => (
                  <View style={styles.containerSkill}>
                    <View style={styles.containerImgName}>
                      <Text style={styles.skillName}>{item.item.name}</Text>
                    </View>
                  </View>
                  
                )}
                /> */}

                <Text style={styles.text}>QP Amount needed : {qp}</Text>
              </View>

      </ScrollView>
   </View> 
    
  );
}



const couleurBtn = "#3B3B58";
