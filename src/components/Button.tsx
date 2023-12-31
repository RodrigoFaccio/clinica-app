import styled from "styled-components/native"
import { Pressable, Text, Image, ImageProps, TouchableOpacity } from "react-native"
import ThemeDefault from "../styles/themes/default";


type ButtonProps = {
    title: string;
    onPress: () => void;
    image?: any;
    textAlign?: 'default' | 'center';
    size?:string
}

export const ButtonComponent = ({ onPress, title, image, textAlign = 'default' , size='100%' }: ButtonProps) => {
    return (
        <ButtonStyled size={size} onPress={onPress} textAlign={textAlign} >
            <TextStyled>{title}</TextStyled>
            {image}
        </ButtonStyled>
    )
}

const TextStyled = styled(Text)`
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

    height: 52px;
    width: ${({ size }) => size};
    gap: 16px;

`;
