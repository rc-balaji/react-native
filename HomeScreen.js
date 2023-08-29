import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ username }) => {
  return (
    <ImageBackground
      source={require('./assets/bgm.png')} 
      style={styles.container}
    >
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  header: {
    marginBottom: 150,
    marginTop: 20,
    marginLeft: 250,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
