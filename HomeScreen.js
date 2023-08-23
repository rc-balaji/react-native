import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation, setIsLoggedIn, username }) => {
  const navigateToComponent = (componentName) => {
    navigation.navigate(componentName);
  };

  const handleAdminPage = () => {
    const isAdmin = username === "Balaji"; // Checking if the current user is an admin

    if (isAdmin) {
      navigation.navigate("Admin");
    } else {
      Alert.alert("Access Denied", "Admin only");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleAdminPage}>
          <Text style={styles.adminButton}>Admin</Text>
        </TouchableOpacity>
      </View>
       <Text style={styles.usernameText}>Welcome to your To-do List App</Text>
       
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
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 150,
    marginTop: 20,
    marginLeft:250
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  adminButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 10,
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
