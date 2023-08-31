import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import * as S from './styles';
import { ButtonComponent } from '../../components/Button';
import logo from '../../../assets/logo.png';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { api } from '../../utils/api';
import { MaterialIcons } from '@expo/vector-icons';
import emoji from '../../../assets/emoji.png';
import Modal from 'react-native-modal';

interface IMenuCard {
  id: number;
  name: string;
}

export const SearchPatients = () => {
  const [dataMenu, setDataMenu] = useState<IMenuCard[]>([]);
  const [search, setSearch] = useState<string>('');
  const [includeName, setIncludeName] = useState<string>('');

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

  return (
    <>
      <S.ViewTitle>
        <S.Title>Buscar paciente</S.Title>
        <Input
          widthInput={'90%'}
          onChangeText={(e) => setSearch(e)}
          placeholder='Pacientes...'
          value={search}
          iconRight={<FontAwesome name='search' size={24} color='#53BDBD' />}
        />
      </S.ViewTitle>
      <ScrollView style={{ width: '100%', marginLeft: '5%' }}>
        {dataMenu.length > 0 ? (
          dataMenu?.map((item) => (
            <View key={item.id} style={{ marginTop: 20 }}>
              <ButtonComponent
                onPress={() => {}}
                title={item.name}
                textAlign='default'
                image={<MaterialIcons name='arrow-forward-ios' size={24} color='white' />}
              />
            </View>
          ))
        ) : (
          <>
            <S.NoResults>
              <S.Emoji source={emoji} />
              <S.NoResultText>Paciente não encontrado</S.NoResultText>
            </S.NoResults>
            <ButtonComponent onPress={() => {setModalVisible(true)}} title='Cadastrar paciente' textAlign='center' />
            <View>
                <Modal isVisible={isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Cadastrar paciente</Text>
                        <Input
                        widthInput={'90%'}
                        onChangeText={(e) => setIncludeName(e)}
                        placeholder='Nome'
                        value={includeName}
                        iconRight={<FontAwesome name='search' size={24} color='#53BDBD' />}
                        />
                    <ButtonComponent onPress={handleRegisterPatients} title='Cadastrar' textAlign='center' />
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
      backgroundColor: 'white',
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
      color:'#53BDBD',
      fontWeight:'bold'
    },
  });