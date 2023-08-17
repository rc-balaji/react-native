import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CompletedList = ({ completedTasks }) => {

  const renderItem = ({ item }) => (
    <View style={styles.completedItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      <FlatList
        data={completedTasks}
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
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  completedItem: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default CompletedList;