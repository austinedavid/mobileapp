import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Font5 from "react-native-vector-icons/FontAwesome5"

// components below here
export default function LastView(){
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <View >
                    <View style={styles.icon}>
                    <Font5 name="calendar-alt" color="tomato"/>
                    </View>
                </View>
                <View style={styles.textCons}>
                    <Text style={styles.header}>Scheduled Payments</Text>
                    <Text style={styles.subtext}>Future payments and standing orders</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.lastText}>Coming Soon</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
    },
    icon:{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 5,
        borderColor: "gray"
        
    },
    subtext:{
        fontSize: 10,
        color: "#c7c5c9"
    },
    header:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#c8a7e8"
    },
    right:{
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: "#c79a46",
        borderRadius: 5
    },
    left:{
        flexDirection: "row",
        alignItems: "center"
    },
    textCons:{
        marginLeft: 20
    },
    lastText: {
        color: "white",
        fontSize: 11,
        fontWeight: "bold"
    }

})