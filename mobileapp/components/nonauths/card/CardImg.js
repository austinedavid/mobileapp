import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import kuda from "../../../utils/images/kuda.jpg"

// creating our functional components
export default function CardImg(){
    return(
        <View>
            
            <Image style={styles.img} source={kuda}/>
        </View>
    )
}

// creating a style for this component
const styles = StyleSheet.create({
    img:{
        width: 130,
        height: 220,
        borderRadius: 5
    },
   
})