

import { KeyboardTypeOptions, StyleSheet, View,Platform, Text} from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import RNPickerSelect from 'react-native-picker-select';
import { MaterialIcons } from '@expo/vector-icons';


type InputProps = {
    
    widthInput?: any
}
const items = [
    { label: 'Independente', value: 'independent' },
    { label: 'Ajuda Física Parcial', value: 'physical_partial' },
    { label: 'Ajuda Física Total', value: 'physical_total' },
    { label: 'Ajuda Verbal Total', value: 'verbal_total' },
    { label: 'Ajuda Verbal Parcial', value: 'verbal_partial' },
    { label: 'Ajuda Visual Parcial', value: 'visual_partial' },
    { label: 'Ajuda Visual Total', value: 'visual_total' },
    { label: 'Erro', value: 'visual_total' },

  ];
export const Select = ({widthInput }: InputProps) => {
    return (

        <>
        {
            Platform.OS==='android'?(
                <ContainerInput>

       
                <RNPickerSelect
                placeholder={{
                  label: 'Selecione...',
                  value: null,
                  color: '#53BDBD',
                 
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 20,
                    right: 10,
                  },
                  placeholder: {
                    color: '#53BDBD',
                    fontSize: 16,
                    fontWeight: 'bold',
                  },
                }}
                //@ts-ignore
                Icon={() => {
                  return (
                    <View
                      style={{backgroundColor:'white',width:'100%'}}
                    >
                     <MaterialIcons name='arrow-forward-ios' style={{marginTop:-8}}  size={24} color='#53BDBD' />
                    </View>
                  );
                }}
                  onValueChange={(value) => console.log(value)}
                  items={items}
                  />
                  
              </ContainerInput>
            ):(

       
                <RNPickerSelect
                placeholder={{
                  label: 'Selecione...',
                  value: null,
                  color: '#53BDBD',
                 
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 20,
                    right: 10,
                  },
                  placeholder: {
                    color: '#53BDBD',
                    fontSize: 16,
                    fontWeight: 'bold',
                  },
                }}
                //@ts-ignore
                Icon={() => {
                  return (
                    <View
                      style={{justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
                    >
                     <MaterialIcons name='arrow-forward-ios' style={{marginBottom:10}} size={24} color='#53BDBD' />
                    </View>
                  );
                }}
                  onValueChange={(value) => console.log(value)}
                  items={items}
                  />
                   
            )
        }
       
        </>

    )
}




const ContainerInput = styled.View<InputProps['widthInput']>`
   
    border-radius: 8px;
    border: 2px solid #53BDBD;

    background-color: #fff;
    padding-right: 16px;
    height: 56px;

    ${({ widthInput }) => widthInput && `${widthInput}px`}
`;
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 19,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: '#53BDBD',
      borderRadius: 8,
      color: '#53BDBD',
      paddingRight: 30, // to ensure the text is never behind the icon
      width:'100%'
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 19,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: '#53BDBD',
        borderRadius: 8,
        color: '#53BDBD',
        paddingRight: 30, // to ensure the text is never behind the icon
        width:'100%'

    },
  });