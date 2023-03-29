import React from "react";
import {View, Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Register from "./Register";
import Login from "./Login";

// created a stack navigation below
const stack = createNativeStackNavigator()

// component generated
export default function AuthRoute(){
    return(
     <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="signup" component={Register}/>
            <stack.Screen name="signin" component={Login}/>
        </stack.Navigator>
     </NavigationContainer>
    
    )
}