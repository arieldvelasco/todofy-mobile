import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Auth = ({ setUser }) => {
    return (
        <View>
            <Text>Auth</Text>
            <Button title='Sign In' onPress={ () => setUser('User') } />
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({})