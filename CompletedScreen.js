import React from 'react';
import { View, StyleSheet } from 'react-native';
import CompletedList from './CompletedList';

const CompletedScreen = ({route}) => {
  const { completedTasks } = route.params;
  
  return (
    <View style={styles.container}>
      <CompletedList completedTasks={completedTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
});

export default CompletedScreen;