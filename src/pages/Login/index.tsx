
import { useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/LoginContext'
import { api } from '../../utils/api'

export const Login = () => {
    const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')
  const navigation = useNavigation();
const { user, login, logout } = useAuth();
console.log(user)
const handleLogin = async ()=>{
    try {
        const {data} = await api.post('/user/login',{
            username,
            password
        });

        if(data.code===200){
            console.log(data.data.username)
            const dataLogin = {
                id:data.data.id,
                username:data.data.username
            }
            login(dataLogin)
            
    
        }
    } catch (error) {
        Alert.alert('usuario ou senha incorretos')
        
    }
}
  
    return (
        
        <S.Container  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <S.Image source={logo}/>
                <Input onChangeText={(e) => setUsername(e)} placeholder='Usuário' value={username} />
            <Input onChangeText={(e) => setPassword(e)} placeholder='Senha' value={password} secureTextEntry/>
            {/* @ts-ignore */}
            <ButtonComponent size='90%' onPress={() => handleLogin() }title='Entrar' textAlign='center' />
        </S.Container>
    )
}
