import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import SalonNavigation from './SalonNavigation';
import UserNavigation from './UserNavigation';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
const WhoAreYou = () => {
  const navigation = useNavigation();

  const handleSalonPress = () => {
    console.log('Navigate to Salon page');
    //navigation.navigate('mainSalon');
   // navigation.navigate('SignUp');
        navigation.navigate('SignUp', { role: 'salon' });

  };

  const handleClientPress = () => {
    console.log('Navigate to Client page');
        //navigation.navigate('main');
          //  navigation.navigate('SignUp');
               navigation.navigate('SignUp', { role: 'client' });



  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register As</Text>

      <View style={styles.rowContainer}>
        <Image source={require('../images/makeupartist_logo.png')} style={styles.buttonImage} />

        <TouchableOpacity style={styles.button} onPress={handleSalonPress}>
          <Text style={styles.buttonText}>Salon/Makeup Artist</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <Image source={require('../images/user_logo.png')} style={styles.buttonImage} />

        <TouchableOpacity style={styles.button} onPress={handleClientPress}>
          <Text style={[styles.buttonText, { textAlign: 'center' }]}>Client</Text>
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
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c9a0a0',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    marginLeft: '2%', // Updated
    marginRight: '2%', // Updated
    height: 80,
    width: 250,
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
  buttonImage: {
    width: 140,
    height: 140,
    marginRight: '1%', // Updated
    borderRadius: 80,
    marginLeft: '2%', // Updated
    borderColor: '#c9a0a0',
    borderWidth: 4,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    marginBottom: 30,
    marginLeft: '4%',
    marginRight: '1%',
    color: 'black',
  },
});

export default WhoAreYou;
