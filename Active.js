import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Text style={styles.txt} >ActivityIndicator</Text>
    <View style={styles.first} >
    <ActivityIndicator size="small"/>
    <ActivityIndicator size="large" color="#33FFEC"/>
    <ActivityIndicator size="small" color="FF5733" />
    <ActivityIndicator size="large" color="#C70039" />
    </View>
    <View style={styles.first} >
    <ActivityIndicator />
    <ActivityIndicator size={"large"} color="#FF337A" />
    <ActivityIndicator size="small" color="#3433FF" />
    <ActivityIndicator size="large" color="#E733FF" />
    </View>
  </View>
);

const styles = StyleSheet.create({
    first:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        height:50,
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:3
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  horizontal: {
    flexDirection: 'colomn',
    justifyContent: 'space-around',
    padding: 10,
  },
  txt:{
     fontSize:20,
     color:'red'   
  }
});

export default App;