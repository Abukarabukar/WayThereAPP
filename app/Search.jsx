import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const Card = ({ onPress, selected, criteria }) => {
  const getImageSource = () => {
    switch(criteria) {
      case "1. Share ride":
        return require('../assets/car.png');
      case "2. Pricing details":
        return require('../assets/price.png');
      case "3. Route Visualization":
        return require('../assets/map.png');
      case "4. Driver-assenger chat":
        return require('../assets/chat.png');
      case "5. Specific route search":
        return require('../assets/route.png');
      case "6. Driver information":
        return require('../assets/person.png');
      case "7. Payment details":
        return require('../assets/payment.png');
      case "8. Driver's location":
        return require('../assets/driverlocation.png');
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
        <Image source={require('../assets/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => console.log(text)} // You can add logic here to handle input
        />
        <Image source={require('../assets/options.png')} style={styles.optionsIcon} />
      </View>
      <Text style={styles.questionText}>Available Rides</Text>
      <View style={styles.cardsContainer}>
      {["1. Share ride", "2. Pricing details", "3. Route Visualization", "4. Driver-assenger chat", "5. Specific route search", "6. Driver information", "7. Payment details", "8. Driver's location"].map((criteria, index) => (
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  optionsIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
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
