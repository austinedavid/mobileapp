import React from "react"
import {View, Text, Pressable, StyleSheet} from "react-native"
import Ionicons from "react-native-vector-icons/MaterialIcons"

export default function ProfileDown(){
    return(
        <View style={styles.mainCon}>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topTextblur}>None</Text>
                    <Text style={styles.downText}>Username</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#dfdee0" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>Mesoma David Augustine</Text>
                    <Text style={styles.downText}>Account Name</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>No 23 neni street Enugu</Text>
                    <Text style={styles.downText}>Address</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>+2348145508195</Text>
                    <Text style={styles.downText}>Phone Number</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>austinedavid@gmail.com</Text>
                    <Text style={styles.downText}>Email Address</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>None</Text>
                    <Text style={styles.downText}>Identification</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>Ugochukwu Samson</Text>
                    <Text style={styles.downText}>Next Of Kin</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topText}>None</Text>
                    <Text style={styles.downText}>Marital Status</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
            <View style={styles.outerCon}>
                <View style={styles.textCon}>
                    <Text style={styles.topTextRed}>Restrict Account</Text>
                    <Text style={styles.downText}>stop transactions in emergency situations</Text>
                </View>
                <Ionicons name="keyboard-arrow-right" color="#615e5e" size={25}/>
            </View>
        </View>
    )
}

// below is our styles
const styles = StyleSheet.create({
    mainCon:{
        marginTop: 40
    },
    outerCon:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    topText:{
        fontWeight: "bold",
        color:"#3c1575",
        fontSize: 16

    },
    downText:{
        color:"#ccc8c8",
        fontSize: 12
    },
    topTextblur:{
        fontWeight: "bold",
        color:"#ceaaf0",
        fontSize: 16

    },
    topTextRed:{
        fontWeight: "bold",
        color:"red",
        fontSize: 16

    },
})