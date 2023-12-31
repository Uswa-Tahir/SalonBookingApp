import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';

const Splash = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('GetStarted');
  };
 useEffect(() => {
    const timeout = setTimeout(goToLogin, 6000); // 10 seconds
    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EAEA',
  },
  logo: {
    width: 500,
    height: 600,
    resizeMode: 'contain',
  },

});

export default Splash;
