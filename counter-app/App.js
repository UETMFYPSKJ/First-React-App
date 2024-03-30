import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const[counter,setcounter] = useState(0);

  const increment= () =>{
    setcounter(counter + 1);
  }

  const decrement= () =>{
    if(counter>0){
    setcounter(counter - 1);
    }
    else{Alert.alert('Sorry you have reached the limit 0')}
   }

  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
      <Button style={styles.incbutton} onPress={increment} title='+' />
      <Button style={styles.decbutton} onPress={decrement} title='-' />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
incbutton:
          {
            padding:'50',
          },
 decbutton:
           { 
            marginTop: '1000',
            padding: '1000',
         },      

});

