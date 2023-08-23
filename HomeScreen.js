import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToComponent = (componentName) => {
    navigation.navigate(componentName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your To-do Lists</Text>
      <TouchableOpacity
        style={styles.componentButton}
        onPress={() => navigateToComponent('HomeWorks')}
      >
        <Text style={styles.componentButtonText}>Home Works</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.componentButton}
        onPress={() => navigateToComponent('CollegeWorks')}
      >
        <Text style={styles.componentButtonText}>College Works</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.componentButton}
        onPress={() => navigateToComponent('OtherWorks')}
      >
        <Text style={styles.componentButtonText}>Other Works</Text>
      </TouchableOpacity>
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
  componentButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  componentButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
