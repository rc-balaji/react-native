import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import HomeWorksScreen from './HomeWorksScreen';
import CollegeWorksScreen from './CollegeWorksScreen';
import OtherWorksScreen from './OtherWorksScreen';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const RenderLoginScreen = (props) => (
    <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
  );

  const LogoutButton = ({ navigation }) => (
    <TouchableOpacity
      onPress={() => setIsLoggedIn(false)}
      style={{ marginRight: 15 }}
    >
      <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
        Log Out
      </Text>
    </TouchableOpacity>
  );

  const HomeStack = () => (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeWorks" component={HomeWorksScreen} />
      <Stack.Screen name="CollegeWorks" component={CollegeWorksScreen} />
      <Stack.Screen name="OtherWorks" component={OtherWorksScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              headerRight: () => <LogoutButton />,
            }}
          />
          <Tab.Screen
            name="HomeWorks"
            component={HomeWorksScreen}
            options={{
              tabBarLabel: 'HomeWorks',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
              headerRight: () => <LogoutButton />,
            }}
          />
          <Tab.Screen
            name="CollegeWorks"
            component={CollegeWorksScreen}
            options={{
              tabBarLabel: 'CollegeWorks',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="school" color={color} size={size} />
              ),
              headerRight: () => <LogoutButton />,
            }}
          />
          <Tab.Screen
            name="OtherWorks"
            component={OtherWorksScreen}
            options={{
              tabBarLabel: 'OtherWorks',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="briefcase" color={color} size={size} />
              ),
              headerRight: () => <LogoutButton />,
            }}
          />
          <Tab.Screen
            name="Admin"
            component={AdminScreen}
            options={{
              tabBarLabel: 'Admin',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
              headerRight: () => <LogoutButton />,
            }}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                const isAdmin = username === "Balaji"; 
                if (!isAdmin) {
                  e.preventDefault();
                  Alert.alert("Access Denied", "Admin Only");
                }
              },
            })}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={RenderLoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
