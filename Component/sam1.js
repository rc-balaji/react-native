import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

function Sam1(props) {
  return (
    <View style={styles.body}>
      <View style={[styles.container, { backgroundColor: props.color }]}>
        <View style={styles.imageContainer}>
          <Image
            source={props.img} // Replace with your image source
            style={styles.image}
          />
        </View>
        <Button
          onPress={() => {
            alert(props.name);
          }}
          title={props.name}

        />
          
        <Text style={styles.ageText}>Age: {props.age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    gap: 10,
    width: 200,
    height: 'auto',
    padding: 5,
    justifyContent: 'center',
    margin: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 0, 
  },
  image: {
    width: 40, 
    height: 40,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  ageText: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
    padding: 5,
    borderRadius: 2,
    backgroundColor: 'aquamarine',
  },
});

export default Sam1;
