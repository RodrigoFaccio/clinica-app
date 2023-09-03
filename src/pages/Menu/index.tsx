import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { api } from '../../utils/api';
import * as S from './styles';
import { ButtonComponent } from '../../components/Button';
import { Alert, Platform } from 'react-native';
import { useAuth } from '../../context/LoginContext';

interface IMenuCard {
  id: number;
  sectorId: number;
  name: string;
}

export const Menu = () => {
  const [dataMenu, setDataMenu] = useState<IMenuCard[]>([]);
  const [name, setName] = useState<IMenuCard[]>([]);
  const [dateFiles, setDateFiles] = useState<any>();
  const [reloadData, setReloadData] = useState(false); 
  const { user, login, logout } = useAuth();


  console.log('DATE FILES', JSON.stringify(dateFiles));

  const navigation = useNavigation();
  const route = useRoute();

  // Use o useFocusEffect apenas para atualizar a variável reloadData quando a tela recebe foco
  useFocusEffect(
   useCallback(() => {
    setReloadData((prevReloadData) => !prevReloadData);
    
    const getFilesExist = async()=>{
    //@ts-ignore

      if(route.params.fileId){
    //@ts-ignore
        const response= await api.get(`/answers/${route.params.fileId}`);
        const data = {
          data:response.data
        }
        AsyncStorage.setItem('answers', JSON.stringify(data));
        setDateFiles(data)

      }
    }
    getFilesExist()
    }, [])
  );

  useEffect(() => {
    const getMenu = async () => {
   //AsyncStorage.removeItem('answers');

      const { data } = await api.get('/category/1');
      setDataMenu(data.data);
      const storedAnswers = await AsyncStorage.getItem('answers');
      if (storedAnswers) {
        setDateFiles(JSON.parse(storedAnswers));
      }
    };

    getMenu();
  }, [reloadData]); 

  const handleSubmit = async ()=>{
    //@ts-ignore
    if(user &&route.params.id){
      const response = await api.post('/answers/create',{
        userId:user.id,
        //@ts-ignore
        patientId:route.params.id,
        ...dateFiles
      })

      AsyncStorage.removeItem('answers');
      Alert.alert('Ficha enviada com sucesso ')
    }

      
  }
  //@ts-ignore
console.log(route.params.disable)
  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.TitleName>
        {
          //@ts-ignore
          route.params.name
        }
      </S.TitleName>
      {dataMenu.length > 0 &&
        dataMenu?.map((item) => (
          <ButtonComponent
            size="90%"
            key={item.id}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('ScreenQuestions', { 
              //@ts-ignore

                questionId: item.id,id:route.params.id,disable:route.params.disable });
            }}
            title={item.name}
            textAlign="center"
          />
        ))}
        <ButtonComponent
            size="90%"
           
            onPress={() => {
              handleSubmit();
            }}
            title="Cadastrar"
            textAlign="center"
          />
    </S.Container>
  );
};
