import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

const LogIn = () => {
  const router = useRouter();
  const navigation = useNavigation(); 

  const [selectedCard, setSelectedCard] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  const handleSearchBarPress = () => {
    // Logic to execute when search bar is pressed
  };

  const handleSearch = () => {
    router.push('/Search'); // Navigate to the Search screen
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <ImageBackground source={require('../assets/roadBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome back!</Text>

        <View style={styles.searchBoxContainer}>
          {/* Email TextInput */}
          <TouchableOpacity onPress={handleSearchBarPress}>
            <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
              <TextInput
                style={styles.searchInput}
                placeholder="Email"
                onChangeText={(text) => console.log(text)}
              />
            </View>
          </TouchableOpacity>

          {/* Password TextInput */}
          <TouchableOpacity onPress={handleSearchBarPress}>
            <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
              <TextInput
                secureTextEntry={true}
                style={styles.searchInput}
                placeholder="Password"
                onChangeText={(text) => console.log(text)}
              />
            </View>
          </TouchableOpacity>

        

          {/* Search button */}
          <TouchableOpacity onPress={handleSearch}>
            <Button
              title="Log In"
              buttonStyle={styles.button}
              onPress={handleSearch}
            />
          </TouchableOpacity>
          <Text style={styles.restPasswordText}>Reset Password</Text>
          <Text style={styles.newHereText}>New here?</Text>
          <Text style={[styles.joinUsText, {  fontWeight: 'bold', fontSize: 16,  left: 110,  }]} onPress={() => navigation.navigate('SignUp')}>Join us now</Text>
        </View>

          {/* Remember Me Checkbox */}
          <TouchableOpacity onPress={handleCheckboxClick}>
            <View style={{top: -90, left: -100, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                backgroundColor: isChecked ? 'blue' : 'white',
              }}>
                {isChecked && <Text style={{ color: 'white'}}>✓</Text>}
              </View>
              <Text style={{ color: 'white'}}>Remember me</Text>
            </View>
          </TouchableOpacity>
          
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
    height: 50,
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
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    top: -20,
  },
  restPasswordText: {
    color: 'white',
    fontSize: 14,
    top: 15,
    left: 110,
  },
  joinUsText: {
    color: 'white',
    fontSize: 20,
    top: 15,
    left: 120,
    fontWeight: 'bold',
  },
  newHereText: {
    color: 'white',
    fontSize: 14,
    top: 34,
    left: 33,
  },
  rememberMeText: {
    color: 'white',
    fontSize: 14,
    top: -40,
    left: -120,
  },
  joinUsText: {
    color: 'white',
    fontSize: 14,
    top: 15,
    left: 105,
   
  },
  button: {
    backgroundColor: '#446879',
    width: 320,
    height: 50,
    borderWidth: 0,
    borderRadius: 25,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
});
