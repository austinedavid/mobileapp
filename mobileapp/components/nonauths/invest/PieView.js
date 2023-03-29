import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import pie from "../../../utils/images/pizza.jpg"

// creating our components
export default function PieView(){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.soonDiv}><Text style={styles.soonText}>coming soon</Text></View>
                <Text style={styles.bigText}>Managed Funds</Text>
                <Text style={styles.smallText}>invest in professionally managed products</Text>
            </View>
            <View style={styles.right}>
                <Image source={pie} style={styles.img}/>
            </View>
        </View>
    )
}

// our styling appears below here
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        height: 80,
        borderColor: "#e2e1e3",
        borderRadius: 5,
        paddingLeft: 18
    },
    smallText:{
        fontSize: 10,
        color:"#d6d2d2"
    },
    bigText:{
        color:"#c6b1e0",
        fontWeight: "bold"
    },
    left:{
        flex:9
    },
    right:{
        flex:3,
        height: "100%",
        position: "relative",
        overflow: "hidden"
    },
    img:{
        width: "100%",
        height: "100%",
        opacity: 0.5,
        position: "absolute",
        bottom: -20,
        right: -20
    },
    soonDiv:{
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: "#dba46e",
        width: "40%",
        borderRadius: 5
    },
    soonText:{
        fontSize: 12,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})