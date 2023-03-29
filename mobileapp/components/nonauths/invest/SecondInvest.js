import react from "react"
import {View, Text, StyleSheet, Dimensions} from "react-native"
import SecondDown from "./SecondDown"
import SecondTop from "./SecondTop"

// getting the dimension of our width
const height = Dimensions.get("screen").height
// creating our functional component
export default function SecondInvest(){
    return(
        <View style={styles.container}>
            <SecondTop/>
            <SecondDown/>
        </View>
    )
}

// creating the stylesheet
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        marginTop: height <= 700? 10: 60
    }
})