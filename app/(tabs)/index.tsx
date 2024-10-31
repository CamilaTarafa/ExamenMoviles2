import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

// Saludo
export default function HomeScreen() {
 
  const [greeting, setGreeting] = useState('¡Hola, escribe una frase!');
  const [frase, setFrase] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [bgColor, setBgColor] = useState('#fff');

  // Contenedor
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
     
      <Text style={[styles.greetingText, { fontSize }]}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu frase"
        value={frase}
        onChangeText={(text) => setFrase(text)}
      />

      <View style={{ marginBottom: 10 }}>
      <Button
        title="Actualizar Frase"
        onPress={() => setGreeting(frase)}
      />
      </View>


      <View style={{ marginBottom: 10 }}>
      <Button
        title="Cambiar Saludo"
        onPress={() => setGreeting('¡Bienvenido! Escribe la frase que más te guste.')}
      />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Coral" onPress={() => setBgColor('coral')} />
        <Button title="Celeste" onPress={() => setBgColor('lightblue')} />
        <Button title="Rosa" onPress={() => setBgColor('pink')} />
      </View>

      <Text>Tamaño del Texto</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={40}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  slider: {
    width: 200,
    height: 40,
  },
});