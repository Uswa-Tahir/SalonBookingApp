import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      // Show alert if email or password is empty
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const user = res.user;

        // Retrieve the user document from Firestore
        const userDoc = await firestore().collection('users').doc(user.uid).get();

        if (userDoc.exists) {
          const userRole = userDoc.data().role;

          if (userRole === 'client') {
            navigation.navigate('main');
          } else if (userRole === 'salon') {
            navigation.navigate('mainSalon');
          } else {
            // Handle other roles if needed
          }
        } else {
          console.log('User document not found in Firestore.');
        }
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Authentication Failed', 'Email or password is incorrect');
      });

    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
    navigation.navigate('ForgotPassword');
    // Add logic for handling forgot password
  };

  const handleSignUp = () => {
    navigation.navigate('WhoAreYou');
    console.log('Sign Up');
    // Add logic for handling sign up
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/login_logo.png')} style={styles.logo} />
      <Text style={styles.title}>LOGIN</Text>

      {/* Email Input */}
      <Text style={styles.inputHeading}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="abc@gmail.com"
          placeholderTextColor="#808080"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Password Input */}
      <Text style={styles.inputHeading}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="••••••••"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.text}>Forgot password ?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Don't have an account and Sign Up in a single line */}
      <View style={styles.rowContainer}>
        <Text style={styles.text1}>Don't have an account ?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}> Sign Up</Text>
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
    fontSize:20,
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

export default Login;
