
import { useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform } from 'react-native'

export const Login = () => {
    const [text, setText] = useState('')
  const [password, setPassword] = useState('')
    return (
        
        <S.Container  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <S.Image source={logo}/>
                <Input onChangeText={(e) => setText(e)} placeholder='Usuário' value={text} />
            <Input onChangeText={(e) => setPassword(e)} placeholder='Senha' value={password} secureTextEntry/>
            <ButtonComponent onPress={() => { }} title='Entrar' textAlign='center' />
        </S.Container>
    )
}
