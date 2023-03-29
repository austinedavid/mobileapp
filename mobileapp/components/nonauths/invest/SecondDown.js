import React from "react";
import {View, Text, StyleSheet, Dimensions, Pressable, Image} from "react-native"
import bambo from "../../../utils/images/bambo.png"
// creating our dimension hieght
const ourheight = Dimensions.get("screen").height
// creating our functional component
export default function SecondDown(){
    return(
        <View style={styles.container}>
            <Text style={styles.headings}>Investments made easy</Text>
            <Text style={styles.subheadings}>Buy stocks with as little as $10</Text>
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Find a Stock</Text>
            </Pressable>
            <View style={styles.subBtnView}>
                <Text style={styles.subBtnText}>
                    Kuda doesn't give investment advice. Please consult your legal, financial and tax advisers before you buy stocks 
                </Text>
            </View>
            <View style={styles.imgView}>
                <Text style={{fontSize: 12, color: "gray"}}>powered by</Text>
                <Image style={styles.img} source={bambo}/>
            </View>
        </View>
    )
}

// creating our styles
const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "center",
        marginTop: ourheight <= 700? 10: 40
        
    },
    headings:{
        fontSize: 19,
        fontWeight: "bold",
        color: "black"
    },
    subheadings:{
        fontSize: 12,
        marginTop: 5
    },
    btn:{
        width: "100%",
        height: 45,
        backgroundColor: "#3c1575",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 15
    },
    btnText:{
        color: "white",
        fontSize:14,
        fontWeight: "bold",
        
    },
    subBtnView:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginTop: 15
    },
    subBtnText:{
        fontSize: 12,
        textAlign: "center",
        color: "gray"
    },
    imgView:{
        marginTop: 25,
        flexDirection: 'row',
        alignItems:"center"
    },
    img:{
        width: 60,
        height: 15,
        marginLeft: 5,
        
    }
})