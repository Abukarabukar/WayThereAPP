import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { Image } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // State for password confirmation
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !username || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) { // Check if passwords match
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        email,
        password,
        username
      });
      console.log('Sign up successful', response.data);
      setError('');
      // Optionally redirect user or clear form
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error('Sign up error:', error.response || error.message);
    }
  };

  return (
    <View style={styles.container}>
       <View style={[styles.searchBox, { backgroundColor: '#85d8ea', width: 500, height: 250, marginBottom: 30 }]}>
        <Image source={require('../assets/car.png')} style={styles.searchIcon} />
        <Text style={styles.imageText}>WayThere</Text>
        <Text style={styles.imageText1}>Join today to unlock</Text>
        <Text style={styles.imageText2}>100+ travels everyday!</Text>
      </View>
      <View style={styles.searchBoxContainer}>
        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

      

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            placeholder="Confirm Password" // Added confirmation input
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={handleSignup}>
          <Button
            title="Sign Up"
            buttonStyle={styles.button}
            onPress={handleSignup}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

// Styles remain unchanged


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBoxContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
    marginBottom: 50,
    marginLeft: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  selectedSearchBox: {
    borderColor: 'blue',
    backgroundColor: '#ffffff',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    width: 270,
    height: 50,
    borderWidth: 0,
    borderRadius: 25,
  },
  searchIcon: {
    width: 180,
    height: 100,
    marginBottom: 60,
    marginRight: 100,
    left: 130,
    resizeMode: 'contain',
  },
  imageText: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: -50,
    fontWeight: 'bold',
    left: -105,
    marginBottom: -100,
  },
  imageText1: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: -50,
    left: -220,
    marginBottom: -170,
  },
  imageText2: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: -50,
    left: -342,
    marginBottom: -220,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});