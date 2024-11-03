import React from 'react';
import { Container, Title } from './styles';

type Props  = {
    username:string
}

export function Settings({ username }:Props) {
    return (
        <Container>
            <Title>Configurações de {username}</Title>
        </Container>
    );
}