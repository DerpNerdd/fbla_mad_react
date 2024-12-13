import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" secureTextEntry />
            <Button title="Login" onPress={() => {}} />
        </View>
    );
};

export default LoginScreen;
