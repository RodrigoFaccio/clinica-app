import styled from 'styled-components/native';
import ThemeDefault from '../../styles/themes/default';

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 20px;
`;
export const Image = styled.Image`
  width: 90%;
  height: 100px;
`;
export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color:${ThemeDefault.colors.primary } ;
  margin-top: 100px;

`;
export const Questions = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:${ThemeDefault.colors.primary } ;
`;
export const ViewQuestions = styled.ScrollView`
  width: 90%;

`;
export const InputSelect = styled.View`
    flex-direction: row;

    height: 52px;
    font-weight: 600;

    border-radius: 8px;
    border: 2px solid ${ThemeDefault.colors.primary } ;

    background-color: #fff;
    padding-right: 16px;
`
