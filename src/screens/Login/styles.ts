
import styled, { useTheme } from 'styled-components/native';

 export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  margin-bottom: 32px;
`;

export const StyledInput = styled.TextInput`
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border-radius: 8px;
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-transform: uppercase;
`;
