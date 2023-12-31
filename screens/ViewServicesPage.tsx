/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import SelectDate from './screens/SelectDate';

const categories = [
  { id: 1, name: 'All', icon: 'list' },
  { id: 2, name: 'Makeup', icon: 'palette' },
  { id: 3, name: 'Hair', icon: 'cut' },
  { id: 4, name: 'Face', icon: 'smile-beam' },
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
  { id: 12, salonId: 2, categoryId: 3, categoryName: 'Hair', serviceName: 'Rebounding', price: 25000 },];

const ViewServicesPage = ({ route }) => {
  const { salonId } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedCategoryServices, setSelectedCategoryServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
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
      <Text
        style={[
          styles.categoryButtonText,
          { color: selectedCategory === item.id ? 'white' : 'black' },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleAddToCart = (item) => {
    setSelectedServices((prevSelectedServices) => {
      const updatedServices = {
        ...prevSelectedServices,
        [item.id]: !prevSelectedServices[item.id],
      };

      const updatedTotalAmount = Object.keys(updatedServices).reduce((total, serviceId) => {
        const service = allServices.find((s) => s.id.toString() === serviceId);
        if (updatedServices[serviceId] && service) {
          return total + service.price;
        }
        return total;
      }, 0);

      setTotalAmount(updatedTotalAmount);

      return updatedServices;
    });
  };

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    fetchSelectedCategoryServices(categoryId);
  };

  const handleContinue = () => {
    if (totalAmount > 0) {
      const selectedServiceIds = Object.keys(selectedServices).filter(
        (serviceId) => selectedServices[serviceId]
      );

      navigation.navigate('SelectDate', {
        salonId,
        selectedServiceIds,
        totalAmount,
      });
    } else {
      Alert.alert('Pick a Service', 'Please select at least one service to continue.');
    }
  };

  const fetchSelectedCategoryServices = (categoryId) => {
    let sortedServices;
    if (categoryId === 1) {
      sortedServices = categories
        .filter((cat) => cat.id !== 1)
        .map((cat) => allServices.filter((service) => service.categoryId === cat.id))
        .flat();
    } else {
      sortedServices = allServices.filter((service) => service.categoryId === categoryId);
    }
    setSelectedCategoryServices(sortedServices);
  };

  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceItem}>
      {selectedCategory === 1 && <Text style={styles.categoryName}>{item.categoryName}</Text>}
      <View>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.price}>{`Price: Rs ${item.price}`}</Text>
        {selectedCategory !== 1 && (
          <TouchableOpacity
            style={[
              styles.addToCartButton,
              selectedServices[item.id] && styles.selectedAddToCartButton,
            ]}
            onPress={() => handleAddToCart(item)}
          >
            {selectedServices[item.id] ? (
              <AntDesign name="check" size={30} color="white" />
            ) : (
              <AntDesign name="plus" size={30} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={'Services'} />
      <View style={styles.servicesContainer}>
        <View style={styles.categoryContainer}>

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
      <View style={styles.totalAmountContainer}>
        <View style={styles.totalAmountTextContainer}>
          <Text style={styles.totalAmountText}>Total Amount: Rs {totalAmount}</Text>
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
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
  totalAmountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  servicesContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  categoryContainer: {
   // width: 80,
  },
  continueButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    width: 90,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryList: {
    marginLeft: 8,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C9A0A0',
    height: 50,
    paddingHorizontal: 16,
  },
  totalAmountTextContainer: {
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    color: 'black',
    padding: 10,
    marginLeft: 290,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderWidth:1,
     borderColor:'black',
     marginTop:-50,
  },
  selectedAddToCartButton: {
    backgroundColor: '#C9A0A0',
    borderRadius: 50,
    color: 'black',
    padding: 10,
    marginLeft: 290,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,

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
   line: {
      height: 1,
      backgroundColor: 'black',
      marginVertical: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
    },
  serviceItem: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    padding: 20,
    //borderRadius: 10,
    borderBottomWidth: 1,
    //borderTopWidth:1,
    borderColor: 'black',
    shadowColor: '#C9A0A0',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 10,
    width: 400,
    marginTop: 5,
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
});

export default ViewServicesPage;
*/
/*
import React, { useState, useEffect } from 'react';
import { View, Text , Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ViewServicesPage = ({ route }) => {
  const { salonId } = route.params;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Ensure that the salonId is defined and not null before fetching categories
    if (salonId) {
      fetchCategories();
    }
  }, [salonId]); // Only trigger useEffect when salonId changes


    const fetchCategories = async () => {
      try {
        let categoriesData = await firestore()
          .collection('categories')
          .doc('hair')
          .collection('services')
          .where('salonId', '==', salonId)
          .get();

        let servicesData = categoriesData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Services (Hair):', servicesData);

        categoriesData = await firestore()
          .collection('categories')
          .doc('makeup')
          .collection('services')
          .where('salonId', '==', salonId)
          .get();

        servicesData = categoriesData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));



        console.log('Services (Face):', servicesData);
      } catch (error) {
        console.log('Error fetching services:', error);
      }



    };



  return (
    <View>
      <Button title="press" onPress={fetchCategories} />
    </View>
  );
};

export default ViewServicesPage;

*/


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'; // Import Firestore

import Header from '../components/Header';
import SelectDate from './screens/SelectDate';

const categories = [
  { id: 1, name: 'all', icon: 'list' },
  { id: 2, name: 'makeup', icon: 'palette' },
  { id: 3, name: 'hair', icon: 'cut' },
  { id: 4, name: 'face', icon: 'smile-beam' },
];

const ViewServicesPage = ({ route }) => {
  const { salonId } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedCategoryServices, setSelectedCategoryServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedServices, setSelectedServices] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    fetchAllServices();
  }, [salonId]);

  const fetchAllServices = async () => {
    try {
      // Fetch hair services from Firebase
      let hairData = await firestore()
        .collection('categories')
        .doc('hair')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      let hairServices = hairData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Fetch makeup services from Firebase
      let makeupData = await firestore()
        .collection('categories')
        .doc('makeup')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      let makeupServices = makeupData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Fetch face services from Firebase
      let faceData = await firestore()
        .collection('categories')
        .doc('face')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      let faceServices = faceData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Combine hair, makeup, and face services
      let allServicesData = [...hairServices, ...makeupServices, ...faceServices];

      console.log(allServicesData);
      setAllServices(allServicesData);
      setSelectedCategoryServices(allServicesData);
    } catch (error) {
      console.log('Error fetching services:', error);
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
      <Text
        style={[
          styles.categoryButtonText,
          { color: selectedCategory === item.id ? 'white' : 'black' },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
const handleAddToCart = (item) => {
  setSelectedServices((prevSelectedServices) => {
    const updatedServices = {
      ...prevSelectedServices,
      [item.id]: !prevSelectedServices[item.id],
    };

    // Calculate the total amount directly from the updated services
    const updatedTotalAmount = Object.keys(updatedServices).reduce((total, serviceId) => {
      const service = allServices.find((s) => s.id.toString() === serviceId);
      if (updatedServices[serviceId] && service) {
        // Convert the price to an integer before adding to the total
        return total + (updatedServices[serviceId] ? parseInt(service.price, 10) : 0);
      }
      return total;
    }, 0);

    // Use the setTotalAmount callback to ensure correct updates
    setTotalAmount(() => updatedTotalAmount);

    return updatedServices;
  });
};




    const handleCategoryPress = (categoryId) => {
      setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
      fetchSelectedCategoryServices(categoryId);
    };

    const handleContinue = () => {
      if (totalAmount > 0) {
        const selectedServiceIds = Object.keys(selectedServices).filter(
          (serviceId) => selectedServices[serviceId]
        );

        navigation.navigate('SelectDate', {
          salonId,
          selectedServiceIds,
          totalAmount,
        });
      } else {
        Alert.alert('Pick a Service', 'Please select at least one service to continue.');
      }
    };
const fetchSelectedCategoryServices = async (categoryId) => {
  let sortedServices;

  if (categoryId === 1) {
    // If the category is 1 (all), fetch services for all categories except 1
    sortedServices = allServices.filter((service) => service.categoryId !== 1);
  } else if (categoryId === 2) {
    // If the category is 2 (makeup), fetch services for the "Makeup" category from Firestore
    try {
      let categoriesData = await firestore()
        .collection('categories')
        .doc('makeup')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      sortedServices = categoriesData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.log('Error fetching services for makeup category:', error);
      // Handle the error as needed
      sortedServices = [];
    }
  } else if (categoryId === 3) {
    // If the category is 3 (hair), fetch services for the "Hair" category from Firestore
    try {
      let categoriesData = await firestore()
        .collection('categories')
        .doc('hair')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      sortedServices = categoriesData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.log('Error fetching services for hair category:', error);
      // Handle the error as needed
      sortedServices = [];
    }
  } else if (categoryId === 4) {
    // If the category is 4 (face), fetch services for the "Face" category from Firestore
    try {
      let categoriesData = await firestore()
        .collection('categories')
        .doc('face')
        .collection('services')
        .where('salonId', '==', salonId)
        .get();

      sortedServices = categoriesData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.log('Error fetching services for face category:', error);
      // Handle the error as needed
      sortedServices = [];
    }
  } else {
    // If the category is not 1, 2, 3, or 4, fetch services for the selected category
    sortedServices = allServices.filter((service) => service.categoryId === categoryId);
  }

  setSelectedCategoryServices(sortedServices);
};

    const renderServiceItem = ({ item }) => (
      <View style={styles.serviceItem}>
        {selectedCategory === 1 && <Text style={styles.categoryName}>{item.categoryName}</Text>}
        <View>
          <Text style={styles.serviceName}>{item.serviceName}</Text>
          <Text style={styles.price}>{`Price: Rs ${item.price}`}</Text>
          {selectedCategory !== 1 && (
            <TouchableOpacity
              style={[
                styles.addToCartButton,
                selectedServices[item.id] && styles.selectedAddToCartButton,
              ]}
              onPress={() => handleAddToCart(item)}
            >
              {selectedServices[item.id] ? (
                <AntDesign name="check" size={30} color="white" />
              ) : (
                <AntDesign name="plus" size={30} color="black" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  console.log('selectedCategoryServices:', selectedCategoryServices);

    return (
      <View style={styles.container}>
        <Header title={'Services'} />
        <View style={styles.servicesContainer}>
          <View style={styles.categoryContainer}>

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
        <View style={styles.totalAmountContainer}>
          <View style={styles.totalAmountTextContainer}>
            <Text style={styles.totalAmountText}>Total Amount: Rs {totalAmount}</Text>
          </View>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
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
    totalAmountText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    servicesContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    categoryContainer: {
     // width: 80,
    },
    continueButton: {
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 8,
      width: 90,
      alignItems: 'center',
    },
    continueButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    categoryList: {
      marginLeft: 8,
    },
    totalAmountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#C9A0A0',
      height: 50,
      paddingHorizontal: 16,
    },
    totalAmountTextContainer: {
      flex: 1,
    },
    addToCartButton: {
      backgroundColor: '#D9D9D9',
      borderRadius: 25,
      color: 'black',
      padding: 10,
      marginLeft: 290,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderWidth:1,
       borderColor:'black',
       marginTop:-50,
    },
    selectedAddToCartButton: {
      backgroundColor: '#C9A0A0',
      borderRadius: 50,
      color: 'black',
      padding: 10,
      marginLeft: 290,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,

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
     line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
      },
    serviceItem: {
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'white',
      padding: 20,
      //borderRadius: 10,
      borderBottomWidth: 1,
      //borderTopWidth:1,
      borderColor: 'black',
      shadowColor: '#C9A0A0',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      marginBottom: 10,
      width: 400,
      marginTop: 5,
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
  });

  export default ViewServicesPage;