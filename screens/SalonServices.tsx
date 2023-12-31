/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: 1, name: 'All', icon: 'list' },
  { id: 2, name: 'Makeup', icon: 'palette' },
  { id: 3, name: 'Hair', icon: 'cut' },
  { id: 4, name: 'Face', icon: 'spa' },
];

const servicesData = [
 { id: 1, salonId: 1, categoryId: 2, categoryName: 'Makeup', serviceName: 'Bridal Makeup', price: 20000},
   { id: 2, salonId: 2, categoryId: 2, categoryName: 'Makeup', serviceName: 'Soft Glam Makeup', price: 3500 },
   { id: 3, salonId: 2, categoryId: 3, categoryName: 'Hair', serviceName: 'Haircut', price: 2245 },
   { id: 4, salonId: 2, categoryId: 4, categoryName: 'Face', serviceName: 'facial', price: 2990 },
   { id: 5, salonId: 5, categoryId: 2, categoryName: 'Makeup', serviceName: 'heavy glam', price: 3099 },
   { id: 6, salonId: 6, categoryId: 3, categoryName: 'Hair', serviceName: 'Haircut steps', price: 2905 },
   { id: 7, salonId: 1, categoryId: 2, categoryName: 'Makeup', serviceName: 'kids makeover', price: 28900 },
   { id: 8, salonId: 2, categoryId: 2, categoryName: 'Makeup', serviceName: 'Bridal Package', price: 3000 },
   { id: 9, salonId: 2, categoryId: 3, categoryName: 'Hair', serviceName: 'Straightening', price: 2599 },
   { id: 10, salonId: 3, categoryId: 4, categoryName: 'Face', serviceName: 'Hydra Facial', price: 2000 },
   { id: 11, salonId: 4, categoryId: 2, categoryName: 'Makeup', serviceName: 'Pedicure ', price: 3000 },
   { id: 12, salonId: 2, categoryId: 3, categoryName: 'Hair', serviceName: 'Rebounding', price: 25000 }

];

const SalonServices = () => {
  const salonId = 2; // DUMMY SALON ID
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedCategoryServices, setSelectedCategoryServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    fetchAllServices();
  }, [salonId]);

  const fetchAllServices = () => {
    const salonServices = servicesData.filter((service) => service.salonId === salonId);
    setAllServices(salonServices);
    setSelectedCategoryServices(salonServices);
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
        size={32}
        color={selectedCategory === item.id ? 'white' : 'black'}
      />
      <Text style={[styles.categoryButtonText, { color: selectedCategory === item.id ? 'white' : 'black' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    fetchSelectedCategoryServices(categoryId);
  };

  const fetchSelectedCategoryServices = (categoryId) => {
      let sortedServices;
      if (categoryId === 1) {
        sortedServices = allServices;
      } else {
        sortedServices = allServices.filter((service) => service.categoryId === categoryId);
      }
      setSelectedCategoryServices(sortedServices);
    };

    const confirmDelete = (serviceId) => {
      // Remove the service from allServices
      const updatedAllServices = allServices.filter((service) => service.id !== serviceId);
      setAllServices(updatedAllServices);

      // Remove the service from selectedCategoryServices
      const updatedSelectedServices = selectedCategoryServices.filter((service) => service.id !== serviceId);
      setSelectedCategoryServices(updatedSelectedServices);
    };


  const handleAdd = () => {
    navigation.navigate('SalonAddService');
  };

  const handleDelete = (serviceId) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this service?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => confirmDelete(serviceId),
        },
      ],
      { cancelable: false }
    );
  };



   const renderServiceItem = ({ item }) => (
      <View style={styles.serviceItem}>
        {selectedCategory === 1 && <Text style={styles.categoryName}>{item.categoryName}</Text>}
        <View>
          <Text
            style={[
              styles.serviceName,
              selectedCategory !== 1 && { color: '#CB8989' },
            ]}
          >
            {item.serviceName}
          </Text>
          <Text style={styles.price}>{`Price: Rs ${item.price}`}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
          <AntDesign name="delete" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  return (
    <View style={styles.container}>
      <Header title={'Services'} />
      <View style={styles.servicesContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <AntDesign name="plus" size={22} color="black" style={styles.addIcon} />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <FlatList
            data={categories}
            renderItem={renderCategoryButton}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.categoryList}
          />
        </View>
        <FlatList
          data={selectedCategoryServices}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:'white',
  },
  servicesContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topContainer: {
    marginTop: '1%',
  },
  addIcon:{
  marginLeft:15,
  },
  categoryList: {
    marginLeft: 8,
    marginTop: 10,
    //  marginBottom: 10,
  },

  categoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#C9A0A0',
    backgroundColor: '#F3E9E9',
  },
  selectedCategoryButton: {
    backgroundColor: '#C9A0A0',
  },
  categoryButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  serviceItem: {
  marginLeft:'auto',
  marginRight:'auto',
      backgroundColor: 'white',

    padding: 20,
    //borderRadius: 10, // Border radius
    borderBottomWidth: 2,  // Border width
    borderBottomColor: '#C9A0A0', // Border color
    shadowColor: '#C9A0A0', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    width: 400,
    marginTop: 10,
  },

  categoryName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C9A0A0',
  },
  serviceName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#656060',
  },
  addButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
   // borderRadius: 8,
    width: 120,
   // alignItems: 'center',
    marginLeft:'70%',
    flexDirection: 'row',
    marginTop:-55,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft:20,
  },
  deleteButton: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});

export default SalonServices;
*/
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



const SalonServices = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCategoryServices, setSelectedCategoryServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const navigation = useNavigation();

const [categories, setCategories] = useState([
  { id: 'all', name: 'All', icon: 'list', services: [] },
  { id: 'makeup', name: 'Makeup', icon: 'palette', services: [] },
  { id: 'hair', name: 'Hair', icon: 'cut', services: [] },
  { id: 'face', name: 'Face', icon: 'spa', services: [] },
]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        fetchAllServices(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);
const fetchAllServices = async (salonId) => {
  try {
    const updatedCategories = [...categories];

    for (const category of updatedCategories) {
      const categoryServicesSnapshot = await firestore().collection('categories').doc(category.id).collection('services').where('salonId', '==', salonId).get();
      const categoryServicesData = categoryServicesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      category.services = categoryServicesData;
    }

    setCategories(updatedCategories);
  } catch (error) {
    console.error('Error fetching services:', error);
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
        size={32}
        color={selectedCategory === item.id ? 'white' : 'black'}
      />
      <Text style={[styles.categoryButtonText, { color: selectedCategory === item.id ? 'white' : 'black' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchSelectedCategoryServices(categoryId);
  };

 const fetchSelectedCategoryServices = async (categoryId) => {
   try {
     console.log('Selected Category:', categoryId);

     let sortedServices;
     if (categoryId.toLowerCase() === 'all') {
       // Fetch services for all categories
       const allServicesData = [];
       for (const category of categories) {
         const categoryServicesSnapshot = await firestore()
           .collection('categories')
           .doc(category.id)
           .collection('services')
           .where('salonId', '==', currentUser.uid)
           .get();

         const categoryServicesData = categoryServicesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
         allServicesData.push(...categoryServicesData);
       }

       sortedServices = allServicesData;
     } else {
       // Fetch services for the selected category
       const categorySnapshot = await firestore()
         .collection('categories')
         .doc(categoryId)
         .collection('services')
         .where('salonId', '==', currentUser.uid)
         .get();

       const categoryServicesData = categorySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
       sortedServices = categoryServicesData;
     }

     setSelectedCategoryServices(sortedServices);
   } catch (error) {
     console.error('Error fetching services:', error);
   }
 };


const confirmDelete = async (serviceId) => {
  try {
    // Remove the service from allServices
    const updatedAllServices = allServices.filter((service) => service.id !== serviceId);
    setAllServices(updatedAllServices);

    // Remove the service from selectedCategoryServices
    const updatedSelectedServices = selectedCategoryServices.filter((service) => service.id !== serviceId);
    setSelectedCategoryServices(updatedSelectedServices);

    // Remove the service from each category in Firestore
    const batch = firestore().batch();
    for (const category of categories) {
      const serviceRef = firestore().collection('categories').doc(category.id).collection('services').doc(serviceId);
      batch.delete(serviceRef);
    }
    await batch.commit();
  } catch (error) {
    console.error('Error deleting service:', error);
  }
};



  const handleAdd = () => {
    navigation.navigate('SalonAddService');
  };

  const handleDelete = (serviceId) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this service?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => confirmDelete(serviceId),
        },
      ],
      { cancelable: false }
    );
  };

  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceItem}>
      {selectedCategory === 'all' && <Text style={styles.categoryName}>{item.categoryName}</Text>}
      <View>
        <Text
          style={[
            styles.serviceName,
            selectedCategory !== 'all' && { color: '#CB8989' },
          ]}
        >
          {item.serviceName}
        </Text>
        <Text style={styles.price}>{`Price: Rs ${item.price}`}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <AntDesign name="delete" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Services'} />
      <View style={styles.servicesContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <AntDesign name="plus" size={22} color="black" style={styles.addIcon} />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <FlatList
            data={categories}
            renderItem={renderCategoryButton}
            keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={styles.categoryList}
          />
        </View>
        <FlatList
          data={selectedCategoryServices}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  servicesContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  topContainer: {
    marginTop: '1%',
  },
  addIcon: {
    marginLeft: 15,
  },
  categoryList: {
    marginLeft: 8,
    marginTop: 10,
  },
  categoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#C9A0A0',
    backgroundColor: '#F3E9E9',
  },
  selectedCategoryButton: {
    backgroundColor: '#C9A0A0',
  },
  categoryButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceItem: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#C9A0A0',
    shadowColor: '#C9A0A0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    width: 400,
    marginTop: 10,
  },
  categoryName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C9A0A0',
  },
  serviceName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#656060',
  },
  addButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    width: 120,
    marginLeft: '70%',
    flexDirection: 'row',
    marginTop: -55,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  deleteButton: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
});

export default SalonServices;
