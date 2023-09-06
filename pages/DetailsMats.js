
import {  Image, Text, View} from 'react-native';
import styles from "../styles/style-mats-details"

export default function DetailsMat({route}){
    const {mat} = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.titre}>
                {mat.name}
            </Text>
            <Image style={styles.img} source={{uri: mat.icon}}/>
            <View style={styles.infos}>
                <View style={styles.infosText}><Text style={styles.text}>Type: <Text style={styles.type}>{mat.type}</Text></Text></View>
                <View style={styles.infosText}><Text style={styles.text}>{mat.detail.split('"').join(" - ")}</Text></View>
            </View>
        </View>
    )
}

