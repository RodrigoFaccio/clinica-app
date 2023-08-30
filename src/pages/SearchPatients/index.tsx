
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import axios from 'axios'
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../utils/api'
import { MaterialIcons } from '@expo/vector-icons';

interface IMenuCard {
    id:number;
    name:string
}
export const SearchPatients = () => {
    const [dataMenu, setDataMenu] = useState<IMenuCard[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        
    const getMenu = async()=>{
        const {data}  = await api.get('/patients',{
            params:{
                name:search
            }
        });
        setDataMenu(data.data)

    }
    getMenu()
       
    }, [search]);
   
      
   
   
   
    return (
        
            <ScrollView style={{width:'90%',marginLeft:'10%',marginTop:200}}>

                <Input onChangeText={(e) => setSearch(e)} placeholder='Pacientes...' value={search} >
                <FontAwesome name="search" size={24} color="#53BDBD" />
                </Input>
            
            
            
            {
                dataMenu.length>0&&
                dataMenu?.map((item)=>(
                    <View key={item.id} style={{marginTop:20}}>
                        <ButtonComponent  onPress={() => { }} title={item.name} textAlign='default' image={<MaterialIcons name="arrow-forward-ios" size={24} color="white" />}  />
                    </View>
                    

                )

                )
            }
            </ScrollView>

    )
}
