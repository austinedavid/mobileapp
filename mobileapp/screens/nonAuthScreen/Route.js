import React from "react";
import {View, Text} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { getFocusedRouteNameFromRoute} from "@react-navigation/native"
import Home from "./Home";
import Pay from "./Pay";
import Invest from "./Invest";
import Cards from "./Cards";
import More from "./More";
import IonicIcon from "react-native-vector-icons/Ionicons";
import Pays from "react-native-vector-icons/EvilIcons"
import Bar from "react-native-vector-icons/Entypo"
import Dots from "react-native-vector-icons/MaterialCommunityIcons"

const tab = createBottomTabNavigator()
// component generated
export default function NonAuthRoute(){
    return(
       
            <tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: "white",
                    paddingBottom: 5
                }
            }}
            >
                <tab.Screen name="Home" component={Home}
                options={({route})=>({
                    tabBarIcon: ({focused, size, color})=>{
                      
                        return<IonicIcon name={focused? "home": "home-outline"} size={size} color={color}/>
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "#3c1575",
                    tabBarIconStyle:{
                        marginBottom: -7
                    },
                    tabBarStyle:{
                        display: ExcludeTab(route)
                    }
                    
                })}
                />
                <tab.Screen name="Pay" component={Pay}
                options={(route)=>({
                    tabBarIcon: ({focus, size, color})=>{
                      
                        return<Pays name="sc-telegram" size={30} color={color}/>
                    },
                   
                    tabBarActiveTintColor: "#3c1575",
                    tabBarIconStyle:{
                        marginBottom: -7
                    }
                })}
                />
                <tab.Screen name="Invest" component={Invest}
                options={(route)=>({
                    tabBarIcon: ({focused, size, color})=>{
                      
                        return<Bar name="bar-graph" size={size} color={color}/>
                    },
                    
                    tabBarActiveTintColor: "#3c1575",
                    tabBarIconStyle:{
                        marginBottom: -7
                    }
                })}
                />
                <tab.Screen name="Cards" component={Cards}
                options={(route)=>({
                    tabBarIcon: ({focus, size, color})=>{
                      
                        return<IonicIcon name="md-card" size={size} color={color}/>
                    },
                    
                    tabBarActiveTintColor: "#3c1575",
                    tabBarIconStyle:{
                        marginBottom: -7
                    }
                })}
                />
                <tab.Screen name="More" component={More}
                options={(route)=>({
                    tabBarIcon: ({focus, size, color})=>{
                      
                        return<Dots name="dots-grid" size={size} color={color}/>
                    },
                    
                    tabBarActiveTintColor: "#3c1575",
                    tabBarIconStyle:{
                        marginBottom: -7
                    }
                })}
                />
            </tab.Navigator>
       
    )
}

// here we handle the particular route that wiil
// not contain the tab bar
function ExcludeTab(route){
    
    
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'; 
   
    if(routeName=="profile" || routeName == "budget" || routeName == "details" || routeName == "addmoney"){
        return "none"
    }else{
        return "flex"
    }
}