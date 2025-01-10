import React, { useState,} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = width / 4;

export default function Calculator() {
  const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '+/-', '='];
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  function calculadora() {
    const splitNumbers = currentNumber.split(" ");
    const operator = splitNumbers[1];
    if (operator === "*") {
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString());
      return;
    }
    if (operator === "/") {
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString());
      return;
    }
    if (operator === "+") {
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString());
      return;
    }
    if (operator === "-") {
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString());
      return;
    }
  }

  function handleInput(buttonPressed: string) {
    if (buttonPressed === "*" || buttonPressed === "/" || buttonPressed === "+" || buttonPressed === "-") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }
    if (buttonPressed === "DEL") {
      setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
      return;
    }
    if (buttonPressed === ".") {
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    }
    if (buttonPressed === "+/-") {
      return;
    }
    if (buttonPressed === "AC") {
      setLastNumber("");
      setCurrentNumber("");
      return;
    }
    if (buttonPressed === "=") {
      setLastNumber(currentNumber + " = ");
      calculadora();
      return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View>
      <View style={styles.display}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    height: 300,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingEnd: 20,
    paddingVertical: 5,
  },
  historyText: {
    fontSize: 18,
    color: '#7c7c7c',
  },
  resultText: {
    fontSize: 48,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    width: buttonWidth - 10,
    height: buttonWidth + 20,
  },
  textButton: {
    color: '#5b5b5b',
    fontSize: 25,
  },
});
