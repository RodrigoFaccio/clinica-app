
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform } from 'react-native'
import axios from 'axios'
import { api } from '../../utils/api'
interface IMenuCard {
    id:number;
    sectorId:number;
    name:string
}
export const Menu = () => {
    const [dataMenu,setDataMenu] = useState<IMenuCard[]>([])
    useEffect(() => {
        
    const getMenu = async()=>{
        const {data}  = await api.get('/category/1');
        console.log(data)
        setDataMenu(data.data)

    }
    getMenu()
       
    }, []);
   
    return (
        
        <S.Container  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {
                dataMenu.length>0&&
                dataMenu?.map((item)=>(
                    <ButtonComponent key={item.id} onPress={() => { }} title={item.name} textAlign='center' />

                )

                )
            }
        </S.Container>
    )
}
