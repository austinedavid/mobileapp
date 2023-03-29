import React from "react";
import {View, Text} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Index from "../../components/nonauths/pay/Index";
import Vianame from "../../components/nonauths/pay/Vianame";
import ViaNum from "../../components/nonauths/pay/ViaNum";
const stack = createNativeStackNavigator()

export default function Pay(){
    return (
       <stack.Navigator>
            <stack.Screen
            options={{
                headerShown: false
            }}
             name="payindex" component={Index}/>
            <stack.Screen name="via-username" component={Vianame}/>
            <stack.Screen name="via-acNumber" component={ViaNum}/>
       </stack.Navigator>
    )
}