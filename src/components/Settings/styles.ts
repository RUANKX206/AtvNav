import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    text-align: center
`

export const Title  = styled.Text`
    color: ${({theme})=>theme.COLORS.GRAY_100};
   font-zie:  ${({theme})=>theme.FONT_SIZE.MD}px;
   margin:auto;
` 