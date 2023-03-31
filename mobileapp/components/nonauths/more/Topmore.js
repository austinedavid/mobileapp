import React from "react";
import {View, Text, Image, Pressable, StyleSheet} from "react-native"
import passport from "../../../utils/images/passport.jpg";
import Ionicon from "react-native-vector-icons/AntDesign";
// here we return our functional components
export default function Topmore({navigation}){
    const runDetailsNavigation = ()=>{
        navigation.navigate("profile")
    }
    return(
        <Pressable onPress={runDetailsNavigation} style={styles.container}>
            <View style={styles.leftView}>
                <View >
                    <Image style={styles.img} source={passport}/>
                </View>
                <View>
                    <Text style={styles.headers}>Mesoma Augustine</Text>
                    <Text style={styles.subtext}>Account Details</Text>
                </View>
            </View>
            <View>
                <Ionicon name="right" size={18} color="gray"/>
            </View>
        </Pressable>
    )
}

// creating our styles below here 
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 15,
        marginBottom: 10
    },
    img:{
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 20
    },
    leftView: {
        flexDirection: "row",
        alignItems: "center"
    },
    headers:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#3c1575"
    },
    subtext:{
        fontSize: 10,
        color: "gray"
    }
})