
import { useCallback, useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import * as S from './styles'
import { ButtonComponent } from '../../components/Button'
import logo from '../../../assets/logo.png'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import axios from 'axios'
import RNPickerSelect from 'react-native-picker-select';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { api } from '../../utils/api'
import { Select } from '../../components/Select'
import AsyncStorage from '@react-native-async-storage/async-storage'
interface IMenuCard {
    id: number;
    categoryId: number;
    question: string;
    type: string;
    category: {
        id: number;
        name: string;
        sectorId: number
    }
}




export const ScreenQuestions = () => {
    const [data, setData] = useState<IMenuCard[]>([])
    const [text, setText] = useState('')
    const [dateFiles, setDateFiles] = useState<any>()
    const [retur, setRetur] = useState<any>()
    const route = useRoute();


    // console.log('DATE', dateFiles)

    const navigation = useNavigation()
    const [dynamicStates, setDynamicStates] = useState<any[]>([]);
    // console.log(
    //     {
    //         [data[0]?.category.name]: dynamicStates
    //     }
    // )
    useFocusEffect(
        useCallback(() => {
            const getMenu = async () => {
                try {
                    const storedAnswers: any = await AsyncStorage.getItem('answers');
                    const dataAnswers = JSON.parse(storedAnswers);
                    console.log('Stored Answers:', dataAnswers);

                    //@ts-ignore
                    const { data } = await api.get(`/questions/${route.params.questionId}`);
                    setData(data.data);

                    const initialValues = data.data.map((item: IMenuCard) => {
                        console.log('item', item)
                        const storedAnswer = dataAnswers?.data?.Naturalistico?.find((storedItem: any) => storedItem.id === item.id);
                        console.log('teste', storedAnswer)
                        return storedAnswer ? storedAnswer.answers : '';
                    });
                    console.log(initialValues)
                    const newDynamicStates = createDynamicStates(data.data.length, initialValues);
                    setDynamicStates(newDynamicStates);

                    if (storedAnswers) {
                        setDateFiles(JSON.parse(storedAnswers));
                    }
                } catch (error) {
                    console.error('An error occurred:', error);
                }
            };

            getMenu();
        }, [route.params])
    );




    const handleSave = async () => {

        const lastDate = dateFiles

        if (lastDate !== undefined) {
            const dateLastDate = lastDate.data
            const dataSave = {
                "data": {
                    ...dateLastDate,
                    [data[0]?.category.name]: dynamicStates
                }
            }
            AsyncStorage.setItem('answers', JSON.stringify(dataSave));
            //@ts-ignore
            navigation.navigate('Menu', { id: route.params.id })

        } else {
            const dataSave = {
                "data": {
                    [data[0]?.category.name]: dynamicStates
                }
            }
            AsyncStorage.setItem('answers', JSON.stringify(dataSave));
        }
    };

    const updateDynamicState = (index: any, value: any, questionId: any) => {
        const newDynamicStates = [...dynamicStates];
        newDynamicStates[index] = { "id": questionId, "answers": value };
        setDynamicStates(newDynamicStates);
    };

    // Função para criar e configurar estados dinamicamente com base no tamanho do data
    const createDynamicStates = (dataLength: any, initialValues: any[] = []) => {
        console.log('initi', initialValues, dataLength)
        const dynamicStates = [];
        for (let i = 0; i < dataLength; i++) {
            dynamicStates.push(initialValues[i] || '');
        }
        console.log('dynamicStates', dynamicStates)

        return dynamicStates;
    };


    return (

        <S.Container  >
            <S.Title>
                {data[0]?.category.name}
            </S.Title>
            <S.ViewQuestions showsVerticalScrollIndicator={false}>
                {data.length > 0 &&
                    data?.map((item, index) => (
                        <View style={{ width: '100%', marginTop: 20 }} key={item.id}>
                            <S.Questions>{item.question}</S.Questions>
                            {item.type === 'text' && (
                                <Input
                                    widthInput={'100%'}
                                    onChangeText={(e) => updateDynamicState(index, e, item.id)}
                                    value={dynamicStates[index] ?? ''}
                                />
                            )}
                            {item.type === 'select' && <Select />}
                        </View>
                    ))}

            </S.ViewQuestions>
            <View style={{ marginBottom: 50, width: '90%' }}>
                <ButtonComponent onPress={() => { handleSave() }} title='Salvar' textAlign='center' />
            </View>




        </S.Container>
    )
}
