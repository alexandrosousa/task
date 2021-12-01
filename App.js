import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './scrc/pages/Login'
import NewUser from './scrc/pages/NewUser'
import Task from './scrc/pages/Task'
import NewTask from './scrc/pages/NewTask'
import Details from './scrc/pages/Details'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="NewUser"
                    component={NewUser}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Task"
                    component={Task}
                    options={{
                        headerTintColor: '#f92e6a',
                        headerBackVisible: false,
                    }}
                />
                <Stack.Screen
                    name="NewTask"
                    component={NewTask}
                    options={{
                        headerTintColor: '#f92e6a',
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTintColor: '#f92e6a',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
