import React from "react";
import {View, Text, StyleSheet, ScrollView, Dimensions} from "react-native"
import AddmoneySub from "../home/Addsub";
import IndexMiddle from "./IndexMiddle";
import IndexTop from "./IndexTop";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons"
import LastView from "./LastView";

// our dimension height
const screenHieght = Dimensions.get("screen").height
console.log(`this is height: ${screenHieght}`)
// creating our functions to be returned
export default function Index(){
    const firstDesc = "Reacharge any phone easily";
    const secondDesc = "Send and receive money without account number";
    const thirdDesc = "Shop around the world online";
    const fourthDesc = "Make payments without a card"

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <IndexTop/>
            <Text style={styles.headings}>Send Money</Text>
            <IndexMiddle/>
            <Text style={styles.headings}>Pay Bils</Text>
            <AddmoneySub iname="wallet" Icon={Entypo} header="Buy Airtime" subText={firstDesc}/>
            <AddmoneySub iname="notebook" Icon={MaterialCom} header="Pay A Bill" subText={secondDesc}/>
            <AddmoneySub iname="briefcase" Icon={MaterialCom} header="Gift Cards" subText={thirdDesc}/>
            <AddmoneySub iname="md-globe-sharp" Icon={IonIcon} header="Cardless Payments" subText={fourthDesc}/>
            <LastView/>
            {
                screenHieght <= 700?<View style={styles.hidden}></View>:null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    headings:{
        marginVertical: 20,
        fontWeight: "bold",
        fontSize: 12
    },
    hidden:{
        height: 50
    }
})