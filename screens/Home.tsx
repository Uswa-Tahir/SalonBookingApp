/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import all from '../images/icon_all.png';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const categories = [
    { id: 1, name: 'All', icon: 'list' },
    { id: 2, name: 'Makeup', icon: 'palette' },
    { id: 3, name: 'Hair', icon: 'cut' },
    { id: 4, name: 'Face', icon: 'smile-beam' },
  ];

  const salonsData = [
    { id: 1, name: 'Salon A', location: 'Location A', category: [2, 3], instagram: 'salon_a_instagram', image: require('../images/salon_a.png') },
    { id: 2, name: 'Salon B', location: 'Location B', category: [2], instagram: 'salon_b_instagram', image: require('../images/salon_b.png') },
    { id: 3, name: 'Salon C', location: 'Location C', category: [2, 4], instagram: 'salon_c_instagram', image: require('../images/salon_c.png') },
    { id: 4, name: 'Salon D', location: 'Location D', category: [3], instagram: 'salon_d_instagram', image: require('../images/salon_d.png') },
    { id: 5, name: 'Salon E', location: 'Location E', category: [3], instagram: 'salon_e_instagram', image: require('../images/salon_e.png') },
    { id: 6, name: 'Salon F', location: 'Location F', category: [4], instagram: 'salon_f_instagram', image: require('../images/salon_f.png') },
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchText);
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
  };

  const handleSalonClick = (salon) => {
    navigation.navigate('SalonDetailsPage', {
      salonId: salon.id,
    });
  };

  const renderSalonItem = ({ item }) => {
    const isCategoryMatch =
      selectedCategory === null || selectedCategory === 1 || item.category.includes(selectedCategory);

    const isSearchMatch =
      searchText === '' ||
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase()) ||
      item.instagram.toLowerCase().includes(searchText.toLowerCase());

    if (isCategoryMatch && isSearchMatch) {
      return (
        <TouchableOpacity style={styles.salonItem} onPress={() => handleSalonClick(item)}>
          <View style={styles.salonInnerItems}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.salonImage} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.salonName}>{item.name}</Text>
              <View style={styles.locationContainer}>
                <Fonta name="map-marker-alt" size={16} color="#C9A0A0" />
                <Text style={styles.salonLocation}>{item.location}</Text>
              </View>
              <View style={styles.instagramContainer}>
                <Fonta name="instagram" size={16} color="#C9A0A0" />
                <Text style={styles.salonInstagram}>{` ${item.instagram}`}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Salon"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="#808080" />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Select Category</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryButton}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.categoryList}
      />
      <FlatList
        data={salonsData}
        renderItem={renderSalonItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        style={styles.salonList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  categoryButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    marginRight: 10,
  },
  salonImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    //marginLeft:40,
  },
  detailsContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  heading1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  categoryList: {
    marginLeft: 8,
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
  salonList: {
    flex: 1,
    marginTop: -400,
  },
  salonItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#F3E9E9',
  },
  salonInnerItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft:40,
  },
  salonName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salonLocation: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salonInstagram: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Home;
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [salonsData, setSalonsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesSnapshot = await firestore().collection('categories').get();
      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories([
        { id: 1, name: 'All', icon: 'list' },
        ...categoriesData,
      ]);
    };

    const fetchSalons = async () => {
      const salonsSnapshot = await firestore().collection('salons').get();
      const salonsData = salonsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSalonsData(salonsData);
    };

    fetchCategories();
    fetchSalons();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchText);
     const filteredSalons = salonsData.filter(
          (salon) =>
            salon.name.toLowerCase().includes(searchText.toLowerCase()) ||
            salon.location.toLowerCase().includes(searchText.toLowerCase()) ||
            (salon.instagramLink && salon.instagramLink.toLowerCase().includes(searchText.toLowerCase()))
        );

        setSalonsData(filteredSalons);
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

 const handleCategoryPress = async (categoryId) => {
   setSelectedCategory(categoryId);
   if (categoryId === 1) {
     // If 'All' is selected, show all salons
     const salonsSnapshot = await firestore().collection('salons').get();
     const salonsData = salonsSnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
     setSalonsData(salonsData);
   } else {
     // If a specific category is selected, fetch salons from services subcollection
     const servicesSnapshot = await firestore()
       .collection('categories')
       .doc(categoryId.toString())
       .collection('services')
       .get();

     const salonIds = servicesSnapshot.docs.map((doc) => doc.data().salonId);

     // Fetch salons from the 'salons' collection based on the obtained salonIds
     const salonsSnapshot = await firestore()
       .collection('salons')
       .where(firestore.FieldPath.documentId(), 'in', salonIds)
       .get();

     const salonsData = salonsSnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
     setSalonsData(salonsData);
   }
 };

  const handleSalonClick = (salon) => {
    navigation.navigate('SalonDetailsPage', {
      salonId: salon.id,
    });
  };

  const renderSalonItem = ({ item }) => (
    <TouchableOpacity style={styles.salonItem} onPress={() => handleSalonClick(item)}>
      <View style={styles.salonInnerItems}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.salonImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.salonName}>{item.name}</Text>
          <View style={styles.locationContainer}>
            <Fonta name="map-marker-alt" size={16} color="#C9A0A0" />
            <Text style={styles.salonLocation}>{item.location}</Text>
          </View>
          <View style={styles.instagramContainer}>
            <Fonta name="pen-square" size={16} color="#C9A0A0" />
            <Text style={styles.salonInstagram}>{` ${item.description}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Salon"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="#808080" />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Select Category</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryButton}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.categoryList}
      />
      <FlatList
        data={salonsData}
        renderItem={renderSalonItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        style={styles.salonList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  categoryButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    marginRight: 10,
  },
  salonImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    //marginLeft:40,
  },
  detailsContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  heading1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  categoryList: {
    marginLeft: 8,
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
  salonList: {
    flex: 1,
    marginTop: -400,
  },
  salonItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#F3E9E9',
  },
  salonInnerItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft:40,
  },
  salonName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:5,
  },
  salonLocation: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  instagramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-5,
  },
  salonInstagram: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginTop:10,
  },
});

export default Home;

