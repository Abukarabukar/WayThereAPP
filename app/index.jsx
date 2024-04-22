import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Component that displays images and text
const RootLayout = ({ primaryImage, text, text1 }) => {
  const navigation = useNavigation(); // Use useNavigation hook here

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text1, ...styles.text1Position }}>{text1}</Text>
      {/* Container view for image and icon */}
      <View style={styles.imageContainer}>
        {/* Primary Image (could be from a URI or local) */}
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Image source={require('../assets/car.png')} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
        {/* Local Secondary Image - Set explicit dimensions for icon size */}
        <Image
          source={require('../assets/car-icon-png-4272.png')}
          style={[styles.icon, styles.iconPosition]} // Apply both icon and position styles
        />
      </View>
      {/* Main descriptive text as a touchable button */}
     
        <Text style={styles.text}>{text}</Text>
     
      {/* Additional static text */}
      <Text style={styles.additionalText}>Explore 1000+ routes</Text>
    </View>
  );
};

// Default properties for the component
RootLayout.defaultProps = {
  text1: 'Find a Ride',
  text: 'WayThere',
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 250,
    height: 230,
   
   
    
  },
  
  image: {
    width: 400,
    height: 250,
    marginBottom: 10,
    left: -90,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconPosition: {
    position: 'absolute',
    bottom: -290,
    left: 260,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'blue', // Make the button text blue
    textDecorationLine: 'underline', // Add underline style to mimic a link
  },
  additionalText: {
    fontSize: 16,
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
   
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text1Position: {
    position: 'absolute',
    bottom: 570,
    left: 30,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Link href='/Welcome' style={{ color: 'blue' }}></Link>
      <RootLayout />
    </View>
  );
}
