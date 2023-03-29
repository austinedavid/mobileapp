import React from "react";
import {View, Text, StyleSheet} from "react-native"
import CardImg from "../../components/nonauths/card/CardImg";
import AddmoneySub from "../../components/nonauths/home/Addsub";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons"

export default function Cards(){
    const firstDesc = "Temporarily disable this card";
    const secondDesc = "Card PIN and Limits"
    return (
        <View style={styles.container}>
            <View style={styles.dot}></View>
            <CardImg/>
            <View style={styles.subdiv}>
                <Text style={styles.subdivText}>Show Details</Text>
            </View>
            <View style={styles.downView}>
                <AddmoneySub iname="block" Icon={Entypo} header="Block Card" subText={firstDesc}/>
                <AddmoneySub iname="ship-wheel" Icon={MaterialCom} header="Manage Card" subText={secondDesc}/>
            </View>
        </View>
    )
}

// creating our styles below
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "#69bdd6",
        marginVertical: 10
    },
    subdiv:{
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: "#69bdd6",
        marginVertical: 20,
        borderRadius: 5
    },
    subdivText:{
        fontWeight: 'bold',
        color: "white"
    },
    downView: {
        width: "100%",
        paddingHorizontal: 20
    }
})