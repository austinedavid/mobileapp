import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Ionicon from "react-native-vector-icons/AntDesign";

// components below here
export default function AddmoneySub({Icon, subText, header, iname, spacemore}){

    
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: spacemore? 20 : 10
    },
    icon:{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 5,
        borderColor: "gray"
        
    },
    subtext:{
        fontSize: 10,
        color: "gray"
    },
    header:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#3c1575"
    },
    right:{
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
    },
    left:{
        flexDirection: "row",
        alignItems: "center"
    },
    textCons:{
        marginLeft: 20
    }

})


    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View >
                    <View style={styles.icon}>
                    <Icon name={iname} color="tomato"/>
                    </View>
                </View>
                <View style={styles.textCons}>
                    <Text style={styles.header}>{header}</Text>
                    <Text style={styles.subtext}>{subText}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Ionicon name="right" size={18} color="gray"/>
            </View>
        </View>
    )
}
