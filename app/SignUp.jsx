import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SignupScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !username || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://192.168.3.37:8080/api/register', {
        email,
        password,
        login: username  // Change the key to 'login'
      });
  
      console.log('Sign up successful', response.data);
  
      setError('');

      // Navigate to the login screen after successful sign up
      navigation.navigate('LogIn');
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error('Sign up error:', error);
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
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
        </View>

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <View style={[styles.searchBox, {marginBottom: 20}]}>
          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
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
