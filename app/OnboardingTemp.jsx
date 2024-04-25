import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';

const OnboardingScreen = () => {
  const router = useRouter();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleSearchBarPress = () => {
    // Logic to execute when search bar is pressed
  };

  const handleSearch = () => {
    router.push('/Search');
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
        <TouchableOpacity onPress={handleSearchBarPress}>
          <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Email"
              onChangeText={(text) => console.log(text)}
            />
          </View>
        </TouchableOpacity>

        {/* Other search boxes */}

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

        {/* Your red empty box */}
       

        <TouchableOpacity onPress={handleSearchBarPress}>
          <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Name"
              onChangeText={(text) => console.log(text)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSearchBarPress}>
          <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Surname"
              onChangeText={(text) => console.log(text)}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSearchBarPress}>
          <View style={[styles.searchBox, selectedCard === 2 && styles.selectedSearchBox]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Phone Number"
              onChangeText={(text) => console.log(text)}
            />
          </View>
        </TouchableOpacity>

        {/* Search button */}
        <TouchableOpacity onPress={handleSearch}>
          <Button
            title="Sign Up"
            buttonStyle={styles.button}
            onPress={handleSearch}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBoxContainer: {
    alignItems: 'center',
    marginTop: 10, // Top margin
    marginRight: 20, // Right margin
    marginBottom: 50, // Increased bottom margin to move the button down
    marginLeft: 20, // Left margin
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
    borderWidth: 0, // Remove border
    borderRadius: 25, // Maintain the same border radius as search boxes
  },
  searchIcon: {
    width: 180, // Adjust according to your image size
    height: 100, // Adjust according to your image size
    marginBottom: 60, // Adjust the margin between the image and the bottom of the red box
    marginRight: 100,
    left: 130,
    resizeMode: 'contain',
  },

  imageText: {
    textAlign: 'center', // Align text to the center
    fontSize: 25, // Adjust the font size as needed
    marginTop: -50,
    fontWeight: 'bold',
    left: -105,
    marginBottom: -100,
  },

  imageText1: {
    textAlign: 'center', // Align text to the center
    fontSize: 13, // Adjust the font size as needed
    marginTop: -50,
    left: -220,
    marginBottom: -170,
  },
  
  imageText2: {
    textAlign: 'center', // Align text to the center
    fontSize: 13, // Adjust the font size as needed
    marginTop: -50,
    left: -342,
    marginBottom: -220,
  },
});
