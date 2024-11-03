import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History } from '@components/History';
import { Settings } from '@components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

export function Profile({ route }) {
    const { username } = route.params;
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Settings" 
                options={{
                    tabBarLabel: 'Configurações', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" color={color} size={size} />
                    ),
                }}
            >
                {() => <Settings username={username} />}
            </Tab.Screen>
            <Tab.Screen 
                name="History" 
                options={{
                    tabBarLabel: 'Histórico', 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" color={color} size={size} />
                    ),
                }} 
                component={History} 
            />
        </Tab.Navigator>
    );
}