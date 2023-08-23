import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const LoginScreen = ({ navigation, setIsLoggedIn, setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginResult, setLoginResult] = useState('');

  const emailList = ["Bal@123", "Raj@123", "Sam@123"];
  const passwordList = ["123", "456", "789"];
  const usernameList = ["Balaji", "Raj", "Sam"];

  const handleLogin = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      const emailIndex = emailList.indexOf(email);

      setTimeout(() => {
        if (emailIndex !== -1 && password === passwordList[emailIndex]) {
          setLoginResult('success');
          setIsLoggedIn(true);
          setUsername(usernameList[emailIndex]); // Set the username
          Alert.alert('Success', `Welcome back ${usernameList[emailIndex]}!!!`);
        } else {
          setLoginResult('failure');
        }
        setIsLoading(false);
      }, 1500);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {isLoading && <ActivityIndicator style={styles.loader} size="large" />}
      {loginResult === 'failure' && !isLoading && (
        <Text style={styles.alertText}>Invalid email or password</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loader: {
    marginTop: 20,
  },
  alertText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
