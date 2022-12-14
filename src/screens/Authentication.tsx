import React, { useEffect, useState } from 'react'
import {TextInput, View, Text, StyleSheet, Button, Pressable} from 'react-native'
import window from '../../constants/Layout'
import { useNavigation } from '@react-navigation/native';
import { Input } from "@rneui/themed";

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const forgotPassword = () => {
        console.log("Forgot Password")
    }

    const signIn = () => {
        console.log("Sign in pressed")

    }

    return (
        <View style={styles.main}>
            <View>
            <Text>
                Real Friends
            </Text>

            </View>
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
            <View style={styles.button}>
            <Button

      
        onPress={forgotPassword}
        title="Login"
        color="blue"
        />

        <View style={styles.spacer}></View>

            <Button
        onPress={forgotPassword}
        title="Forgot Password?"
        color="blue"
        />


            </View>


        <Pressable onPress={() => navigation.navigate('Register' as never, {} as never)}>
            <Text>Don't Have an Account? Sign Up </Text>

        </Pressable>




        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: window.window.width / 1.5
    },
    button: {
        width: window.window.width / 1.5,
        

    },
    main: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightblue",
        height: window.window.height
    },

    spacer: {
        height: 20

    }
  });

export default Authentication