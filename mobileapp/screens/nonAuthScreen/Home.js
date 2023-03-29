import React from "react";
import {View, Text} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Index from "../../components/nonauths/home/Index";
import Profiles from "../../components/nonauths/home/Profile";
import Budgets from "../../components/nonauths/home/Budget";
import Details from "../../components/nonauths/home/Details";
import Addmoney from "../../components/nonauths/home/Addmoney";
const stack = createNativeStackNavigator()
export default function Home(){
    return (
        <stack.Navigator>
            <stack.Screen name="index" component={Index}
            options={{
                headerShown: false
            }}
            />
            <stack.Screen name="profile" component={Profiles}/>
            <stack.Screen name="budget" component={Budgets}/>
            <stack.Screen name="details" component={Details}/>
            <stack.Screen name="addmoney" component={Addmoney}/>
        </stack.Navigator>
    )
}