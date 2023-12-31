/*
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = ({ route }) => {
  const { role } = route.params;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
  const navigation = useNavigation();

  const signUpTest=()=>
  {
    auth().createUserWithEmailAndPassword(email,password).then(()=>{Alert.alert('user created')})
    .catch((err)=>{console.log(err)})
  };

  const handleFullNameChange = (text) => {
    setFullName(text);
    validateSignUpFields();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateSignUpFields();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateSignUpFields();
  };

  const validateSignUpFields = () => {
    setIsSignUpDisabled(!(fullName.trim() !== '' && email.trim() !== '' && password.trim() !== ''));
  };

  const handleSignUp = () => {
    if (!isSignUpDisabled) {
      console.log('Role:', role); // Access role from props
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
      // Add logic for handling sign up

      // Navigate to the next screen (e.g., WhoAreYou)
      if (role === 'client') {
        navigation.navigate('main');
      } else if (role === 'salon') {
        navigation.navigate('mainSalon');
      }
    }
  };
/*
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../images/signup_logo.png')} style={styles.logo} />
      <Text style={styles.title}>SIGN UP</Text>

      {/*<Text style={styles.inputHeading}>Full Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="John Doe"
          placeholderTextColor="#808080"
          value={fullName}
          onChangeText={handleFullNameChange}
        />
      </View>
*/

 /*     <Text style={styles.inputHeading}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="abc@gmail.com"
          placeholderTextColor="#808080"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>


      <Text style={styles.inputHeading}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="••••••••"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>


      <TouchableOpacity
        style={[styles.signUpBtn, isSignUpDisabled && styles.disabledBtn]}
        onPress={signUpTest}
        disabled={isSignUpDisabled}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  signUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
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
    fontSize: 20,
  },
  signUpBtn: {
    width: '40%',
    backgroundColor: '#C9A0A0',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  disabledBtn: {
    backgroundColor: '#d3d3d3', // Use a different color for the disabled state
  },
});

export default SignUp;
*/
/*

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({ route }) => {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);
  const navigation = useNavigation();
const getData = async () => {
  try {
    const querySnapshot = await firestore().collection('food').get();

    // Check if there are any documents in the collection
    if (querySnapshot.size > 0) {
      // Access the first document's data
      const firstDocumentData = querySnapshot.docs[0].data();
      console.log('First document data:', firstDocumentData);
    } else {
      console.log('No documents found in the "food" collection.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  const handleEmailChange = (text) => {
    setEmail(text);
    validateSignUpFields();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateSignUpFields();
  };

  const validateSignUpFields = () => {
    const isEmailValid = validateEmailFormat(email);
    const isPasswordValid = password.trim().length >= 6;

    setIsSignUpDisabled(!(isEmailValid && isPasswordValid));
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateSignUp = async () => {
    try {
      if (!validateEmailFormat(email)) {
        throw new Error('Invalid Email');
      }

      if (password.trim().length < 6) {
        throw new Error('Invalid Password');
      }

      await auth().createUserWithEmailAndPassword(email, password);

      Alert.alert('User created successfully');

      if (role === 'client') {
        navigation.navigate('main');
      } else if (role === 'salon') {
        navigation.navigate('mainSalon');
      }
    } catch (error) {
      console.log(error);

      if (error.message === 'Invalid Email') {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
      } else if (error.message === 'Invalid Password') {
        Alert.alert('Invalid Password', 'Password must be at least 6 characters.');
      } else if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'The email address is already in use by another account.');
      } else {
        Alert.alert('Error', 'Failed to create user');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../images/signup_logo.png')} style={styles.logo} />
      <Text style={styles.title}>SIGN UP</Text>


      <Text style={styles.inputHeading}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#808080"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>


      <Text style={styles.inputHeading}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter 6 characters."
          placeholderTextColor="#808080"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>


      <TouchableOpacity
        style={[styles.signUpBtn, isSignUpDisabled ]}
        //onPress={validateSignUp}
        onPress={getData}
       // disabled={isSignUpDisabled}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  signUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
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
    fontSize: 20,
  },
  signUpBtn: {
    width: '40%',
    backgroundColor: '#C9A0A0',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  disabledBtn: {
    backgroundColor: '#d3d3d3',
  },
});

export default SignUp;

*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({ route }) => {
  const { role } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [isSignUpDisabled, setIsSignUpDisabled] = useState(true);

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
    validateSignUpFields();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateSignUpFields();
  };

  const validateSignUpFields = () => {
    const isEmailValid = validateEmailFormat(email);
    const isPasswordValid = password.trim().length >= 6;

    // You may want to add more validation rules here if needed

    setIsSignUpDisabled(!(isEmailValid && isPasswordValid));
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateSignUp = async () => {
    try {
      if (!validateEmailFormat(email)) {
        throw new Error('Invalid Email');
      }

      if (password.trim().length < 6) {
        throw new Error('Invalid Password');
      }

      // Create user in Firebase Authentication
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Create user document in Firestore with role
      await firestore().collection('users').doc(user.uid).set({
        email: user.email,
        role: role, // Use the role passed from the sign-up screen
      });

      Alert.alert('User created successfully');

      if (role === 'client') {
        navigation.navigate('main');
      } else if (role === 'salon') {
        navigation.navigate('mainSalon');
      }
    } catch (error) {
      console.log(error);

      let errorMessage = 'Failed to create user';

      if (error.message === 'Invalid Email') {
        errorMessage = 'Please enter a valid email address.';
      } else if (error.message === 'Invalid Password') {
        errorMessage = 'Password must be at least 6 characters.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'The email address is already in use by another account.';
      }

      Alert.alert('Error', errorMessage);
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../images/signup_logo.png')} style={styles.logo} />
        <Text style={styles.title}>SIGN UP</Text>


        <Text style={styles.inputHeading}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="#808080"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>


        <Text style={styles.inputHeading}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter 6 characters."
            placeholderTextColor="#808080"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>


        <TouchableOpacity
          style={[styles.signUpBtn, isSignUpDisabled ]}
          onPress={validateSignUp}
         // disabled={isSignUpDisabled}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
    signUpText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22,
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
      fontSize: 20,
    },
    signUpBtn: {
      width: '40%',
      backgroundColor: '#C9A0A0',
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    disabledBtn: {
      backgroundColor: '#d3d3d3',
    },
  });

  export default SignUp;

