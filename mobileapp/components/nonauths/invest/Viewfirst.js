import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import amazon from "../../../utils/images/amazon.png"
import facebook from "../../../utils/images/tfacebook.png"
import apple from "../../../utils/images/apple.webp"
import google from "../../../utils/images/google.png"
import tesla from "../../../utils/images/tesla.jpg"


// creating our functional component 
export default function Viewfirst(){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.big}>US Stocks</Text>
                <Text style={styles.small}>Trade thousands of US stocks with as little as $10</Text>
            </View>
            <View style={styles.right}>
                <Image style={styles.firstimg} source={facebook}/>
                <Image style={styles.secondimg} source={amazon}/>
                <Image style={styles.thirdimg} source={apple}/>
                <Image style={styles.fourthimg} source={google}/>
                <Image style={styles.fifthimg} source={tesla}/>
            </View>
        </View>
    )
}

// creating our stylesheet
const styles = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        height: 80,
        borderColor: "#e2e1e3",
        borderRadius: 5
        
    },
    right:{
        position: "relative",
        flex: 3,
        backgroundColor: "white",
        height: "100%",
        overflow: "hidden"
    },
    big:{
        fontWeight: "bold",
        color:"#3c1575"
    },
    small:{
        fontSize: 12,
        color: "gray",
    },
    left:{
        flex: 9,
        paddingLeft: 15
        
    },
    firstimg:{
        width: 30,
        height: 30,
       
        position: "absolute",
        right: -3,
        bottom:-5.5,
        zIndex: 999
    },
    secondimg:{
        width: 30,
        height: 30,
        borderRadius: 100,
        position: "absolute",
        right:-3,
        bottom:18,
        zIndex: 99
    },
    thirdimg:{
        width: 30,
        height: 30,
        borderRadius: 100,
        position: "absolute",
        right:18,
        bottom:-3,
        zIndex: 80
    },
    fourthimg:{
        width: 30,
        height: 30,
        borderRadius: 100,
        position: "absolute",
        right:18,
        bottom:20,
        zIndex: 60
    },
    fifthimg:{
        width: 30,
        height: 30,
        borderRadius: 100,
        position: "absolute",
        right:-3,
        top:12,
        zIndex: 70
    }
})