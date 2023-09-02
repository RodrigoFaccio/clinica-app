
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';
import { useRoute,useNavigation } from '@react-navigation/native';

import { api } from '../../utils/api'
import { Select } from '../../components/Select'
interface IMenuCard {
    id:number;
    categoryId:number;
    question:string;
    type:string;
    category:{
        id:number;
        name:string;
        sectorId:number
    }
}
export const ScreenQuestions = () => {
    const [data,setData] = useState<IMenuCard[]>([])
    const [text,setText] = useState('')
    const navigation =  useNavigation()
    const route = useRoute();
    useEffect(() => {
    const getMenu = async()=>{
        //@ts-ignore
        const {data}  = await api.get(`/questions/${route.params.questionId}`);
        setData(data.data)

    }
    getMenu()
       
    }, []);
   
    return (
        
        <S.Container  >
            <S.Title>
                {data[0]?.category.name}
            </S.Title>
            <S.ViewQuestions showsVerticalScrollIndicator={false}>
            {
                data.length>0&&
                data?.map((item)=>(
                <View style={{width:'100%',marginTop:20}} key={item.id}>
                    <S.Questions>
                        {item.question}
                    </S.Questions>
                    {
                        item.type ==='text' &&(
                             <Input widthInput={'100%'} onChangeText={(e) => setText(e)} value={text} />

                        )
                    }
                    {
                        item.type==='select' &&(
                                <Select/>


                        )
                    }

                  </View>
                  

                )
                )
            }

            </S.ViewQuestions>
            <View style={{marginBottom:50, width:'90%'}}>
                <ButtonComponent onPress={()=>{}} title='Salvar' textAlign='center'  />
            </View>


            
           
        </S.Container>
    )
}
