import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import BottomTabNavigator from './BottomTabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>WayThere</Text>
      <StatusBar style="auto" />
      <Link href='/Welcome' style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
