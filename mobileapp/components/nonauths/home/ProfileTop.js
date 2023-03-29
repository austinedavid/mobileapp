import React from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native"
import passPort from "../../../utils/images/passport.jpg"
import medal from "../../../utils/images/medal.png"
import Ionicon from "react-native-vector-icons/Ionicons"
export default function ProfileTop(){
    // we handle the function to copy the Ac number
    const copyAcNumber = ()=>{
       
    }
    return(
        <View>
            
            <View style={styels.passCon}>
                <Image source={passPort} style={styels.img}/>
                <Text style={styels.name}>Mesoma David Augustine</Text>
                <View style={styels.medalCon}><Image source={medal} style={styels.medal}/><Text>T3</Text></View>
            </View>
            <View style={styels.acCon}>
                <View>
                    <Text style={{fontSize: 12, color: "#363535"}}>Your Account Number</Text>
                    <Text style={{fontWeight: "bold"}}>2006578256</Text>
                </View>
                <Pressable style={styels.copyCon} onPress={copyAcNumber}>
                    <Text style={{fontSize: 12, fontWeight: "bold", color: "green", marginRight: 5}}>COPY</Text>
                    <Ionicon name="copy" size={15} color="green"/>
                </Pressable>
            </View>
        </View>
    )
}

// styling below
const styels = StyleSheet.create({
    passCon:{
        alignItems: "center"
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 7,
    },
    name:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10
    },
    medalCon:{
        flexDirection: "row"
    },
    medal:{
        width: 16,
        height: 16
    },
    acCon:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        marginTop: 7
    },
    copyCon:{
        flexDirection: "row",
        alignItems: "center"
    }
})