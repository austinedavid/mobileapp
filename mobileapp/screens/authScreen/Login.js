import React from "react";
import {View, Text, TouchableOpacity} from "react-native"

// component created below
export default function Login({navigation}){
    return(
        <View>
            <Text>this is Login</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('signup')
            }}>
                <Text>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
}