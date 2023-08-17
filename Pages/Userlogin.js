import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserForm = ({ navigation, onSubmit }) => {
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const userData = { name, dept, college, email };
    onSubmit(userData);
    navigation.navigate('UserDetails', { userData });
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Department:</Text>
      <TextInput value={dept} onChangeText={setDept} />

      <Text>College:</Text>
      <TextInput value={college} onChangeText={setCollege} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UserForm;
