import React from "react";
import {View, Text, StyleSheet, Pressable, Image} from "react-native"
import AntIcon from "react-native-vector-icons/AntDesign"
import Kudalogo from "../../../utils/images/kuda.png"
import Evilicon from "react-native-vector-icons/EvilIcons"
// creating our functional components
export default function IndexMiddle(){
    return(
        <View>
            <Pressable style={styles.eachCon}>
                <View style={styles.leftView}>
                    <View style={styles.imgCon}><Image
                        source={Kudalogo}
                        style={{width:"100%", height: "100%"}}
                    /></View>
                    <View>
                        <Text style={styles.bigText}>Send to @username</Text>
                        <Text style={styles.smallText}>send to any Kuda account, for free</Text>
                    </View>
                </View>
                <View style={styles.arrorCon}>
                    <AntIcon name="right" size={18} color="gray"/>
                </View>
            </Pressable>
            <Pressable style={styles.eachDown}>
                <View style={styles.leftView}>
                    <View style={styles.imgCon}><Evilicon name="sc-telegram" size={17} color="green"/></View>
                    <View>
                        <Text style={styles.bigText}>Send To Bank Account</Text>
                        <Text style={styles.smallText}>send to local bank account</Text>
                    </View>
                </View>
                <View style={styles.arrorCon}>
                    <AntIcon name="right" size={18} color="gray"/>
                </View>
            </Pressable>
        </View>
    )
}

// styings below here
const styles = StyleSheet.create({
    eachCon:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:20
    },
    eachDown:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    leftView:{
        flexDirection: "row",
        alignItems: "center"
    },
    imgCon:{
        width: 20,
        height: 25,
        borderWidth: 0.5,
        marginRight: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#dddce0"
    },
    smallText:{
        fontSize: 10,
        color: "gray"
    },
    bigText:{
        fontWeight: "bold",
        color: "#3c1575",
        fontSize: 16
    },
})