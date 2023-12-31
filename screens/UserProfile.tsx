import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const UserProfile = () => {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('john123*#');
  const [isEditMode, setIsEditMode] = useState(false); // Track whether the fields are in edit mode
  const navigation = useNavigation();

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Add logic to save updated fields to the database
    // For now, we'll just log the updated values
    console.log('Updated Full Name:', fullName);
    console.log('Updated Email:', email);
    console.log('Updated Contact:', contact);
    console.log('Updated Password:', password);
    Alert.alert('Saved Successfully');
  };

  return (
    <View style={styles.container}>
      <Header title={' Your Profile'} />
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Full Name</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            editable={isEditMode}
            maxLength={30} // Adjust the maxLength as needed
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Email</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            editable={isEditMode}
            maxLength={50} // Adjust the maxLength as needed
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Contact</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={contact}
            onChangeText={(text) => setContact(text)}
            editable={isEditMode}
            keyboardType="numeric"
            maxLength={11} // Adjust the maxLength as needed
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Password</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={password}
            onChangeText={(text) => setPassword(text)}
            editable={isEditMode}
            maxLength={20} // Adjust the maxLength as needed
          />
        </View>

        {isEditMode && (
          <TouchableOpacity style={styles.editSaveBtn} onPress={handleSave}>
            <Text style={styles.editSaveText}>Save</Text>
          </TouchableOpacity>
        )}

        {!isEditMode && (
          <TouchableOpacity style={styles.editSaveBtn} onPress={handleEdit}>
            <Text style={styles.editSaveText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  blackText: {
    color: '#000',
  },
  inputText: {
    fontSize: 18,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  editModeInput: {
    color: '#808080', // Light grey color for placeholder text
  },
  editSaveBtn: {
    width: '40%',
    backgroundColor: '#C9A0A0',
    borderRadius: 30,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  editSaveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default UserProfile;
