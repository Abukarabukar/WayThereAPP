import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [selectedCard, setSelectedCard] = useState(null); // Add this line


  const handleSignup = () => {
    if (!email || !password || !username) {
      setError('Please fill in all fields');
    } else {
      setError('');
      console.log('Sign up successful');
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
        <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
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
