import { ActivityIndicator, View } from "react-native";
import { Container, LoadingIndicator } from "./style";

export function Loading(){
    return(
        <Container>
            <LoadingIndicator color="red" size='large' />
        </Container>
    )
}