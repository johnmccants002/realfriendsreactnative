import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Input } from "@rneui/themed";



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordCopy, setPasswordCopy] = useState('')

    return (
        <View>
            <Input
            placeholder="Email"
            autoFocus
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            <Input
            placeholder="Password"
            autoFocus
            value={password}
            onChangeText={(text) => setPassword(text)}
            />

            
        </View>


    )
}

export default Register;