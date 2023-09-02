import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonComponent } from './src/components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from './src/components/Input';
import { ThemeProvider } from 'styled-components/native';
import ThemeDefault, { ThemeProps } from './src/styles/themes/default';
import { ScreenQuestions } from './src/pages/ScreenQuestions';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/context/LoginContext';


export default function App() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')


  return (
    <NavigationContainer>
      {/* //@ts-ignore */}
      <AuthProvider>
        <Routes />

      </AuthProvider>
    </NavigationContainer>
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

