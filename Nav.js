// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Component/Home';
import Products from './Component/Product';
import { Button, View } from 'react-native';
import Eli from './Eli.js'


const Stack = createNativeStackNavigator();



const App = () => {
  return (
 
    
    <NavigationContainer>
        
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default App;
