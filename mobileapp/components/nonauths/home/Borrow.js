import React from "react";
import {View, Text, StyleSheet, Dimensions, Image, Pressable} from "react-native"
import Flag from "../../../utils/images/flag.jpg"
import Ionicon from "react-native-vector-icons/Feather"
import Material from "react-native-vector-icons/FontAwesome"
const windowHiehgt = Dimensions.get('window').height
export default function Borrow(){
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
                
            </View>
            <View style={styles.downDiv}>
                <View style={styles.subDiv}>
                    <View
                    style={{
                        backgroundColor: "#f09432",
                        width: 100,
                        alignItems: "center",
                        padding: 2,
                        borderRadius:2,
                        marginBottom: 10
                    }}
                    >
                        <Text
                            style={{
                                color: "white"
                            }}
                        >coming Soon</Text>
                    </View>
                    <View style={styles.rows}>
                        <View >
                            <Text
                                style={{
                                    color: "#d4adf0",
                                    fontWeight: "bold"
                                }}
                            >Loan</Text>
                            <Text
                                 style={{
                                    color: "#747375",
                                    fontSize: 12,
                                   
                                }}
                            >Apply for low-interest loan, get money </Text>
                            <Text
                                style={{
                                    color: "#747375",
                                    fontSize: 12,
                                   
                                }}
                            > in minutes</Text>
                        </View>
                        <View
                           
                        >
                            <Material name="briefcase" size={40} color="#649cbd"/>
                        </View>
                    </View>
                </View>
                <View style={styles.subDiv}>
                   
                   <View style={styles.rows}>
                        <View>
                            <Text
                                style={{
                                    color: "#3c1575",
                                    fontWeight: "bold"
                                }}
                            >Overdraft</Text>
                            <Text
                                style={{
                                    color: "black",
                                    fontSize: 12,
                                   
                                }}
                            >Apply for low-interest loan, get </Text>
                            <Text
                                style={{
                                    color: "black",
                                    fontSize: 12,
                                   
                                }}
                            >money in minutes</Text>
                        </View>
                        <Material name="dollar" size={40} color="#9ee8bf"/>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        color: "#649cbd",
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
       paddingHorizontal: 20,
       marginTop: 20,
    },
    subDiv:{
        borderWidth: 1,
        borderColor: "#cecccf",
        padding: 20,
        marginBottom: 20
    },
    rows:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    container:{
        backgroundColor: "white",
        paddingBottom: 250
    }
    
})