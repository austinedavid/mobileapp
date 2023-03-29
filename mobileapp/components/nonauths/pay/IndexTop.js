import React from "react";
import {View, Text, StyleSheet} from "react-native"

// creating our functions to be returned
export default function IndexTop(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.bigText}>Friends on Kuda</Text>
                <Text style={styles.smallText}>Add people to your firend list</Text>
            </View>
            <View style={styles.rightCon}>
                <Text style={styles.mediumText}>Add Beneficiary</Text>
            </View>
        </View>
    )
}

// our styles appears below here
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        borderColor: "#d9d8d7",
        borderRadius: 5
    },
    smallText:{
        fontSize: 10,
        color: "gray"
    },
    mediumText:{
        fontSize: 12,
        color: "#3c1575",
        fontWeight: "bold"
    },
    bigText:{
        fontWeight: "bold",
        color: "#3c1575",
        fontSize: 16
    },
    rightCon:{
        paddingHorizontal: 5,
        paddingVertical: 7,
        backgroundColor: "#d0c0ed",
        borderRadius: 4
    }
})