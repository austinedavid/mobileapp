import React from "react";
import {View, Text, Image, ScrollView, StyleSheet, Dimensions, Pressable} from "react-native"
import Ionicon from "react-native-vector-icons/Feather"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
import Ant from "react-native-vector-icons/AntDesign"
import Flag from "../../../utils/images/flag.jpg"
import transaction from "../../../utils/transactions/transaction";
const windowHiehgt = Dimensions.get('window').height
console.log(windowHiehgt)
export default function Spend({navigation}){
    const goToNext = (routeName)=>{
        navigation.navigate(routeName)
    }
    return(
        <View>
            <View style={styles.topDiv}>
                <View style={styles.imgDiv}>
                    <Image source={Flag} style={{width:15, height: 15}}/>
                    <Text style={styles.imgText}>Nigeria Naira</Text>
                </View>
                <View style={styles.ammoutDiv}>
                    <Text style={styles.ammoutText}>#3,353.20</Text>
                    <Pressable onPress={()=>goToNext("budget")}>
                        <View style={styles.dots}><Ionicon name="more-horizontal" size={20}/></View>
                    </Pressable>
                </View>
                <View style={styles.downDiv}>
                    <View style={styles.downDivleft}>
                        <View style={{width: 18, height: 18, backgroundColor: "#b1a5c7", alignItems: "center", justifyContent: "center", borderRadius: 100}}>
                            <Material name="account-convert" size={14} color="white"/>
                        </View>
                        <Text style={{marginLeft: 12, color:"#b1a5c7", fontWeight: "bold", fontSize: 12}}>Convert</Text>
                    </View>
                    
                    <Pressable style={styles.downDivright} onPress={()=>goToNext("addmoney")}>
                        
                        <Ant name="pluscircle" size={17} color="#3c1575"/>
                        <Text style={{marginLeft: 12, color:"#3c1575", fontWeight: "bold", fontSize: 12}}>Add Money</Text>
                        
                    </Pressable>
                    
                </View>
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                {
                    transaction.map((item)=>(
                        <Pressable key={item.id} style={styles.itemCon} onPress={()=>goToNext("details")}>
                            <View style={styles.imgOuterCon}>
                                <View style={styles.imgInnerCon}>
                                    <Image source={item.bankLogo} style={{width: 20, height: 20, borderRadius: 100}}/>
                                </View>
                                <View>
                                    <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                                    <Text style={{color: "#c3c1c7"}}>{item.time}</Text>
                                </View>
                            </View>
                            
                            <View>
                                <Text>{item.amount}</Text>
                            </View>
                        </Pressable>
                    ))
                }
                 <View style={styles.lastView}>
                    <View style={styles.subLastDiv}>
                        <View style={{width:20, height:20, backgroundColor: "#c4a7db", alignItems: "center", justifyContent: "center", borderRadius: 100}}><Ant name="search1" color="#3c1575"/></View>
                        <Text style={{marginLeft: 10, color:"#3c1575"}}>View More</Text>
                    </View>
                </View>
            </ScrollView>
           
        </View>
    )
}

// stylings 
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
        color: "black",
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
    downDivright:{
        width: "48%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ededed",
        borderRadius: 5,
    },
    scroll:{
        height: windowHiehgt <= 592? 285: 450,
        paddingTop: 20,
        
        
    },
    itemCon:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgOuterCon:{
        flexDirection: "row",
        alignItems: "center"
    },
    imgInnerCon:{
        marginRight: 15,
        width: 30,
        height: 30,
        backgroundColor: "#b1a5c7",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    lastView:{
        height: 150,
       alignItems: "center",
       justifyContent: "center"
    },
    subLastDiv:{
        width: 120,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
    
})