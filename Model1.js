import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Modal,
  Alert,
  Pressable, // Import Pressable
} from 'react-native';

const MyComponent = () => {
  const [uname, setUname] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);

  const handleInputChange = (text) => {
    setUname(text);
  };

  const handleButtonPress = () => {
    alert('Welcome '+uname);
  };

  const handleForgetButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePasswordRecovery = () => {
    Alert.alert('Password Recovery', 'A recovery email has been sent.');
    setModalVisible(false);
  };

  const handleButtonLongPress = () => {
    setSignUpModalVisible(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.imageContainer}>
        <Text style={styles.imageText}>KeyboardAvoidingView</Text>
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
        <Pressable
          style={styles.submitButton}
          onPress={handleButtonPress}
          onLongPress={handleButtonLongPress}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
          
        </Pressable>
        <Text >Long Press for Sign Up</Text>
        <TouchableOpacity style={styles.forgetButton} onPress={handleForgetButtonPress}>
          <Text style={styles.forgetButtonText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Password Recovery</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handlePasswordRecovery}>
              <Text style={styles.modalButtonText}>Recover Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSignUpModalVisible}
        onRequestClose={handleCloseSignUpModal}
      >
        <View style={styles.modalContainer}>
        <TextInput
        
          placeholder="Username"
          style={styles.input}
          
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <Pressable
          style={styles.submitButton}
          onPress={()=>{alert("Sign Up Successfully!!!!")}}
          
        >
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </Pressable>
        
      </View>
      </Modal>
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
    imageText: {
      fontSize: 20,
      color: 'red',
      marginBottom: 10,
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
      backgroundColor:'white',
      
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
    forgetButton: {
      marginTop: 10,
    },
    forgetButtonText: {
      color: '#3498db',
      fontSize: 14,
      textDecorationLine: 'underline',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding:40
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      width: '80%',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalText: {
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginVertical: 5,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default MyComponent;
