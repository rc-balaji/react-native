import React from 'react';
import { View, Text } from 'react-native';

const UserDetails = ({ route }) => {
  const { userData } = route.params;

  return (
    <View>
      <Text>Name: {userData.name}</Text>
      <Text>Department: {userData.dept}</Text>
      <Text>College: {userData.college}</Text>
      <Text>Email: {userData.email}</Text>
    </View>
  );
};

export default UserDetails;
