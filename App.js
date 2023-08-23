import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import HomeWorksScreen from './HomeWorksScreen'; // Import the HomeWorksScreen component
import CollegeWorksScreen from './CollegeWorksScreen'; // Import the CollegeWorksScreen component
import OtherWorksScreen from './OtherWorksScreen'; // Import the OtherWorksScreen component
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => setIsLoggedIn(false)} // Log out when pressed
                    style={{
                      marginRight: 15,
                    }}
                  >
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                      Log Out
                    </Text>
                  </TouchableOpacity>
                ),
              })}
            >
              {props => <HomeScreen {...props} setCompletedTasks={setCompletedTasks} />}
            </Stack.Screen>
            <Stack.Screen name="HomeWorks" component={HomeWorksScreen} />
            <Stack.Screen name="CollegeWorks" component={CollegeWorksScreen} />
            <Stack.Screen name="OtherWorks" component={OtherWorksScreen} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
