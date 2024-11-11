import { StyleSheet,  View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const SignIn = ({ setUser, setSignIn }) => {
    return (
        <View >
            <Button title='Sign In' onPress={ () => setUser('SignedIn') } />
            <View style={ styles.auth_sign } >
                <Text>don&apos;t have an account?</Text>
                <Pressable onPress={ () => setSignIn(false) }>
                    <Text style={ styles.auth_change_mode } >Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    auth_sign: {
        flexDirection: 'row',
        marginBottom: 10
    },
    auth_change_mode: {
        color: '#5609a3',
        marginStart: 3
    }
})