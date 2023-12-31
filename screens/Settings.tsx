/*
import React , { useState }  from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

const Settings = () => {
   const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
      try {
        setIsLoading(true);

       //performing API call here
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Assuming the API call was successful
        Alert.alert('Logout Successful');
      } catch (error) {
        console.error('Logout failed:', error.message);
        Alert.alert('Logout Failed');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          disabled={isLoading}
        >
          <Text style={styles.logoutButtonText}>
            {isLoading ? 'Logging Out...' : 'Logout'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    logoutButton: {
      width: '100%',
         padding: 10,
         marginBottom: 10,
         borderWidth: 2,
         borderColor: '#C9A0A0',
         backgroundColor: '#F3E9E9',
         alignItems:'center',
    },
    logoutButtonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default Settings;
*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Settings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      await auth().signOut(); // Sign out the user

      // Assuming the sign-out was successful
      Alert.alert('Logout Successful');

      // Navigate to the login page after successful logout
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed:', error.message);
      Alert.alert('Logout Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        disabled={isLoading}
      >
        <Text style={styles.logoutButtonText}>
          {isLoading ? 'Logging Out...' : 'Logout'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoutButton: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#C9A0A0',
    backgroundColor: '#F3E9E9',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Settings;
