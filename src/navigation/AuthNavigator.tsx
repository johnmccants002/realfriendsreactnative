import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import { UserProps } from '../../constants/Types'
import Authentication from '../screens/Authentication'
import Register from '../screens/Register'

type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    user: UserProps;
}

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {

    return (

        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Authentication} />
            <Stack.Screen name="Register" component={Register} />

      
        </Stack.Navigator>
    )
}

export default AuthNavigator