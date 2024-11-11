import { StyleSheet,  View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const SignUp = ({ setUser, setSignIn }) => {
    return (
        <View>
            <Button title='Sign Up' onPress={ () => setUser('SignedUp') } />
            <View style={ styles.auth_sign } >
                <Text>Already have an account?</Text>
                <Pressable onPress={ () => setSignIn(true) }>
                    <Text style={ styles.auth_change_mode } >Sign In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp

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