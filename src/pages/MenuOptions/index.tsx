
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation,useRoute } from '@react-navigation/native';

interface IMenuCard {
    id:number;
    sectorId:number;
    name:string
}
export const MenuOptions = () => {
    const [dataMenu,setDataMenu] = useState<IMenuCard[]>([])
  const navigation = useNavigation();
  const route = useRoute();

   
   
    return (
        
        <S.Container  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
             <S.TitleName>
           {
             //@ts-ignore
            route.params.name
           
           }
        </S.TitleName>
                    <ButtonComponent  onPress={() => {
                        //@ts-ignore
                        navigation.navigate('Menu',{name:route.params.name}) 
                        }} title="Iniciar Ficha" textAlign='center' size='90%'/>
                    <ButtonComponent  onPress={() => { }} title="Consultar fichas" textAlign='center' size='90%' />

        </S.Container>
    )
}
