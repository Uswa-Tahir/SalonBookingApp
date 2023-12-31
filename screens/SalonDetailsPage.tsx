/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';

// Using salonId from UserHome Page
const dummySalonData = {
  name: 'Sample Salon',
  image: require('../images/salon_a.png'),
  description: 'This is a sample salon description. Consider yourself at home with our treatments in every visit. We have pre trained and qualified staff to assist you in every matter. We are delighted to have a reasonable number of customers at our Model Town branch with imported machinery satisfying our customers needs',
  phone: '123-456-7890',
  location: 'Sample Location, Sector 7, Model town',
  instagram: 'sample_instagram',
};

const SalonDetailsPage = ({ route }) => {
  const { salonId } = route.params;
  const [salonData, setSalonData] = useState(dummySalonData);
  const navigation = useNavigation();

  const onViewServicesPress = () => {
    navigation.navigate('ViewServicesPage', { salonId: salonId });
  };

  return (
    <View>
      <Header title="Salon Details" />
      <ScrollView>
       {salonData ? (
          <>
            <Text style={styles.salonName}>{salonData.name}</Text>
            <Image source={salonData.image} style={styles.salonImage} />
            <Pressable
              style={styles.viewServicesButton}
              onPress={onViewServicesPress}
            >
              <Text style={styles.viewServicesButtonText}>View Services</Text>
            </Pressable>
            <Text style={styles.salonLocation}>
              <Fonta name="map-marker-alt" size={35} color="#C9A0A0" /> {salonData.location}
            </Text>
            <Text style={styles.salonDescription}>{salonData.description}</Text>
            <View style={styles.line} />
            <Text style={styles.salonPhone}>
              <Fonta name="phone" size={35} color="#C9A0A0" /> {salonData.phone}
            </Text>
            <Text
              style={styles.salonInstagramLink}
              onPress={() => alert('open instagram')}
            >
              <Fonta name="instagram" size={35} color="#C9A0A0" /> {salonData.instagram}
            </Text>
            <View style={styles.line} />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  salonLocation: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  salonPhone: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
  salonDescription: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  salonName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  salonImage: {
    width: 300,
    height: 220,
    resizeMode: 'cover',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewServicesButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#C9A0A0',
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  salonInstagramLink: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1976D2',
    textDecorationLine: 'underline',
  },
  viewServicesButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SalonDetailsPage;
*/
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonta from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import firestore from '@react-native-firebase/firestore';

const SalonDetailsPage = ({ route }) => {
  const { salonId } = route.params;
  const [salonData, setSalonData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const salonDoc = await firestore().collection('salons').doc(salonId).get();
        if (salonDoc.exists) {
          setSalonData(salonDoc.data());
        } else {
          console.error('Salon not found.');
        }
      } catch (error) {
        console.error('Error fetching salon details:', error);
      }
    };

    fetchSalonDetails();
  }, [salonId]);

  const onViewServicesPress = () => {
    navigation.navigate('ViewServicesPage', { salonId: salonId });
  };
const onInstagramLinkPress = () => {
    if (salonData?.instagramLink) {
      Linking.openURL(salonData.instagramLink);
    } else {
      alert('Instagram link not available.');
    }
  };
  return (
    <View>
      <Header title="Salon Details" />
      <ScrollView>
        {salonData ? (
          <>
            <Text style={styles.salonName}>{salonData.name}</Text>
<Image source={require('../images/salon_f.png')} style={styles.salonImage} />
            <Pressable style={styles.viewServicesButton} onPress={onViewServicesPress}>
              <Text style={styles.viewServicesButtonText}>View Services</Text>
            </Pressable>
            <Text style={styles.salonLocation}>
              <Fonta name="map-marker-alt" size={35} color="#C9A0A0" /> {salonData.location}
            </Text>
            <Text style={styles.salonDescription}>{salonData.description}</Text>
            <View style={styles.line} />
            <Text style={styles.salonPhone}>
              <Fonta name="phone" size={35} color="#C9A0A0" /> {salonData.contact}
            </Text>
            <Text
              style={styles.salonInstagramLink}
              onPress={onInstagramLinkPress}
            >
              <Fonta name="instagram" size={35} color="#C9A0A0" /> {salonData.instagramLink}
            </Text>
            <View style={styles.line} />
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   salonLocation: {
     fontSize: 16,
     marginTop: 10,
     marginLeft: 'auto',
     marginRight: 'auto',
     flexDirection: 'row',
     alignItems: 'center',
     fontWeight: 'bold',
     color: 'black',
   },
   salonPhone: {
     fontSize: 16,
     marginTop: 5,
     marginLeft: 'auto',
     marginRight: 'auto',
     flexDirection: 'row',
     alignItems: 'center',
     fontWeight: 'bold',
     color: 'black',
   },
   line: {
     height: 2,
     backgroundColor: 'black',
     marginVertical: 10,
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '80%',
   },
   salonDescription: {
     fontSize: 16,
     color: 'grey',
     marginTop: 10,
     marginLeft: 'auto',
     marginRight: 'auto',
     textAlign: 'center',
   },
   salonName: {
     fontSize: 25,
     fontWeight: 'bold',
     color: 'black',
     marginTop: 10,
     marginLeft: 10,
   },
   salonImage: {
     width: 300,
     height: 220,
     resizeMode: 'cover',
     alignItems: 'center',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 10,
   },
   centerContent: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   viewServicesButton: {
     marginTop: 20,
     padding: 20,
     backgroundColor: '#C9A0A0',
     borderRadius: 8,
     marginLeft: 'auto',
     marginRight: 'auto',
   },
   salonInstagramLink: {
     fontSize: 16,
     marginTop: 10,
     marginLeft: 'auto',
     marginRight: 'auto',
     flexDirection: 'row',
     alignItems: 'center',
     fontWeight: 'bold',
     color: '#1976D2',
     textDecorationLine: 'underline',
   },
   viewServicesButtonText: {
     color: 'white',
     fontWeight: 'bold',
     fontSize: 20,
   },
});

export default SalonDetailsPage;
