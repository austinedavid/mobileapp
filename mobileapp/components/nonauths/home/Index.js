import React, {useState} from "react";
import {View, Text,Pressable, StyleSheet} from "react-native"
import HomeTop from "./HomeTop";
import Spend from "./Spend"
import Save from "./Save"
import Borrow from "./Borrow"

export default function Index({navigation}){
    const[selected, setselected ] = useState(1)
    return(
        <View style={styles.container}>
            <View style={styles.topDiv}>
                <HomeTop navigation={navigation} selected={selected} setselected={setselected}/>
            </View>
            <View style={styles.downDiv}>
                {
                    selected==1? <Spend navigation={navigation}/>:
                    selected==2?<Save/>:
                    <Borrow/>
                }
            </View>
        </View>
    )
}

// stylings below
const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
   topDiv:{
    backgroundColor: "white",
    height: 125,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
   },
   downDiv:{
    
    height: "60%"
   }
})