import React from "react";
import {View, Text, Image, StyleSheet} from "react-native"
import Ionicon from "react-native-vector-icons/AntDesign";
import kuda from "../../../utils/images/kuda.png"

// our functional components
export default function Middlemore(){
    return(
        <View style={styles.container}>
            <View style={styles.leftView}>
                <Image source={kuda} style={styles.img}/>
                <Text style={styles.headers}>Get Kuda Business</Text>
            </View>
            <View>
                 <Ionicon name="right" size={18} color="gray"/>
            </View>
        </View>
    )
}

// creating our styles
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    leftView:{
        flexDirection: "row",
        alignItems: "center"
    },
    img:{
        width: 23,
        height: 27,
        borderRadius: 5
    },
    headers:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#3c1575",
        marginLeft: 20
    }
})