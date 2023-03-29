// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './screens/authScreen/Login';
import Register from './screens/authScreen/Register';
import AuthRoute from './screens/authScreen/Route';
import NonAuthRoute from './screens/nonAuthScreen/Route';
import {NavigationAction, NavigationContainer} from "@react-navigation/native"

export default function App() {
  // conditionally rendering routes for authenticated and non authenticated users
  const loggedIn = true
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor='gray' barStyle="light-content" hidden={false}/>
     {
      loggedIn?<NavigationContainer><NonAuthRoute/></NavigationContainer> :
      <AuthRoute/>
     }
    
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1
 }
});
