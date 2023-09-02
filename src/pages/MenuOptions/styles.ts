import styled from 'styled-components/native';
import ThemeDefault from '../../styles/themes/default';

export const Container = styled.KeyboardAvoidingView`
  align-items: center;
  flex: 1;
  gap: 20px;
`;
export const Image = styled.Image`
  width: 90%;
  height: 100px;
`;
export const TitleName = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${ThemeDefault.colors.primary};
  margin-top: 180px;
  margin-bottom: 50px;


`;
