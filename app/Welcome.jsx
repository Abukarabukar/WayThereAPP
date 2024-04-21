import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
          <Image source={primaryImage} style={styles.image} />
        </TouchableOpacity>
        {/* Local Secondary Image - Set explicit dimensions for icon size */}
        <Image
          source={require('../assets/car-icon-png-4272.png')}
          style={[styles.icon, styles.iconPosition]} // Apply both icon and position styles
        />
      </View>
      {/* Main descriptive text */}
      <Text style={styles.text}>{text}</Text>
      {/* Additional static text */}
      <Text style={styles.additionalText}>Explore 1000+ routes</Text>
    </View>
  );
};

// Default properties for the component
RootLayout.defaultProps = {
  primaryImage: { uri: 'https://assets.api.uizard.io/api/cdn/stream/2c826cd4-ba86-43f9-814a-f1e523881b5f.png' },
  text1: 'Find a Ride',
  text: 'Book rides in seconds',
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
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconPosition: {
    position: 'absolute',
    bottom: -250,
    left: 270,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  additionalText: {
    fontSize: 16,
  },
  text1: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text1Position: {
    position: 'absolute',
    bottom: 570,
    left: 85,
  },
});

export default RootLayout;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const RootLayout = () => {
//   return (
//     <View style={styles.container}>
//       <Text>RootLayout</Text>
//     </View>
//   )
// }

// export default RootLayout

// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })