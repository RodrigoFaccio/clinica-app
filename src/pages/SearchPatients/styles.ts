import styled from 'styled-components/native';

<<<<<<< HEAD
export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
=======
export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 20px;
>>>>>>> cb12bbd (new screens)
`;
export const Image = styled.Image`
  width: 90%;
  height: 100px;
`;
export const NoResults = styled.View`
  width: 90%;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
font-size: 26px;
margin-left: -5%;
font-weight: bold;
color:#53BDBD;
margin-bottom: 20px;
`;
export const ViewTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items:center;
  margin-top: 100px;
`;
export const NoResultText = styled.Text`
font-weight: bold;
color:#53BDBD;
`;
export const Emoji = styled.Image`
width: 50px;
height: 50px;
`;
