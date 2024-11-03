import { useNavigation } from '@react-navigation/native';
import { ButtonText, Container, LoginButton, StyledInput, Title } from "./styles";
import { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        console.log('Login pressed', { email, password });
    };

    return (
        <Container>
            <Title>Login</Title>
            <StyledInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={"#fff"}
            />
            <StyledInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={"#fff"}
            />
            <LoginButton onPress={handleLogin}>
                <ButtonText>Log In</ButtonText>
            </LoginButton>
        </Container>
    );
}