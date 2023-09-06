import React, { useState } from "react";
import {  Image, Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import styles from "../styles/style-mats-details"

export default function DetailsMC({route}){
    const {mysticCode} = route.params;

    const [showMale, setShowMale] = useState(false);
    const lv = 10;
    return(
        <View style={styles.container}>
            <Text style={styles.titre}>
                {mysticCode.name}
            </Text>
            <Button
                title="Switch"
                onPress={() => {setShowMale(!showMale)}}
            />
            <View style={styles.containerMC}>
                  {showMale ? (<Image style={styles.figure} source={{uri: mysticCode.extraAssets.masterFigure.male}} />): 
                  ( <Image style={styles.figure} source={{uri: mysticCode.extraAssets.masterFigure.female}} />)}  
            </View>

            
            <FlatList
            data={mysticCode.skills}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                
                <View style={styles.mcSkills}>
                    <View style={styles.imgSkill}>
                        <Image style={styles.iconSkill} source={{uri: item.icon}}/>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <Text style={styles.desc}>{item.detail}</Text>
                    <ScrollView style={styles.tableau}>
                        <View style={styles.row}> 
                            {[...Array(lv)].map((e, i) =>
                                <Text key={i+1} style={styles.lv}> Lv.{i+1} </Text>)}
                        </View>
                         <View style={styles.row}> 
                         {item.coolDown.map((cd, i) => cd < 10 ? <Text key={i} style={styles.cd}>0{cd}</Text>: <Text key={i} style={styles.cd}> {cd}</Text>)}
                        </View>
                   
                        <View style={styles.row}>
                            {item.functions.map((vals) => 
                            vals.svals.map((vals2, i) => 
                            vals2.hasOwnProperty('Value') ? (vals2.Value < 1000 && vals2.Value >=100 ? <Text key={i} style={styles.val100}>{vals2.Value} </Text>: vals2.Value >= 1000 ? <Text key={i} style={styles.val1000}>{vals2.Value} </Text>: <Text key={i} style={styles.val}>{vals2.Value} </Text>): null))}
                        </View>
                    </ScrollView>
                </View> 
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C2833',
      justifyContent:"center",
      alignItems:"center",
    },
    containerMC:{
        flexDirection:"row",
        justifyContent:"center",
        position: 'relative',
                left: 75,
    },
    mcSkills:{
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "white",
        padding: 5
    },
    imgSkill:{
        flexDirection:"row",
        alignSelf:"center"
    },
    row:{
        flexDirection:"row"
    },
    titre:{
        color:'white',
        fontSize:20,
        margin:25,
        fontWeight:'bold',
      },
      text:{
        color:'white',
        fontSize:17,
      },
      lv:{
        color:'white',
        fontSize:14,
        marginRight: 7,
        fontWeight:"bold",
        alignSelf:"center"
      },
      val:{
        color:'white',
        fontSize:18,
        marginRight: "9%",
        alignSelf:"center"
      },
      val100:{
        color:'white',
        fontSize:13,
        marginRight: "3%",
        alignSelf:"center"
      },
      val1000:{
        color:'white',
        fontSize:11,
        marginRight: "2.5%",
        alignSelf:"center"
      },
      cd:{
        color:'white',
        fontSize:14,
        marginRight: "5.5%",
        alignSelf:"center"
      },
      desc:{
        color:'white',
        fontSize:15,
        alignSelf:"center",
        fontStyle:"italic"
      },
      figure:{
          width: 375,
          height: 400,
          marginLeft: 20,
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 25
          
      },
      iconSkill:{
          width: 32,
          height: 32,
          marginRight: 10
      }
})