import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from './api.jsx'; // Assuming api.js is in the same directory

const LogIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error messages

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);  // API call
      console.log('Login successful:', response); // Keep this for debugging only
      navigation.navigate('Search'); // Assuming 'Search' is the correct screen after login
    } catch (error) {
      // Handle errors in a user-friendly way
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect username or password. Please try again.'); // Custom error message for 401 errors
      } else {
        setErrorMessage('Unable to login. Please check your network connection and try again.'); // Generic error message for other errors
      }
    }
  };

  return (
    <ImageBackground source={require('../assets/roadBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <Button
            title="Log In"
            buttonStyle={styles.button}
            onPress={handleLogin}
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <Text style={styles.forgotPasswordText}>Reset Password</Text>
          <Text style={styles.newHereText}>New here?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  <Text style={styles.joinUsText}>Join us now</Text>
</TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#446879',
    width: 300,
    height: 50,
    borderRadius: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  newHereText: {
    color: 'white',
    fontSize: 14,
    left: 30,
    top: 19,
    
  },
  joinUsText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    left: 102,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});