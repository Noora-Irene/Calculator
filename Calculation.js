import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, TextInput, Button } from 'react-native';

export default function Calculation(props) {
    navigationOptions = {title: 'Calculator'};
    const {navigate} = props.navigation;

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');
    const [equations, setEquations] = useState([]);
  
    const userInput1 = input1 => {   
      setInput1(input1);
    };
    const userInput2 = input2 => {   
      setInput2(input2);
    };
    let symbol='';
    let equation = '';
  
    const plusPressed = () => {
      let sum= parseFloat(input1) + parseFloat(input2);
      createEquation(input1, input2, "+", sum);
      setInput1('');
      setInput2('');
    }
    const minusPressed = () => {
      let minus= input1 - input2;
      createEquation(input1, input2, "-", minus);
      setInput1('');
      setInput2('');
    }
    const createEquation = (input1, input2, symbol, res) => {
      equation= input1 + " " + symbol + " " + input2 + " = " + res;
      setResult(res);
      setEquations([...equations,equation]);
      console.log(equations);
    }
    
    return (
      <View style={styles.wholeScreen}>
        <StatusBar hidden={true} />
        <View style={styles.inputArea}>
          <Text style={styles.titleText} >Result: { result } </Text>
            <TextInput
              style={styles.input}
              keyboardType= 'numeric'
              onChangeText={userInput1}
              value={input1}
            />
            <TextInput 
              style={styles.input}
              keyboardType= 'numeric'
              onChangeText={userInput2}
              value={input2}
            />
        </View>
        <View style={styles.buttonArea}>
          <View style={styles.button}>
            <Button onPress={plusPressed} title=" + " />
          </View>
          <View style={styles.button}>
            <Button onPress={minusPressed} title=" - " />
          </View>
          <View style={styles.buttontwo}>
            <Button onPress={() => navigate('History', {equations})} title="History " />
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    wholeScreen: {
      flex: 1,
      backgroundColor: '#fff'
    },
    inputArea: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    buttonArea: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 20
    },
    button: {
      width: '12%',
      marginLeft: 5
    },
    buttontwo: {
        width: '22%',
        marginLeft: 25
    },
    input: {
      width: 200,
      borderColor: '#663399',
      borderWidth: 1,
      marginTop: 3
    },
    titleText: {
        fontSize: 18,
        color: 'purple',
        fontWeight: 'bold'
      }
  });
  