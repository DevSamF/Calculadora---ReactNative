import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './components/calculator';
export default function App() {
  const [inputSequence, setInputSequence] = useState('');
  const [showEgg, setShowEgg] = useState(false);

  return (
    <View style={styles.container}>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
});