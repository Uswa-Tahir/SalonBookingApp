/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';

const categories = [
 // { id: 1, name: 'All', icon: 'list' },
  { id: 2, name: 'Makeup', icon: 'palette' },
  { id: 3, name: 'Hair', icon: 'cut' },
  { id: 4, name: 'Face', icon: 'spa' },
];

const SalonAddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory]=useState(null);
  const MAX_NAME_LENGTH = 50;
  const MAX_DESCRIPTION_LENGTH = 200;

  const handleServiceNameChange = (text) => {
    if (text.length <= MAX_NAME_LENGTH) {
      setServiceName(text);
    } else {
      Alert.alert('Character Limit Exceeded', `Service name cannot exceed ${MAX_NAME_LENGTH} characters.`);
    }
  };

  const handlePriceChange = (text) => {
    if (/^\d+$/.test(text) || text === '') {
      setPrice(text);
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid number for price.');
    }
  };

  const handleDescriptionChange = (text) => {
    if (text.length <= MAX_DESCRIPTION_LENGTH) {
      setDescription(text);
    } else {
      Alert.alert('Character Limit Exceeded', `Description cannot exceed ${MAX_DESCRIPTION_LENGTH} characters.`);
    }
  };

  const handleAdd = () => {
     // Check if all required fields are filled
     if (!selectedCategory || !serviceName || !price || !description) {
       Alert.alert('Incomplete Information', 'Please fill in all the fields.');
       return;
     }

     // Proceed with saving the data or making an API call
     console.log('Service Name:', serviceName);
     console.log('Price:', price);
     console.log('Description:', description);
     console.log('Category:', selectedCategory);
     Alert.alert('Service added successfully! ');

   };

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.id && styles.selectedCategoryButton,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Fonta
        name={item.icon}
        size={38}
        color={selectedCategory === item.id ? 'white' : 'black'}
      />
      <Text style={[styles.categoryButtonText, { color: selectedCategory === item.id ? 'white' : 'black' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <View style={styles.container}>
      <Header title={'Add Service'} />
      <View style={styles.content}>
        <View style={styles.textBoxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
          </View>
          <View style={styles.button}>
            <Fonta name="user-circle" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={serviceName}
              onChangeText={handleServiceNameChange}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Price</Text>
          </View>
          <View style={styles.button}>
            <Entypo name="price-tag" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={handlePriceChange}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Description</Text>
          </View>
          <View style={styles.button}>
            <AntDesign name="edit" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={handleDescriptionChange}
            />
          </View>

           <Text style={styles.selectedCategoryHeading}>Select Category </Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryButton}
  keyExtractor={(item) => item.id.toString() + (selectedCategory === item.id ? 'selected' : 'unselected')}
            horizontal
            contentContainerStyle={styles.categoryList}
          />
        </View>

        <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  textBoxContainer: {
    width: '100%',
  },
  selectedCategoryHeading:{
   fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
      marginTop:30,
      color:'black',
      marginBottom:20,
      },
   categoryList: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',  // Adjusted to evenly space buttons
     // marginLeft: '5%',  // Leave 5% space from the left margin
     // marginRight: '5%',  // Leave 5% space from the right margin
      marginTop: 10,
      marginBottom: 10,
    },
    categoryButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,  // Adjusted button size
      height: 100,  // Adjusted button size
      borderRadius: 50,  // Adjusted button size
      borderWidth: 1,
      borderColor: '#C9A0A0',
      backgroundColor: '#F3E9E9',
      marginLeft: 20,
      //marginRight:10,
    },
    selectedCategoryButton: {
      backgroundColor: '#C9A0A0',
    },
    categoryButtonText: {
      marginTop: 5,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,  // Adjusted text size
    },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C9A0A0',
    borderWidth: 4,
    marginTop: 5,
    marginBottom: 10,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginTop:20,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
    color: '#C9A0A0',
  },
  addButton: {
    backgroundColor: '#C9A0A0',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width:90,
    alignItems:'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SalonAddService;
*/
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const categories = [
  { id: 'makeup', name: 'Makeup', icon: 'palette' },
  { id: 'hair', name: 'Hair', icon: 'cut' },
  { id: 'face', name: 'Face', icon: 'spa' },
];

const SalonAddService = () => {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const MAX_NAME_LENGTH = 50;
  const MAX_DESCRIPTION_LENGTH = 200;
  const [salonId, setSalonId] = useState(null);

  useEffect(() => {
    // Get the current user's ID as the salonId
    const currentUser = auth().currentUser;
    if (currentUser) {
      setSalonId(currentUser.uid);
    }
  }, []);

  const handleServiceNameChange = (text) => {
    if (text.length <= MAX_NAME_LENGTH) {
      setServiceName(text);
    } else {
      Alert.alert('Character Limit Exceeded', `Service name cannot exceed ${MAX_NAME_LENGTH} characters.`);
    }
  };

  const handlePriceChange = (text) => {
    if (/^\d+$/.test(text) || text === '') {
      setPrice(text);
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid number for price.');
    }
  };

  const handleDescriptionChange = (text) => {
    if (text.length <= MAX_DESCRIPTION_LENGTH) {
      setDescription(text);
    } else {
      Alert.alert('Character Limit Exceeded', `Description cannot exceed ${MAX_DESCRIPTION_LENGTH} characters.`);
    }
  };

  const handleAdd = async () => {
    try {
      // Check if all required fields are filled
      if (!selectedCategory || !serviceName || !price || !description) {
        Alert.alert('Incomplete Information', 'Please fill in all the fields.');
        return;
      }

      // Check if the "categories" collection exists, if not, create it
      const categoriesCollectionRef = firestore().collection('categories');
      const isCategoriesCollectionExists = await categoriesCollectionRef.limit(1).get();
      if (!isCategoriesCollectionExists.docs.length) {
        // "categories" collection doesn't exist, create it
        await categoriesCollectionRef.doc('makeup').set({});
        await categoriesCollectionRef.doc('hair').set({});
        await categoriesCollectionRef.doc('face').set({});
      }

      // Check if the selected category document exists, if not, create it
      const categoryDocRef = categoriesCollectionRef.doc(selectedCategory);
      const isCategoryDocExists = await categoryDocRef.get();
      if (!isCategoryDocExists.exists) {
        // Selected category document doesn't exist, create it
        await categoryDocRef.set({});
      }

      // Proceed with saving the data or making an API call
      await categoryDocRef.collection('services').add({
        salonId,
        serviceName,
        price,
        description,
      });

      Alert.alert('Service added successfully!');
    } catch (error) {
      console.error('Error adding service:', error);
      Alert.alert('Error', 'Failed to add service. Please try again.');
    }
  };

  const renderCategoryButton = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.id && styles.selectedCategoryButton,
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Fonta
        name={item.icon}
        size={38}
        color={selectedCategory === item.id ? 'white' : 'black'}
      />
      <Text style={[styles.categoryButtonText, { color: selectedCategory === item.id ? 'white' : 'black' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <View style={styles.container}>
      <Header title={'Add Service'} />
      <View style={styles.content}>
        <View style={styles.textBoxContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
          </View>
          <View style={styles.button}>
            <Fonta name="user-circle" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={serviceName}
              onChangeText={handleServiceNameChange}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Price</Text>
          </View>
          <View style={styles.button}>
            <Entypo name="price-tag" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={handlePriceChange}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Description</Text>
          </View>
          <View style={styles.button}>
            <AntDesign name="edit" size={35} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={handleDescriptionChange}
            />
          </View>

          <Text style={styles.selectedCategoryHeading}>Select Category </Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryButton}
            keyExtractor={(item) => item.id.toString() + (selectedCategory === item.id ? 'selected' : 'unselected')}
            horizontal
            contentContainerStyle={styles.categoryList}
          />
        </View>

        <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  textBoxContainer: {
    width: '100%',
  },
  selectedCategoryHeading:{
   fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 10,
      marginTop:30,
      color:'black',
      marginBottom:20,
      },
   categoryList: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',  // Adjusted to evenly space buttons
     // marginLeft: '5%',  // Leave 5% space from the left margin
     // marginRight: '5%',  // Leave 5% space from the right margin
      marginTop: 10,
      marginBottom: 10,
    },
    categoryButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,  // Adjusted button size
      height: 100,  // Adjusted button size
      borderRadius: 50,  // Adjusted button size
      borderWidth: 1,
      borderColor: '#C9A0A0',
      backgroundColor: '#F3E9E9',
      marginLeft: 20,
      //marginRight:10,
    },
    selectedCategoryButton: {
      backgroundColor: '#C9A0A0',
    },
    categoryButtonText: {
      marginTop: 5,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,  // Adjusted text size
    },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C9A0A0',
    borderWidth: 4,
    marginTop: 5,
    marginBottom: 10,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginTop:20,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
    color: '#C9A0A0',
  },
  addButton: {
    backgroundColor: '#C9A0A0',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width:90,
    alignItems:'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SalonAddService;