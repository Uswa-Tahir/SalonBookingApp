import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';  // Import the hook from React Navigation

const SalonBookings = () => {
 const navigation = useNavigation();  // Initialize the navigation hook

  const handleConfirmedAppointmentsPress = () => {
    console.log('Navigate to Confirmed Appointments page');
    // Use navigation.navigate to go to the Confirmed Appointments page
    navigation.navigate('SalonConfirmedBookings'); // Replace 'ConfirmedAppointments' with the actual route name
  };

  const handleNewAppointmentsPress = () => {
    console.log('Navigate to New Appointments page');
    // Use navigation.navigate to go to the New Appointments page
    navigation.navigate('SalonNewBookings'); // Replace 'NewAppointments' with the actual route name
  };
  return (
    <View style={styles.container}>
      <Header title={'Appointments'} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleConfirmedAppointmentsPress}>
          <Text style={styles.buttonText}>Confirmed Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNewAppointmentsPress}>
          <Text style={styles.buttonText}>New Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your background color
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#c9a0a0', // Set your button background color
    borderColor: 'black', // Set your button border color
    borderWidth: 1,
    borderRadius: 40,
    marginBottom: 30,
    marginLeft: '1%',
    marginRight: '1%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 20,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
      },
    }),
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold', // Set your text color
  },
});

export default SalonBookings;
