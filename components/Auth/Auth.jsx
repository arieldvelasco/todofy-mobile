import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = ({ setUser }) => {

    const [ signIn, setSignIn ] = useState(true)

    return (
        <View style={ styles.auth } >
            <Text style={ styles.auth_header } >Authenticate</Text>
            <TextInput style={ styles.auth_input } placeholder='Username' />
            <TextInput style={ styles.auth_input } placeholder='Password' secureTextEntry={true} />
            { signIn ? <SignIn setUser={ setUser } setSignIn={ setSignIn } /> : <SignUp setUser={ setUser } setSignIn={ setSignIn } /> }
            <View>
                <Text>or Sign In with...</Text>
                <Button title='Google' onPress={ () => setUser('Google') } />
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    auth: {
        flex: 1,
        width: '100%',
        maxWidth: 400,
        justifyContent: 'center',
        padding: 20
    },
    auth_header: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#5609a3'
    },
    auth_input: {
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#5609a3',
        borderRadius: 5
    }
})