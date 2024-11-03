import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ThemeProvider } from 'styled-components/native';
import theme from "@theme/index";
import { Loading } from '@components/Loading';
import { Login } from '@screens/Login';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar

        backgroundColor="transparent"
        translucent
      /> 
      {fontsLoaded ? <Login/> : <Loading />}
    </ThemeProvider>
  );
}