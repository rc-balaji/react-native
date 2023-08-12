import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddModal = ({ modalVisible, setModalVisible, inputText, setInputText, addItem }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
          <Button title="Save" onPress={addItem} />
        </View>
      </View>
    </View>
  </Modal>
);

const UpdateModal = ({ modalVisible, setModalVisible, updatedText, setUpdatedText, updateTask }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task to be updated"
          value={updatedText}
          onChangeText={(text) => setUpdatedText(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
          <Button title="Update" onPress={updateTask} />
        </View>
      </View>
    </View>
  </Modal>
);

const App = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [updatedText, setUpdatedText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const addItem = () => {
    if (inputText.trim() !== '') {
      setTodoList([...todoList, inputText]);
      setInputText('');
      setAddModalVisible(false);
    } else {
      alert('Type Anything.....');
    }
  };

  const handleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
    alert('Task completed and removed successfully!');
  };

  const handleUpdate = (index, updatedTask) => {
    setSelectedIndex(index);
    setUpdatedText(updatedTask);
    setUpdateModalVisible(true);
  };

  const updateTask = () => {
    if (updatedText.trim() !== '') {
      const updatedList = [...todoList];
      updatedList[selectedIndex] = updatedText;
      setTodoList(updatedList);
      setUpdatedText('');
      setUpdateModalVisible(false);
    } else {
      alert('Type Anything.....');
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{`${index + 1}. ${item}`}</Text>
      <TouchableOpacity onPress={() => handleComplete(index)} style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleUpdate(index, item)} style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={ {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, 
  }} >Welcome you To-do's</Text>
      <AddModal
        modalVisible={addModalVisible}
        setModalVisible={setAddModalVisible}
        inputText={inputText}
        setInputText={setInputText}
        addItem={addItem}
      />

      <UpdateModal
        modalVisible={updateModalVisible}
        setModalVisible={setUpdateModalVisible}
        updatedText={updatedText}
        setUpdatedText={setUpdatedText}
        updateTask={updateTask}
      />

      <TouchableOpacity
        onPress={() => setAddModalVisible(true)}
        style={{
          backgroundColor: '#007BFF',
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
          margin:30
        }}
      >
        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Add</Text>
      </TouchableOpacity>

      <FlatList
        style={{
          width: 200,
        }}
        data={todoList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 8,
    padding: 15,
    borderWidth: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  completeButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
