import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import * as S from './styles';
import { ButtonComponent } from '../../components/Button';
import logo from '../../../assets/logo.png';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../utils/api';
import { MaterialIcons } from '@expo/vector-icons';
import emoji from '../../../assets/emoji.png';
import Modal from 'react-native-modal';
import ThemeDefault from '../../styles/themes/default';
import { Loading } from '../../components/Loading';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../context/LoginContext';

interface IMenuCard {
  id: number;
  name: string;
}

export const ScreenFilesPatients = () => {
  const [dataMenu, setDataMenu] = useState<IMenuCard[]>([]);
  const [search, setSearch] = useState<string>('');
  const [includeName, setIncludeName] = useState<string>('');
  const navigation = useNavigation();
  const { user, login, logout } = useAuth();
  //logout()
  console.log(user)
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    
    const getMenu = async () => {
      const { data } = await api.get('/patients', {
        params: {
          name: search,
        },
      });
      setDataMenu(data.data);
    };
    getMenu();
  }, [search]);

  const handleRegisterPatients = async () => {
    const { data } = await api.post('/patients/create', {
        name:includeName
    });
    setSearch('')
    setModalVisible(false)
    setIncludeName('')
  };
  if(dataMenu.length<=0 && search===''){
    return <Loading/>
  }

  return (
    <>
      <S.ViewTitle>
        <S.Title>{
          //@ts-ignore
          route.params.name
          }</S.Title>
        
      </S.ViewTitle>
      <ScrollView          
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', marginLeft: '5%', }}>
        {dataMenu.length > 0 ? (
          dataMenu?.map((item) => (
            <View key={item.id} style={{ marginTop: 20 }}>
              <ButtonComponent
              size='90%'
              //@ts-ignore
                onPress={() => {navigation.navigate('MenuOptions',{name:item.name,id:item.id})}}
                title={item.name}
                textAlign='default'
                image={<MaterialIcons name='arrow-forward-ios' size={24} color={ThemeDefault.colors.white} />}
              />
            </View>
          ))
        ) : (
          <>
            <S.NoResults>
              <S.Emoji source={emoji} />
              <S.NoResultText>Paciente não encontrado</S.NoResultText>
            </S.NoResults>
            <ButtonComponent size='90%' onPress={() => {setModalVisible(true)}} title='Cadastrar paciente' textAlign='center' />
            <View>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Cadastrar paciente</Text>
                        <Input
                        widthInput={'90%'}
                        onChangeText={(e) => setIncludeName(e)}
                        placeholder='Nome'
                        value={includeName}
                        iconRight={<FontAwesome name='search' size={24} color={ThemeDefault.colors.primary }  />}
                        />
                    <ButtonComponent size='90%' onPress={handleRegisterPatients} title='Cadastrar' textAlign='center' />
                    </View>
                </Modal>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
    modalContent: {
      width:'100%',
      backgroundColor: ThemeDefault.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius:8,
      gap:20,
    },
    modalText: {
      textAlign: 'center',
      fontSize: 22,
      marginBottom: 20,
      color:ThemeDefault.colors.primary ,
      fontWeight:'bold'
    },
  });