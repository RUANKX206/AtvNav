
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '@screens/Login'; 
import { Profile } from '@screens/Profile'; 

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="Login" 
            screenOptions={{ headerShown: false }}
        >
            <Screen
                name="Login" 
                component={Login}
            />
            <Screen
                name="Profile" 
                component={Profile}
            />
        </Navigator>
    );
}