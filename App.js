import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[styles.button, btn === '=' && styles.equalButton]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.footer}>Calc by Rohit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: '#f5f5f5' },
  display: { flex: 1, justifyContent: 'center', alignItems: 'flex-end', padding: 20 },
  input: { fontSize: 30, color: '#333' },
  result: { fontSize: 40, color: '#000', marginTop: 10 },
  buttons: { flex: 2, padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
  button: { flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, padding: 20, backgroundColor: '#ddd', borderRadius: 10 },
  buttonText: { fontSize: 20, color: '#333' },
  equalButton: { backgroundColor: 'green' },
  footer: { textAlign: 'center', padding: 10, fontSize: 16, backgroundColor: '#eee' },
});
