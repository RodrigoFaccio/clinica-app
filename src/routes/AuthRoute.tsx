import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { Login } from '../pages/Login';
import { SearchPatients } from '../pages/SearchPatients';
import ThemeDefault from '../styles/themes/default';
import { ScreenQuestions } from '../pages/ScreenQuestions';
import { Menu } from '../pages/Menu';
import { MenuOptions } from '../pages/MenuOptions';
import { ScreenFilesPatients } from '../pages/ScreenFilesPatients';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        headerTitle: () => (
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: 150, height: 40, resizeMode: 'contain' }}
          />
        ),
        headerTintColor: ThemeDefault.colors.primary,
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: 'white' },
        
      }}
    >
      <Stack.Screen name="SearchPatients" component={SearchPatients} />
      <Stack.Screen name="ScreenQuestions" component={ScreenQuestions} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="MenuOptions" component={MenuOptions} />
      <Stack.Screen name="FilesPatients" component={ScreenFilesPatients} />




    </Stack.Navigator>
  );
};

export default AuthRoutes;
