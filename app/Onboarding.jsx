import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const OnboardingScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSearchBarPress = () => {
    // Logic to execute when search bar is pressed
  };

  const handleSearch = () => {
     if (selectedCard === 1) {
      router.push('/Search');
    } else {
      setSearchResults([`Search results for criteria ${selectedCard}`]);
    }
  };

  return (
    <View style={styles.container}>
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
  button: {
    backgroundColor: 'blue',
    width: 270,
    height: 50,
    borderWidth: 0, // Remove border
    borderRadius: 25, // Maintain the same border radius as search boxes
  },
  searchButton: {
    justifyContent: 'center', // Center the button vertically within the search box
  },
});
