import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

// component created below
 function Register({navigation}){
    return(
        <View style={styles.container}>
            <Text>this is Login</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('signin')
            }}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Register
// styles below
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "red"
    }
})