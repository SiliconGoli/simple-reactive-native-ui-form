
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginForm() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Replace 'your-authentication-endpoint' with your actual authentication endpoint
        axios
            .post('https://shababe.pythonanywhere.com/api/authentication/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                // Successful authentication
                alert(`Refresh Token: ${response.data['refresh_token']}`);
                // You can also navigate to another screen upon successful login
            })
            .catch((error) => {
                // Authentication failed
                alert('Login failed. Please check your credentials.');
                console.error('Error:', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setemail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
});