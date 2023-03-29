import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import tesla from "../../../utils/images/tesla.jpg";
import facebook from "../../../utils/images/facebook.png"
import amazon from "../../../utils/images/amazon.png";
import Font5 from "react-native-vector-icons/FontAwesome5"
// creating our functional components
export default function SecondTop(){
    return(
        <View style={styles.container}>
            <View style={styles.smallCon}>
                <Image source={tesla} style={styles.img}/>
                <View style={styles.lineViewT}></View>
                <View style={styles.lineViewT2}></View>
            </View>
            <View style={styles.smallCon}>
                <Image source={facebook} style={styles.img}/>
                <View style={styles.lineViewF}></View>
                <View style={styles.lineViewF2}></View>
            </View>
            <View style={styles.smalledge}>
                <Image source={amazon} style={styles.img}/>
                <View style={styles.lineViewA}></View>
                <View style={styles.lineViewA2}></View>
            </View>
            
        </View>
    )
}

// our styling below here
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        
        flexWrap: "wrap"
    },
    smallCon:{
        width: "30%",
        height: 120,
        borderWidth:0.5,
        borderColor: "gray",
        marginRight: "4.9%",
        borderRadius: 10,
        opacity: 0.7
    },
    smalledge:{
        width: "30%",
        height: 120,
        opacity: 0.7,
        alignSelf: "flex-end",
        borderRadius: 10,
        borderWidth:0.5,
        borderColor: "gray",
       
    },
    img:{
        width: 35,
        height: 35,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 25
    },
    lineViewT:{
        width: "100%",
        height: 5,
        backgroundColor: "red"
    },
    lineViewT2:{
        width: "100%",
        height: 5,
        backgroundColor: "#ebc0be",
        marginTop: 5
    },
    lineViewF:{
        width: "100%",
        height: 5,
        backgroundColor: "blue"
    },
    lineViewF2:{
        width: "100%",
        height: 5,
        backgroundColor: "#bec2eb",
        marginTop: 5
    },
    lineViewA:{
        width: "100%",
        height: 5,
        backgroundColor: "orange"
    },
    lineViewA2:{
        width: "100%",
        height: 5,
        backgroundColor: "#debda4",
        marginTop: 5
    },

})