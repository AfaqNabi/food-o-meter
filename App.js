import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/screens/Home/Home.js'
import Login from './components/screens/Login/Login.js'

const RootStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name = "Login" component={Login} />          
        <RootStack.Screen name = "Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;