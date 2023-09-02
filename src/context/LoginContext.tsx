import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  username: string;
  // Adicione outros campos do usuário, se necessário
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
interface AuthProviderType {
   children :any
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider =  ({children}:AuthProviderType) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verifica o localStorage ao iniciar o aplicativo
    async function loadUserFromLocalStorage() {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    loadUserFromLocalStorage();
  }, []);

  const login = (userData: User) => {
    // Lógica para autenticar o usuário (por exemplo, fazer uma chamada à API)
    setUser(userData);
    // Armazena o usuário no localStorage
    AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Lógica para fazer logout (por exemplo, limpar o usuário da sessão)
    setUser(null);
    // Remove o usuário do localStorage
    AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
