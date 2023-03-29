import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native"
import ProfileDown from "./ProfileDown";
import ProfileTop from "./ProfileTop";

export default function Profiles(){
    return(
        <ScrollView style={styels.container} showsVerticalScrollIndicator={false}>
            <ProfileTop/>
            <ProfileDown/>
        </ScrollView>
    )
}

// styles below
const styels = StyleSheet.create({
    container:{
        flex: 1,
       padding: 20,
       backgroundColor: "white"
    }
})