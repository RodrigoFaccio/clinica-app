import { KeyboardTypeOptions, View } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";
import ThemeDefault from "../styles/themes/default";

type InputProps = {
    placeholder?: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    iconRight?: any
    widthInput?: any
}

export const Input = ({ placeholder, onChangeText, value, secureTextEntry, keyboardType, iconRight, widthInput }: InputProps) => {
    return (
        <ContainerInput width={widthInput}>
            <InputStyled
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={'rgba(83, 189, 189, 0.6)'}
                keyboardType={keyboardType}
            />
            <IconStyled>{iconRight}</IconStyled>

        </ContainerInput>
    )
}

const InputStyled = styled.TextInput<InputProps['iconRight']>`
    width: 90%;
    padding: 12px 16px;
    font-size: 16px;
    color: rgb(83, 189, 189);
`;

const IconStyled = styled.View`

`;

const ContainerInput = styled.View<InputProps['widthInput']>`
    display: flex;
    flex-direction: row;

    align-items: center;

    height: 56px;
    font-weight: 600;

    border-radius: 8px;
    border: 2px solid ${ThemeDefault.colors.primary } ;

    background-color: #fff;
    padding-right: 16px;

    ${({ widthInput }) => widthInput && `${widthInput}px`}
`;