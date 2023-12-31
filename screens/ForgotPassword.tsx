import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      if (!email) {
        Alert.alert('Email is required');
        return;
      }

      // Send a password reset email
      await auth().sendPasswordResetEmail(email);

      // Assuming the password reset email was sent successfully
      Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');

      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      Alert.alert('Password Reset Failed', 'Please check your email and try again.');
    }
  };

  const handleSendCodeAgain = () => {
    console.log('Send code again clicked');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/forgot_password.png')} style={styles.logo} />
      <Text style={styles.title}>FORGOT PASSWORD</Text>

      <Text style={styles.inputHeading}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your Email here."
          placeholderTextColor="#808080"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
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
     title: {
       color: 'black',
       fontSize: 28,
       fontWeight: 'bold',
       marginBottom: 30,
     },
     text: {
       color: 'black',
       fontSize: 15,
       marginBottom: 20,
       paddingLeft: 170,
     },
     text1: {
       color: 'black',
       fontSize: 15,
       marginTop: 20,
       paddingRight: 10,
     },
     signUpText: {
       color: 'black',
       fontSize: 17,
       fontWeight: 'bold',
       textDecorationLine: 'underline',
       marginTop:17,
     },
     logo: {
       width: 200,
       height: 200,
       marginBottom: 10,
     },
     inputHeading: {
       alignSelf: 'flex-start',
       marginLeft: '10%',
       marginBottom: 5,
       fontSize: 18,
       color: 'black',
       fontWeight: 'bold',
     },
     inputView: {
       width: '80%',
       backgroundColor: '#f2f2f2',
       borderRadius: 10,
       height: 50,
       marginBottom: 20,
       justifyContent: 'center',
       padding: 20,
     },
     inputText: {
       height: 50,
       color: '#000',
       fontSize:18,
     },
     loginBtn: {
       width: '40%',
       backgroundColor: '#C9A0A0',
       borderRadius: 20,
       height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 10,
     },
     loginText: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 22,
     },
     // New styles for the row container
     rowContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: 10,
     },
   });
export default ForgotPassword;
