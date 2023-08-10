import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default function App() {

const [color,setColor]=useState("rgb(52, 235, 100)")
const [num,setNum]=useState("rgb(52, 235, 100)")
function ColorBox(probs){
    return(
<View style={[styles.sqaure,{backgroundColor:probs.colr}]} >
    {/* <Text></Text> */}
</View>
    )
}
  
    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>{
                let ch=[]
                for(let i=0;i<3;i++){
                    ch.push(Math.floor(Math.random() * 255) + 1)
                }
                setColor(`rgb(${ch[0]},${ch[1]},${ch[2]})`)
            }}
        >
            <ColorBox colr={color} />
        </TouchableOpacity>
      </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    sqaure:{
        width:230,
        height:160,
        justifyContent:'center',
        alignItems:'center'
        
    }
})
