import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ user, setUser }) => {
    return (
        <View>
            <Text>Home</Text>
            <Text>{ user }</Text>
            <Button title='Sign Out' onPress={ () => setUser(null) } />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})