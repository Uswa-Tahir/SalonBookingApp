import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/salon_a.png')} style={styles.image} />
      <Text style={styles.title}>BeautifyMe</Text>
      <Text style={styles.subtitle}>Your One-Stop Destination for Effortless Salon Bookings and Unforgettable Pampering Experiences!</Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'black',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    marginLeft:5,
    marginRight:5,
  },
  getStartedButton: {
    backgroundColor: '#C9A0A0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStarted;
