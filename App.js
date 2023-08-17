import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Task32';
import CompletedScreen from './CompletedScreen';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          initialParams={{ setCompletedTasks }}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Completed')}
                style={{
                  marginRight: 15,
                }}
              >
                <Text style={{color: 'blue'}}>Completed</Text>
              </TouchableOpacity>
            ),
          })}W
        />
        
        <Stack.Screen 
          name="Completed"
          component={CompletedScreen}
          initialParams={{ completedTasks }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;