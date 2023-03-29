import React from "react";
import {View, Text, StyleSheet} from "react-native"
import AddmoneySub from "./Addsub";
import Ionicon from "react-native-vector-icons/AntDesign";
import Evilicon from "react-native-vector-icons/EvilIcons";
import Fontawsome from "react-native-vector-icons/FontAwesome"
import Font5 from "react-native-vector-icons/FontAwesome5";
import Ent from "react-native-vector-icons/Entypo"

// adding money function
export default function Addmoney(){
    const firstDesc = "Borrow from your overdraft account for a daily fee."
    const secondDesc = "from bank app or internet banking"
    const thirdDesc = "with our bank USSD  code "
    const fourthDesc = "Add money with a debit card"
    const fifthDesc = "Deposit cash at our partner banks"
    return(
        <View style={styles.container}>
            <AddmoneySub iname="downcircle" Icon={Ionicon} header="Overdraft" subText={firstDesc}/>
            <AddmoneySub iname="sc-telegram" Icon={Evilicon} header="Bank Transfer" subText={secondDesc}/>
            <AddmoneySub iname="hashtag" Icon={Fontawsome} header="USSD" subText={thirdDesc}/>
            <AddmoneySub iname="wallet" Icon={Font5} header="Card" subText={fourthDesc}/>
            <AddmoneySub iname="layers" Icon={Ent} header="Cash Deposit" subText={fifthDesc}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
})