import styled from "styled-components/native"
import { Pressable, Text, Image, ImageProps } from "react-native"


type ButtonProps = {
    title: string;
    onPress: () => void;
    image?: any;
    textAligh?: 'default' | 'center';
}

export const ButtonComponent = ({ onPress, title, image, textAligh = 'default' }: ButtonProps) => {
    return (
        <ButtonStyled onPress={onPress} textAligh={textAligh} >
            <TextStyled>{title}</TextStyled>
            {image}
        </ButtonStyled>
    )
}

const TextStyled = styled(Text)`
font-size: 16px;
font-weight: bold;
color: #fff;
`;

type ButtonWithImageProps = Pick<ButtonProps, 'image' | 'textAligh'>

const ButtonStyled = styled(Pressable) <ButtonWithImageProps>`
    display: flex;
    flex-direction: row;
    align-items: ${({ image, textAligh }) => textAligh === 'center' ? 'center' : image ? 'flex-start' : 'center'};
    justify-content:  ${({ image, textAligh }) => textAligh === 'center' ? 'center' : 'space-between'};
    padding-left: 24px;
    padding-right: 16px;

    background-color: #53BDBD;
    border-radius: 8px;

    height: 52px;
    width: 90%;
    gap: 16px;

`;
