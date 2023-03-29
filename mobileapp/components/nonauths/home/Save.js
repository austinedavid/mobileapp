import React from "react";
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from "react-native"
import Flag from "../../../utils/images/flag.jpg"
import Ionicon from "react-native-vector-icons/Feather"
import Pig from "../../../utils/images/pig2.jpg"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
const windowHiehgt = Dimensions.get('window').height
console.log(windowHiehgt)
export default function Save(){
    return(
        <View style={styles.container}>
             <View style={styles.topDiv}>
                <View style={styles.imgDiv}>
                    <Image source={Flag} style={{width:15, height: 15}}/>
                    <Text style={styles.imgText}>NGN Savings</Text>
                </View>
                <View style={styles.ammoutDiv}>
                    <Text style={styles.ammoutText}>#0.00</Text>
                    <Pressable onPress={()=>goToNext("budget")}>
                        <View style={styles.dots}><Ionicon name="more-horizontal" size={20}/></View>
                    </Pressable>
                </View>
                <View style={styles.downDiv}>
                    <View style={styles.downDivleft}>
                        <View style={{width: 18, height: 18, backgroundColor: "#319e78", alignItems: "center", justifyContent: "center", borderRadius: 100}}>
                            <Material name="account-convert" size={14} color="white"/>
                        </View>
                        <Text style={{marginLeft: 12, color:"#319e78", fontWeight: "bold", fontSize: 12}}>Convert</Text>
                    </View>
                   
                </View>
            </View>
            <View style={styles.textdiv}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 10}}>Pockets</Text>
                <Text style={{textAlign: "center", color: "gray", fontSize: 12}}>Put money away daily, weeekly, monthly or as you spend</Text>
            </View>
            <Image style={styles.pig} source={Pig}/>
            <View style={styles.btnCon}>
            <Pressable style={styles.saveBtn}>
                <Text style={{color: "white", fontWeight: "bold"}}>Save Now</Text>
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 60,
        backgroundColor: "white"
    },
    topDiv:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 2,
        backgroundColor: "white"
    },
    imgDiv:{
        flexDirection: "row",
        alignItems: "center"
    },
    imgText:{
        marginLeft: 4,
        fontSize: 12,
        color: "black",
        fontWeight: 500
    },
    ammoutDiv:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    ammoutText:{
        fontSize: 25,
        color: "#319e78",
        fontWeight: "bold"
    },
    dots:{
        width: 25,
        height: 25,
        backgroundColor: "#d4d3d2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    downDiv:{
        flexDirection: "row",
        marginTop: windowHiehgt <= 592? 10: 20
    },
    downDivleft:{
        width: "48%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 5,
        marginRight: "4%"
    },
    textdiv:{
        paddingHorizontal: 40,
        alignItems: "center",
        marginTop: 10
    },
    pig:{
        marginTop: windowHiehgt <= 593? 10 : 30,
        width: windowHiehgt <= 593? 80 : 150,
        height: windowHiehgt <= 593? 80 : 150,
        alignSelf: "center"
    },
    btnCon: {
        paddingHorizontal: 20,
        marginTop: windowHiehgt <= 593? 30 : 100,
    },
    saveBtn:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#3c1575",
        borderRadius: 10
    }
})