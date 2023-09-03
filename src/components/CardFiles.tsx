import styled from "styled-components/native"
import { Pressable, Text, Image, ImageProps, TouchableOpacity, View } from "react-native"
import ThemeDefault from "../styles/themes/default";
import { format } from 'date-fns';
import { useState } from "react";


type ButtonProps = {
    title: string;
    onPress: () => void;
    image?: any;
    textAlign?: 'default' | 'center';
    size?:string
    date?:any

}

export const  CardFiles= ({ onPress, date,title, image, textAlign = 'default' , size='100%' }: ButtonProps) => {
    
    function formatarData(dataString:any) {
        try {
          // Divide a data em partes
          const partes = dataString.split('T');
          
          // Divide a parte da data em partes adicionais
          const data = partes[0].split('-');
          
          // Divide a parte da hora em partes adicionais
          const hora = partes[1].split('.')[0];
          
          // Formata a data e hora
          const dataFormatada = `${data[2]}/${data[1]}/${data[0]}`;
          
          return dataFormatada;
        } catch (error) {
          console.error('Erro ao formatar a data:', error);
          return null; // Retorna null em caso de erro
        }
      }
      
      const dateFormated = formatarData(date)

    return (
        <ButtonStyled size={size} onPress={onPress} textAlign={textAlign} >
           <ViewContent>
            <TextStyled>{title}</TextStyled>
                <Date>{dateFormated}</Date>
           </ViewContent>

            {image}
        </ButtonStyled>
    )
}

const TextStyled = styled(Text)`
font-size: 24px;
font-weight: bold;
color: #fff;
`;
const Date = styled(Text)`
font-size: 18px;
font-weight: bold;
color: #fff;
`;
const ViewContent = styled(View)`
font-size: 18px;
font-weight: bold;
color: #fff;
`;


type ButtonWithImageProps = Pick<ButtonProps, 'image' | 'textAlign' | 'size'>

const ButtonStyled = styled(TouchableOpacity) <ButtonWithImageProps>`
    display: flex;
    flex-direction: row;
    align-items: ${({ image, textAlign }) => textAlign === 'center' ? 'center' : image ? 'flex-start' : 'center'};
    justify-content:  ${({ image, textAlign }) => textAlign === 'center' ? 'center' : 'space-between'};
    padding-left: 24px;
    padding-right: 16px;

    background-color: ${ThemeDefault.colors.primary } ;
    border-radius: 8px;

    height: 70px;
    width: ${({ size }) => size};
    gap: 16px;

`;
