/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const SalonProfile = () => {
  const [salonName, setSalonName] = useState('My Salon');
  const [email, setEmail] = useState('salon@example.com');
  const [password, setPassword] = useState('salon123');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [image, setImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (text, field, maxLength) => {
     if (text.length > maxLength) {
         // If it exceeds, trim the text to the maxLength
         text = text.substring(0, maxLength);
       } else {
      switch (field) {
        case 'salonName':
          setSalonName(text);
          break;
        case 'email':
          setEmail(text);
          break;
        case 'password':
          setPassword(text);
          break;
        case 'contact':
          setContact(text);
          break;
        case 'location':
          setLocation(text);
          break;
        case 'description':
          setDescription(text);
          break;
        case 'instagramLink':
          setInstagramLink(text);
          break;
        // Add cases for other fields as needed
        default:
          break;
      }
    }
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // Your existing validation logic here

    // If all validations pass, proceed with saving
    setIsEditMode(false);
    console.log('Updated Salon Name:', salonName);
    console.log('Updated Email:', email);
    console.log('Updated Password:', password);
    console.log('Updated Contact:', contact);
    console.log('Updated Location:', location);
    console.log('Updated Description:', description);
    console.log('Updated Instagram Link:', instagramLink);
    console.log('Updated Image:', image);
    Alert.alert('Saved Successfully');
  };

  return (
    <View style={styles.container}>
      <Header title={'Your Salon Profile'} />
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Salon Name</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={salonName}
            onChangeText={(text) => handleInputChange(text, 'salonName', 10)}
            editable={isEditMode}
            maxLength={10}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Email</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={email}
            onChangeText={(text) => handleInputChange(text, 'email', 20)}
            editable={isEditMode}
             maxLength={20}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Password</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={password}
            onChangeText={(text) => handleInputChange(text, 'password', 8)}
            //secureTextEntry={true}
            editable={isEditMode}
            maxLength={8}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Contact</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={contact}
            onChangeText={(text) => handleInputChange(text, 'contact', 11)}
            editable={isEditMode}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Location</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={location}
            onChangeText={(text) => handleInputChange(text, 'location', 100)}
            editable={isEditMode}
            maxLength={100}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Description</Text>
          <TextInput
            style={[styles.inputText, styles.multilineInput, isEditMode && styles.editModeInput]}
            value={description}
            onChangeText={(text) => handleInputChange(text, 'description', 200)}
            multiline={true}
            editable={isEditMode}
            maxLength={200}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Instagram Link</Text>
          <TextInput
            style={[styles.inputText, isEditMode && styles.editModeInput]}
            value={instagramLink}
            onChangeText={(text) => handleInputChange(text, 'instagramLink', 100)}
            editable={isEditMode}
          />
        </View>



      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
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
    color: '#808080',
  },
  editSaveBtn: {
   position: 'absolute',
       top: 10,
       right: 10,
       backgroundColor: '#C9A0A0',
       borderRadius: 30,
       height: 40,
       alignItems: 'center',
       justifyContent: 'center',
       borderWidth: 1,
       borderColor: 'black',
       paddingHorizontal: 15,
  },
  editSaveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SalonProfile;
*/
/*
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SalonProfile = () => {
  const [salonName, setSalonName] = useState('My Salon');
  const [email, setEmail] = useState('salon@example.com');
  const [password, setPassword] = useState('salon123');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [image, setImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigation = useNavigation();

  const userId = auth().currentUser.uid;

  useEffect(() => {

    const fetchSalonData = async () => {
      try {
        const salonDoc = await firestore().collection('salons').doc(userId).get();

        if (salonDoc.exists) {
          const salonData = salonDoc.data();
          setSalonName(salonData.name || 'My Salon');
          setContact(salonData.contact || '');
          setLocation(salonData.location || '');
          setDescription(salonData.description || '');
          setInstagramLink(salonData.instagramLink || '');
        }
      } catch (error) {
        console.error('Error fetching salon data:', error);
      }
    };

    fetchSalonData();
  }, [userId]);

   const handleInputChange = (text, field, maxLength) => {
       if (text.length > maxLength) {
           // If it exceeds, trim the text to the maxLength
           text = text.substring(0, maxLength);
         } else {
        switch (field) {
          case 'salonName':
            setSalonName(text);
            break;
          case 'email':
            setEmail(text);
            break;
          case 'password':
            setPassword(text);
            break;
          case 'contact':
            setContact(text);
            break;
          case 'location':
            setLocation(text);
            break;
          case 'description':
            setDescription(text);
            break;
          case 'instagramLink':
            setInstagramLink(text);
            break;
          // Add cases for other fields as needed
          default:
            break;
        }
      }
    };


  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = async () => {
    try {
      // Check if the 'salons' collection exists, and create it if not
      const salonCollectionRef = firestore().collection('salons');
      const salonCollectionExists = await salonCollectionRef.get();

      if (!salonCollectionExists.size) {
        // 'salons' collection doesn't exist, create it
        await salonCollectionRef.doc(userId).set({});
      }

      // Save salon data to Firestore
      await firestore().collection('salons').doc(userId).set({
        name: salonName,
        contact,
        location,
        description,
        instagramLink,
      });

      setIsEditMode(false);
      Alert.alert('Saved Successfully');
    } catch (error) {
      console.error('Error saving salon data:', error);
      Alert.alert('Save Failed');
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Your Salon Profile'} />
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Salon Name</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={salonName}
                    onChangeText={(text) => handleInputChange(text, 'salonName', 10)}
                    editable={isEditMode}
                    maxLength={10}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Email</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={email}
                    onChangeText={(text) => handleInputChange(text, 'email', 20)}
                    editable={isEditMode}
                     maxLength={20}
                    keyboardType="email-address"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Password</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={password}
                    onChangeText={(text) => handleInputChange(text, 'password', 8)}
                    //secureTextEntry={true}
                    editable={isEditMode}
                    maxLength={8}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Contact</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={contact}
                    onChangeText={(text) => handleInputChange(text, 'contact', 11)}
                    editable={isEditMode}
                    keyboardType="numeric"
                    maxLength={11}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Location</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={location}
                    onChangeText={(text) => handleInputChange(text, 'location', 100)}
                    editable={isEditMode}
                    maxLength={100}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Description</Text>
                  <TextInput
                    style={[styles.inputText, styles.multilineInput, isEditMode && styles.editModeInput]}
                    value={description}
                    onChangeText={(text) => handleInputChange(text, 'description', 200)}
                    multiline={true}
                    editable={isEditMode}
                    maxLength={200}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Instagram Link</Text>
                  <TextInput
                    style={[styles.inputText, isEditMode && styles.editModeInput]}
                    value={instagramLink}
                    onChangeText={(text) => handleInputChange(text, 'instagramLink', 100)}
                    editable={isEditMode}
                  />
                </View>


      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#ffffff',
   },
   scrollViewContent: {
     flexGrow: 1,
     paddingVertical: 20,
     paddingHorizontal: 20,
   },
   inputContainer: {
     marginBottom: 40,
   },
   inputLabel: {
     fontSize: 20,
     fontWeight: 'bold',
     marginBottom: 5,
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
     color: '#808080',
   },
   editSaveBtn: {
    position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#C9A0A0',
        borderRadius: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 15,
   },
   editSaveText: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 20,
   },
 });

 export default SalonProfile;
 */
 import React, { useState, useEffect } from 'react';
 import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import Header from '../components/Header';
 import firestore from '@react-native-firebase/firestore';
 import auth from '@react-native-firebase/auth';

 const SalonProfile = () => {
   const [salonName, setSalonName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [contact, setContact] = useState('');
   const [location, setLocation] = useState('');
   const [description, setDescription] = useState('');
   const [instagramLink, setInstagramLink] = useState('');
   const [image, setImage] = useState(null);
   const [isEditMode, setIsEditMode] = useState(false);
   const navigation = useNavigation();

   const userId = auth().currentUser.uid;

   useEffect(() => {
     const fetchSalonData = async () => {
          try {
            // Fetch user data from 'users' collection
            const userDoc = await firestore().collection('users').doc(userId).get();

            if (userDoc.exists) {
              const userData = userDoc.data();
              setEmail(userData.email || '');
            }

            // Fetch salon data from 'salons' collection
            const salonDoc = await firestore().collection('salons').doc(userId).get();

            if (salonDoc.exists) {
              const salonData = salonDoc.data();
              setSalonName(salonData.name || '');
              setContact(salonData.contact || '');
              setLocation(salonData.location || '');
              setDescription(salonData.description || '');
              setInstagramLink(salonData.instagramLink || '');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchSalonData();
      }, [userId]);

   const handleInputChange = (text, field, maxLength) => {
      if (text.length > maxLength) {
              // If it exceeds, trim the text to the maxLength
              text = text.substring(0, maxLength);
            } else {
           switch (field) {
             case 'salonName':
               setSalonName(text);
               break;
             case 'email':
               setEmail(text);
               break;
             case 'password':
               setPassword(text);
               break;
             case 'contact':
               setContact(text);
               break;
             case 'location':
               setLocation(text);
               break;
             case 'description':
               setDescription(text);
               break;
             case 'instagramLink':
                    // Validate Instagram link format
                    const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/;
                    if (instagramRegex.test(text) || text === '') {
                      setInstagramLink(text);
                    }
                    break;
             default:
               break;
           }
         }
   };
   const handleInstagramLinkPress = () => {
       if (instagramLink) {
         // Open the Instagram link in the browser
         Linking.openURL(instagramLink);
       }
     };

   const handleEdit = () => {
     setIsEditMode(true);
   };

   const handleSave = async () => {
     try {
       // Check if the 'salons' collection exists, and create it if not
       const salonCollectionRef = firestore().collection('salons');
       const salonCollectionExists = await salonCollectionRef.get();

       if (!salonCollectionExists.size) {
         // 'salons' collection doesn't exist, create it
         await salonCollectionRef.doc(userId).set({});
       }

       // Save salon data to Firestore
       await firestore().collection('salons').doc(userId).set({
         name: salonName,
         email,
         contact,
         location,
         description,
         instagramLink,
       });

       setIsEditMode(false);
       Alert.alert('Saved Successfully');
     } catch (error) {
       console.error('Error saving salon data:', error);
       Alert.alert('Save Failed');
     }
   };

   return (
     <View style={styles.container}>
       <Header title={'Your Salon Profile'} />
       {isEditMode && (
         <TouchableOpacity style={styles.editSaveBtn} onPress={handleSave}>
           <Text style={styles.editSaveText}>Save</Text>
         </TouchableOpacity>
       )}

       {!isEditMode && (
         <TouchableOpacity style={styles.editSaveBtn} onPress={() => { handleEdit(); }}>
           <Text style={styles.editSaveText}>Edit Profile</Text>
         </TouchableOpacity>
       )}
       <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Salon Name</Text>
                           <TextInput
                             style={[styles.inputText, isEditMode && styles.editModeInput]}
                             value={salonName}
                             onChangeText={(text) => handleInputChange(text, 'salonName', 10)}
                             editable={isEditMode}
                             maxLength={10}
                           />
                         </View>

                         <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Email</Text>
                           <TextInput
                             style={[styles.inputText, isEditMode && styles.editModeInput]}
                             value={email}
                             onChangeText={(text) => handleInputChange(text, 'email', 20)}
                             editable={false}
                              maxLength={20}
                             keyboardType="email-address"
                           />
                         </View>


                         <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Contact</Text>
                           <TextInput
                             style={[styles.inputText, isEditMode && styles.editModeInput]}
                             value={contact}
                             onChangeText={(text) => handleInputChange(text, 'contact', 11)}
                             editable={isEditMode}
                             keyboardType="numeric"
                             maxLength={11}
                           />
                         </View>

                         <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Location</Text>
                           <TextInput
                             style={[styles.inputText, isEditMode && styles.editModeInput]}
                             value={location}
                             onChangeText={(text) => handleInputChange(text, 'location', 100)}
                             editable={isEditMode}
                             maxLength={100}
                           />
                         </View>

                         <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Description</Text>
                           <TextInput
                             style={[styles.inputText, styles.multilineInput, isEditMode && styles.editModeInput]}
                             value={description}
                             onChangeText={(text) => handleInputChange(text, 'description', 200)}
                             multiline={true}
                             editable={isEditMode}
                             maxLength={200}
                           />
                         </View>

                         <View style={styles.inputContainer}>
                           <Text style={[styles.inputLabel, !isEditMode && styles.blackText]}>Instagram Link</Text>
                           <TextInput
                             style={[styles.inputText, isEditMode && styles.editModeInput]}
                             value={instagramLink}
                             onChangeText={(text) => handleInputChange(text, 'instagramLink', 100)}
                             editable={isEditMode}
                           />
                         </View>


       </ScrollView>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#ffffff',
   },
   scrollViewContent: {
     flexGrow: 1,
     paddingVertical: 20,
     paddingHorizontal: 20,
   },
   inputContainer: {
     marginBottom: 40,
   },
   inputLabel: {
     fontSize: 20,
     fontWeight: 'bold',
     marginBottom: 5,
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
     color: '#808080',
   },
   editSaveBtn: {
     position: 'absolute',
     top: 10,
     right: 10,
     backgroundColor: '#C9A0A0',
     borderRadius: 30,
     height: 40,
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 1,
     borderColor: 'black',
     paddingHorizontal: 15,
   },
   editSaveText: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 20,
   },
 });

 export default SalonProfile;
