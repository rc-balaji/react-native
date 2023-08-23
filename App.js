import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import HomeWorksScreen from './HomeWorksScreen';
import CollegeWorksScreen from './CollegeWorksScreen';
import OtherWorksScreen from './OtherWorksScreen';
import AdminScreen from './AdminScreen';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const RenderLoginScreen = (props) => (
    <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
  );

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
                    onPress={() => setIsLoggedIn(false)}
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
              {props => <HomeScreen {...props} setCompletedTasks={setCompletedTasks} username={username} />}
            </Stack.Screen>
            <Stack.Screen name="HomeWorks" component={HomeWorksScreen} />
            <Stack.Screen name="CollegeWorks" component={CollegeWorksScreen} />
            <Stack.Screen name="OtherWorks" component={OtherWorksScreen} />
            <Stack.Screen name="Admin" component={AdminScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={RenderLoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
