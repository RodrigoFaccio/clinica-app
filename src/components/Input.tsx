import { KeyboardTypeOptions } from "react-native";
import styled from "styled-components/native";

type InputProps = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    children?:any
}

export const Input = ({ placeholder, onChangeText, value, secureTextEntry, keyboardType,children }: InputProps) => {
    return (
        <InputStyled
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={'rgba(83, 189, 189, 0.6)'}
            keyboardType={keyboardType}
            
        >
            {children}
        </InputStyled>
    )
}

const InputStyled = styled.TextInput`
    background-color: #fff;
    border-radius: 8px;
    font-weight: 600;
    height: 52px;
    width: 90%;
    padding: 12px 16px;
    font-size: 16px;
    color: rgb(83, 189, 189);
    border: 2px solid rgba(83, 189, 189, 0.8);
`;
