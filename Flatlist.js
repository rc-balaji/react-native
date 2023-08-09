import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet,ImageBackground } from 'react-native';
import Sam1 from './Component/sam1';
import IMG from './assets/image.png'
import BG from './assets/bgm.jpg'

const App = () => {
    const [students,setStu] =useState( [
        { name: 'John Doe', age: 20 },
        { name: 'Jane Smith', age: 22 },
        { name: 'Michael Johnson', age: 21 },
        { name: 'Emily Williams', age: 19 },
        { name: 'Robert Lee', age: 23 },
        { name: 'Sophia Brown', age: 20 },
        { name: 'William Taylor', age: 19 },
        { name: 'Olivia Anderson', age: 21 },
        { name: 'James Martinez', age: 22 },
        { name: 'Emma Moore', age: 20 },
        { name: 'Ethan Clark', age: 20 },
        { name: 'Ava Rodriguez', age: 21 },
        { name: 'Liam Scott', age: 22 },
        { name: 'Isabella Green', age: 19 },
        { name: 'Noah Adams', age: 20 },
        { name: 'Mia Lewis', age: 22 },
        { name: 'Lucas Hughes', age: 21 },
        { name: 'Sophie Turner', age: 19 },
        { name: 'Alexander Foster', age: 23 },
        { name: 'Charlotte Price', age: 20 },
        { name: 'Daniel Kelly', age: 21 },
        { name: 'Grace Cooper', age: 19 },
        { name: 'Matthew Wright', age: 22 },
        { name: 'Chloe Brooks', age: 20 },
        { name: 'Andrew Rivera', age: 21 },
        { name: 'Ella Rogers', age: 23 },
        { name: 'David Wood', age: 19 },
        { name: 'Anna Coleman', age: 20 },
        { name: 'Joseph Jenkins', age: 22 },
        { name: 'Samantha Long', age: 21 },
        { name: 'Benjamin Hughes', age: 19 },
        { name: 'Madison Bell', age: 20 },
        { name: 'Samuel Hill', age: 21 },
        { name: 'Scarlett Patterson', age: 23 },
        { name: 'Joshua Butler', age: 20 },
        { name: 'Natalie Price', age: 22 },
        { name: 'Anthony Ramirez', age: 19 },
        { name: 'Grace Murphy', age: 20 },
        { name: 'Christopher Cox', age: 21 },
        { name: 'Hannah James', age: 23 },
        { name: 'Isaac Gray', age: 19 },
        { name: 'Avery Bell', age: 20 },
        { name: 'Elizabeth Foster', age: 22 },
        { name: 'Dylan Howard', age: 11 },
        { name: 'Addison Powell', age: 19 },
        { name: 'Carter Peterson', age: 20 },
        { name: 'Amelia Simmons', age: 22 },
        { name: 'Owen Bennett', age: 12 },
        { name: 'Aria Hughes', age: 19 },
        { name: 'Jackson Collins', age: 20 },
        { name: 'Abigail Russell', age: 21 },
        { name: 'Josephine Ward', age: 23 },
        { name: 'Thomas Bryant', age: 20 },
        { name: 'Victoria Bailey', age: 22 },
        { name: 'Henry Ross', age: 19 },
        { name: 'Lily James', age: 20 },
        { name: 'Andrew Simmons', age: 7 },
        { name: 'Evelyn Torres', age: 23 },
        { name: 'Nathan Morris', age: 20 },
        { name: 'Sofia Hughes', age: 22 },
        { name: 'Charles Sanchez', age: 19 },
        { name: 'Camila Davis', age: 20 },
        { name: 'Anthony Jenkins', age: 21 },
        { name: 'Avery White', age: 23 },
      ])

  return (
    <ImageBackground source={BG} style={styles.backgroundImage}>
    <View style={styles.container}>
         <Text style={{
     fontSize:20,
     color:'red'   
  }} >FlatList ImageBackground</Text>
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Sam1 name={item.name} age={item.age} color="red" clas="sam1" img={IMG} />
        )}
      />
    </View></ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the resizeMode as needed (cover, contain, etc.)
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
});

export default App;
