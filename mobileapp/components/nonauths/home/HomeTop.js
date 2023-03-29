import React from "react";
import {View, Text, Image, StyleSheet, Pressable} from "react-native"
import Ionicon from "react-native-vector-icons/Fontisto"
import passPort from "../../../utils/images/passport.jpg"

export default function HomeTop({selected, setselected, navigation}){

    
// home topdiv stying below
const styles = StyleSheet.create({
    topDiv:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15
    },
    imgCon:{
       flexDirection: "row",
       alignItems: "center"
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: 100
    },
    name:{
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10
    },
    // for down div
    downDiv:{
        flexDirection: "row"
    },
    downBtn:{
        borderWidth: 1,
        borderColor: "#b9babd",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: 10
    },
    btnText1:{
        color: selected==1? "#3c1575": "#b9babd",
        fontWeight: "bold",
    },
    btnText2:{
        color: selected==2? "#319e78": "#b9babd",
        fontWeight: "bold",
    },
    btnText3:{
        color: selected==3? "#649cbd": "#b9babd",
        fontWeight: "bold",
    }
})
// handle routing to profile
const goToProfile = (route)=>{
    navigation.navigate(route)
}


    return(
        <View>
            <View style={styles.topDiv}>
                <View style={styles.imgCon}>
                    <Pressable onPress={()=>goToProfile("profile")}>
                    <Image source={passPort} style={styles.img}/>
                    </Pressable>
                    <Text style={styles.name}>Hi, Mesoma</Text>
                </View>
                <Pressable onPress={()=>goToProfile("budget")}>
                <Ionicon name="pie-chart-2" size={24} color="#3c1575"/>
                </Pressable>
            </View>
            <View style={styles.downDiv}>
                <Pressable onPress={()=>setselected(1)}>
                    <View style={styles.downBtn}>
                        <Text style={styles.btnText1}>Spend</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>setselected(2)}>
                    <View style={styles.downBtn}>
                        <Text style={styles.btnText2}>Save</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>setselected(3)}>
                    <View style={styles.downBtn}>
                        <Text style={styles.btnText3}>Borrow</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
