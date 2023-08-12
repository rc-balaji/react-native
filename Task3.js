import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';

export default function App() {
  const [data, setData] = useState([{ sts: 'Not Yes' }]);
  const [inputText, setInputText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem = () => {
    if (inputText.trim() !== '') {
      setData([...data, { sts: inputText }]);
      setInputText('');
      setIsModalVisible(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: 'red' }]}>
      <Modal visible={isModalVisible} animationType="none">
        <View style={styles.modalContainer}>
          <View style={styles.modalBackground} />
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter item"
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={addItem} />
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.sts}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.addButtonContainer}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 7,
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    color: 'white',
  },
  item: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalBackground: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
