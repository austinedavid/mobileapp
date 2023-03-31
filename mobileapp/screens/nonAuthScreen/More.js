import React from "react";
import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native"
import Middlemore from "../../components/nonauths/more/Middlemore";
import Topmore from "../../components/nonauths/more/Topmore";
import AddSub from "../../components/nonauths/home/Addsub"
import Font5 from "react-native-vector-icons/FontAwesome5"

export default function More({navigation}){
    const firstDesc = "Download montly statements"
    const secondDesc = "Manage connected cards"
    const thirdDesc = "Get supports or send feedback"
    const fourthDesc = "Protect yourself from intruders"
    const fifthDesc = "Earn money when your friends join kuda"
    const sixthDesc = "How much you can spend and receive"
    const seventhDesc = "About our contract with you"
    return (
        <ScrollView style={styles.container}>
            <Topmore navigation={navigation}/>
            <View style={styles.subcon}>
                <Middlemore/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Statement & Reports" subText={firstDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Saved Cards" subText={secondDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Get Help" subText={thirdDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Security" subText={fourthDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Referrals" subText={fifthDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Account Limits" subText={sixthDesc}/>
                <AddSub spacemore={true} iname="newspaper" Icon={Font5} header="Legal" subText={seventhDesc}/>
            </View>
            <View style={styles.downView}>
                <Pressable><Text style={styles.redText}>Sign Out</Text></Pressable>
                <Text>2.00155</Text>
            </View>
        </ScrollView>
    )
}

// creating our stylesheet below here
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    subcon:{
        padding: 15
    },
    downView:{
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    redText: {
        fontWeight: "bold",
        color: "red",
        marginBottom: 30
    }
})