import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CompletedList = ({ completedTasks }) => {

  const renderItem = ({ item ,index}) => (
    <View style={styles.completedItem}>
      
  
  <Text style={styles.itemText}>{index+1+" : "+item}</Text>
  
  
    </View>
  );
  const renderItem1 = ({ item ,index}) => (
    <View style={styles.completedItem}>
      
  
  <Text style={[styles.itemText,{textAlign:'center'}]}>{item}</Text>
  
  
    </View>
  );

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      
  {completedTasks.length!==0?

  <FlatList
    data={completedTasks}
    renderItem={renderItem}
    keyExtractor={(item, index) =>index.toString()}
  />
:
  <FlatList
    data={["Not Yet"]}
    renderItem={renderItem1}
    keyExtractor={(item, index) =>index.toString()}
  />}
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
    textAlign:'center'
  },
  completedItem: {
    backgroundColor: '#fff',
    padding: 20, 
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  itemText: {
    fontSize: 18,
    fontWeight: 'bold', 
  },
  
  indexText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5
  },
  
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10
  }

});

export default CompletedList;