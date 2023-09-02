import styled from "styled-components/native"
import { Pressable, Text, Image, ImageProps, TouchableOpacity, ActivityIndicator } from "react-native"
import ThemeDefault from "../styles/themes/default";



export const Loading = () => {
    return (
        <View>
             <ActivityIndicator size="large" color={ThemeDefault.colors.primary} />
        </View>
    )
}




const View = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;

`;
