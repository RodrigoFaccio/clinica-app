import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { Login } from '../pages/Login';
import { SearchPatients } from '../pages/SearchPatients';
import ThemeDefault from '../styles/themes/default';
import { ScreenQuestions } from '../pages/ScreenQuestions';
import { Menu } from '../pages/Menu';
import { MenuOptions } from '../pages/MenuOptions';
import { useAuth } from '../context/LoginContext';
import NotAuthRoutes from './NotAuthRoute';
import AuthRoutes from './AuthRoute';

const Stack = createStackNavigator();

const Routes = () => {
const { user, login, logout } = useAuth();

  return (
   <>
    {
      user?(
        <AuthRoutes/>
      ):(
        <NotAuthRoutes/>
      )
    }
   </>
  );
};

export default Routes;
