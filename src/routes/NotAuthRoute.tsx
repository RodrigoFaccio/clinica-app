import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { Login } from '../pages/Login';
import { SearchPatients } from '../pages/SearchPatients';
import ThemeDefault from '../styles/themes/default';
import { ScreenQuestions } from '../pages/ScreenQuestions';
import { Menu } from '../pages/Menu';
import { MenuOptions } from '../pages/MenuOptions';

const Stack = createStackNavigator();

const NotAuthRoutes = () => {
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
      <Stack.Screen name="Home" component={Login} />
      



    </Stack.Navigator>
  );
};

export default NotAuthRoutes;
