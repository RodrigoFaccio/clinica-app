
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform } from 'react-native'
import axios from 'axios'
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../utils/api'
interface IMenuCard {
    id: number;
    sectorId: number;
    name: string
}
export const SearchPatients = () => {
    const [dataMenu, setDataMenu] = useState<IMenuCard[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {

        const getMenu = async () => {
            const { data } = await api.get('/category/1');
            console.log(data)
            setDataMenu(data.data)

        }
        getMenu()

    }, []);

    return (

        <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Input onChangeText={(e) => setSearch(e)} placeholder='Pacientes...' value={search}
                iconRight={<FontAwesome name="search" size={24} color="#53BDBD" />} />



            {
                dataMenu.length > 0 &&
                dataMenu?.map((item) => (
                    <ButtonComponent key={item.id} onPress={() => { }} title={item.name} textAlign='center' />

                )

                )
            }
        </S.Container>
    )
}
