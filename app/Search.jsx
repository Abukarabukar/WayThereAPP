import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const Card = ({ onPress, selected, criteria }) => {
  const getImageSource = () => {
    switch(criteria) {
      case "1. Available Rides":
        return require('../assets/map.png');
      case "2. Driver":
        return require('../assets/car.png');
      case "3. Price Details":
        return require('../assets/person.png');
      case "4. Chat Feature":
        return require('../assets/car.png');
      case "5. Traffic Info":
        return require('../assets/car.png');
      case "6. Weather Conditions":
        return require('../assets/car.png');
      case "7. Favorite Routes":
        return require('../assets/car.png');
      case "8. Recent Searches":
        return require('../assets/car.png');
      default:
        return require('../assets/dollar-sign.png');
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.highlightedCard]}>
      <View style={styles.content}>
        <Image
          source={getImageSource()}
          style={styles.icon}
        />
        <Text style={styles.text}>{criteria}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Search = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    // Add routing logic or other effects here if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => console.log(text)} // You can add logic here to handle input
        />
      </View>
      <Text style={styles.questionText}>Available Rides</Text>
      <View style={styles.cardsContainer}>
        {["1. Available Rides", "2. Driver", "3. Price Details", "4. Chat Feature", "5. Traffic Info", "6. Weather Conditions", "7. Favorite Routes", "8. Recent Searches"].map((criteria, index) => (
          <Card
            key={index}
            onPress={() => handleCardClick(index + 1)}
            selected={selectedCard === index + 1}
            criteria={criteria}
          />
        ))}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBox: {
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    width: '100%',
  },
  cardsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  highlightedCard: {
    backgroundColor: '#f0f0f0',
  },
});
