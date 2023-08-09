import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

const MyComponent = () => {
  const [uname, setUname] = useState('');

  const handleInputChange = (text) => {
    setUname(text);
  };

  const handleButtonPress = () => {

    alert('Submit button pressed');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.imageContainer}>
      <Text style={{
     fontSize:20,
     color:'red'   
  }} >KeyboardAvoidingView</Text>
        <Image source={require('./icons.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={handleInputChange}
          value={uname}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleButtonPress}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
