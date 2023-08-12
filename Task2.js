import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function ColorBox(props) {
    return (
      <View style={[styles.square, { backgroundColor: `rgb(${props.red},${props.green},${props.blue})` }]} />
    );
  }

  return (
    <View style={styles.container}>
      <ColorBox red={red} green={green} blue={blue} />
      <Text>rgb({red}, {green}, {blue})</Text>
      <View style={styles.bottom}>
        <View style={[styles.fun, { paddingLeft: 7, paddingRight: 7 }]}>
          <Button
            title="-"
            onPress={() => {
              if (red > 0)
               setRed(red - 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
          <Text style={{ margin: 10 }}>Red</Text>
          <Button
            title="+"
            onPress={() => {
              if (red < 255)
               setRed(red + 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
        </View>
        <View style={[styles.fun, { paddingLeft: 7, paddingRight: 7 }]}>
          <Button
            title="-"
            onPress={() => {
              if (green > 0)
               setGreen(green - 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
          <Text style={{ margin: 10 }}>Green</Text>
          <Button
            title="+"
            onPress={() => {
              if (green < 255)
               setGreen(green + 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
        </View>
        <View style={[styles.fun, { paddingLeft: 7, paddingRight: 7 }]}>
          <Button
            title="-"
            onPress={() => {
              if (blue > 0)
               setBlue(blue - 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
          <Text style={{ margin: 10 }}>Blue</Text>
          <Button
            title="+"
            onPress={() => {
              if (blue < 255)
               setBlue(blue + 10);
              else {
                alert('Limit exceed');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    gap: 10,
  },
  fun: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    width: 100,
    height: 'auto',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 230,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
