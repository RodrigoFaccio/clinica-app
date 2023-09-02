
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform } from 'react-native'
import axios from 'axios'
import { api } from '../../utils/api'
import { useRoute,useNavigation } from '@react-navigation/native';

interface IMenuCard {
    id:number;
    sectorId:number;
    name:string
}

export const Menu = () => {
    const [dataMenu,setDataMenu] = useState<IMenuCard[]>([])
    const [name,setName] = useState<IMenuCard[]>([])
const navigation =  useNavigation()
    const route = useRoute();
    
    useEffect(() => {
        
    const getMenu = async()=>{
        const {data}  = await api.get('/category/1');
        setDataMenu(data.data)

    }
    getMenu()
       
    }, []);
   
    return (
        
        <S.Container  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.TitleName>
           {
             //@ts-ignore
            route.params.name
           
           }
        </S.TitleName>
            {
                dataMenu.length>0&&
                dataMenu?.map((item)=>(
                    <ButtonComponent size='90%' key={item.id} onPress={() => {
                        //@ts-ignore
                        navigation.navigate('ScreenQuestions',{questionId:item.id}) }} title={item.name} textAlign='center'  />

                )

                )
            }
        </S.Container>
    )
}
