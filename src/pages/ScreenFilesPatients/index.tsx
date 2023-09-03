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
import { CardFiles } from '../../components/CardFiles';

interface PatientsFile {
  id: number;
  userId: number;
  patientId: number;
  created_at: string;
  updated_at: string;
  patient: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
}



export const ScreenFilesPatients = () => {
  const [dataMenu, setDataMenu] = useState<PatientsFile[]>([]);
  const [search, setSearch] = useState<string>('');
  const [includeName, setIncludeName] = useState<string>('');
  const navigation = useNavigation();
  const { user, login, logout } = useAuth();
  //logout()
  console.log(user)
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
console.log(route)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    
    const getMenu = async () => {
      //@ts-ignore
      const { data } = await api.get(`answers/all/${route.params.id}`, {
        params: {
          name: search,
        },
      });
      setDataMenu(data.data);
    };
    getMenu();
  }, [search]);

  

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
              <CardFiles
              size='90%'
              date={item.created_at}
              //@ts-ignore
                onPress={() => {navigation.navigate('Menu',{name:item.patient.name,id:item.patient.id,fileId:item.id,disable:false})}}
                title={item?.patient?.name}
                textAlign='default'
                image={<MaterialIcons name='arrow-forward-ios' size={24} color={ThemeDefault.colors.white} />}
              />
            </View>
          ))
        ) : (
          <>
           
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