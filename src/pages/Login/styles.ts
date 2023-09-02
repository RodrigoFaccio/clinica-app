import styled from 'styled-components/native';
import ThemeDefault from '../../styles/themes/default';

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 20px;
  background-color:${ThemeDefault.colors.white}
`;
export const Image = styled.Image`
  width: 90%;
  height: 100px;
`;
