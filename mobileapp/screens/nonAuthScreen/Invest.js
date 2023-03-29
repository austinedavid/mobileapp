import React, {useState} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native"
import FirstInvest from "../../components/nonauths/invest/FirstInvest";
import SecondInvest from "../../components/nonauths/invest/SecondInvest";

// exporting our functional components
export default function Invest(){
    const[touched, settouched] = useState(false)

    // creating our styles for this components
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        
        paddingVertical: 25
    },
    topView:{
        paddingHorizontal: 20,
        marginBottom: 30,
        flexDirection: "row",

    },
    home:{
        paddingHorizontal: 17,
        paddingVertical:3,
        borderWidth: 0.5,
        borderColor: "#dedce0",
        borderRadius: 5,
        marginRight: 10,
        
    },
    homeText: {
        color: touched? "black": "#3c1575",
        fontWeight: "bold"
    },
    stocks:{
        paddingHorizontal: 17,
        paddingVertical:3,
        borderWidth: 0.5,
        borderColor: "#dedce0",
        borderRadius: 5,
        marginRight: 10,
        
    },
    stockText:{
        color: touched? "#3c1575": "black",
        fontWeight: "bold"
    }

})

// creating a function to toggle our button
const toggleBtn = (value)=>{
    settouched(value)
}
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Pressable onPress={()=>toggleBtn(false)} style={styles.home}><Text style={styles.homeText}>Home</Text></Pressable>
                <Pressable onPress={()=>toggleBtn(true)} style={styles.stocks}><Text style={styles.stockText}>US Stocks</Text></Pressable>
            </View>
            {
                touched? <SecondInvest/> : <FirstInvest/>
            }
        </View>
    )
}

