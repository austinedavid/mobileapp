import react from "react"
import {View, Text, StyleSheet, Image} from "react-native"
import network from "../../../utils/images/network.jpg"
import PieView from "./PieView"
import Viewfirst from "./Viewfirst"

// creating our functional component
export default function FirstInvest(){
    return(
        <View style={styles.container}>
            <Image source={network} style={styles.img}/>
            <Text style={styles.firstText}>Invest With Kuda</Text>
            <Text style={styles.secondText}>Choose an option below to grow your money. please, remember that investment fluctuate and Kuda doesn't give investment advice</Text>
            <Viewfirst/>
            <PieView/>
        </View>
    )
}

// creating the stylesheet
const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    img:{
        width: 60,
        height: 60,
        marginBottom: 10
    },
    firstText:{
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    secondText:{
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10
    }
})