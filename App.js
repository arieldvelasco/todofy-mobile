import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Auth from './components/Auth/Auth';
import Home from './components/Home';

export default function App() {

    const [ user, setUser ] = useState(null)

    return (
        <View style={styles.container}>
            { user ? <Home user={ user } setUser={ setUser } /> : <Auth setUser={ setUser } /> }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
