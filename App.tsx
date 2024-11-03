import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { ThemeProvider } from 'styled-components/native';
import theme from "@theme/index";
import { Loading } from '@components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from '@routes/app.routes';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" translucent />
        <AppRoutes /> 
      </NavigationContainer>
    </ThemeProvider>
  );
}