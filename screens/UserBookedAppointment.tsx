import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const UserBookedAppointment = ({ route }) => {
  const { salonId, selectedServiceIds, totalAmount, selectedDate, selectedTime, status } = route.params;
  const navigation = useNavigation();
  // Dummy salon data (replace it with actual data retrieval logic)
  const salonData = {
    id: 1,
    name: 'Example Salon',
  };

  // Dummy services data (replace it with actual data retrieval logic)
  const servicesData = [
     { id: 1, name: 'Bridal Makeup' },
      { id: 2, name: 'Soft Glam Makeup' },
      { id: 3, name: 'Haircut' },
      { id: 4, name: 'Facial' },
      { id: 5, name: 'Heavy Glam' },
      { id: 6, name: 'Haircut Steps' },
      { id: 7, name: 'Kids Makeover' },
      { id: 8, name: 'Bridal Package' }
  ];
  const selectedServicesNames = selectedServiceIds.map(
    (serviceId) => {
      const numericServiceId = parseInt(serviceId, 10); // Convert string to number
      const selectedService = servicesData.find((service) => service.id === numericServiceId);
      console.log('selectedService:', selectedService);
      return selectedService?.name || '';
    }
  );
  console.log('selectedServicesNames:', selectedServicesNames);


  const goToHomePage = () => {
    navigation.navigate('main');
  };

  return (
    <View style={styles.container}>
      <Header title={'Appointment Details'} />
<Text>{selectedServiceIds}</Text>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.confirmationText}>Your appointment has been booked successfully! </Text>

          <Image style={styles.imageStyle} source={require('../images/UserBookedAppointmentPicture.png')} />
          <Text style={styles.appointmentDetails}>
            Date:
          </Text>
          <Text>{new Date(selectedDate).toDateString()}</Text>
          <Text style={styles.appointmentDetails}>
            Time:
          </Text>
          <Text>{selectedTime}</Text>

          <Text style={styles.appointmentDetails}>
            Salon:
          </Text>
          <Text>{salonData.name}</Text>

          <Text style={styles.appointmentDetails}>
            Selected Services:
          </Text>
          <Text>{selectedServicesNames.join(', ')}</Text>

          <Text style={styles.confirmationText}>Wait for the confirmation from the salon. Keep Checking Appointments tab. </Text>
          <TouchableOpacity style={styles.homeButton} onPress={goToHomePage}>
            <Text style={styles.homeButtonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentDetails: {
    fontSize: 18,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 300,
    height: 220,
    resizeMode: 'cover',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#C9A0A0',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

UserBookedAppointment.navigationOptions = {
  headerLeft: null,
};

export default UserBookedAppointment;
