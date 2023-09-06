
import {  Image, Text, View, ScrollView} from 'react-native';
import styles from "../styles/style-ce-details"
import React, { useState, useEffect } from "react"

export default function DetailsCE({route}){
    const {CE} = route.params;

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titre}>
                {CE.name}
            </Text>
            <Image style={styles.img} source={{uri : CE.extraAssets.charaGraph.equip[CE.id]}}/>

            <View style={styles.containerInfos}>
                <View style={styles.infos}>
                    <Text style={styles.cost}>Cost: {CE.cost}, Lv. max {CE.lvMax}</Text>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.text}>{CE.skills[0].detail}{'\n'}
                    {CE.skills[1] ?  <Text style={styles.text}>{CE.skills[1].detail} (MLB)</Text>:null} 
                    </Text>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.text}>Max. HP: {CE.hpMax} {'\n'} Max. atk: {CE.atkMax}</Text>
                </View>
            </View>
        </ScrollView>  
    )
}

