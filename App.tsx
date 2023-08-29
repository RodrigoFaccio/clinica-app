import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonComponent } from './src/components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from './src/components/Input';

export default function App() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text>Forms </Text>
      <View style={{
        marginTop: 16, width: '100%', alignItems: 'center',
        gap: 16
      }}>
        <Input onChangeText={(e) => setText(e)} placeholder='Usuário' value={text} />
        <Input onChangeText={(e) => setPassword(e)} placeholder='Senha' value={password} secureTextEntry keyboardType={'visible-password'} />
        <ButtonComponent onPress={() => { }} title='Entrar' textAligh='default' />
        <ButtonComponent onPress={() => { }} title='Entrar' textAligh='center' />
        <ButtonComponent onPress={() => { }} title='Rodrigo Facio' image={<MaterialIcons name="arrow-forward-ios" size={24} color="white" />} />
        <ButtonComponent onPress={() => { }} title='Rodrigo Facio' image={<MaterialIcons name="arrow-forward-ios" size={24} color="white" />} textAligh='center' />
      </View>
      <StatusBar style="auto" />
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
});

