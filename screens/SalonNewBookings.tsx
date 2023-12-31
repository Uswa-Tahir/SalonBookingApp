import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Fonta from 'react-native-vector-icons/FontAwesome5';

const SalonNewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const simulatedData = [
      {
        id: 1,
        userName: 'User A',
        userContact: 35556789,
        userMail:'usera@hmail.com',
        servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
        selectedDate: 'Mon Nov 20 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'pending',
      },
      {
        id: 2,
        userName: 'User B',
        userMail:'userb@gmail.com',
        userContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup'],
        selectedDate: 'Tues Nov 22 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'pending',
      },
      {
        id: 3,
        userName: 'User C',
        userMail:'userc@gmail.com',
        userContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup'],
        selectedDate: 'Tues Nov 22 2023',
        selectedTime: '11:00 AM',
        totalAmount: 50,
        status: 'approved',
      },
      {
        id: 4,
        userName: 'User D',
        userMail:'userd@gmail.com',
        userContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup'],
        selectedDate: 'Mon Nov 21 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'cancel',
      },
      {
        id: 5,
        userName: 'User E',
        userContact: 35556789,
        userMail:'usere@gmail.com',
        servicesNames: ['haircut', 'soft glam makeup'],
        selectedDate: 'Mon Nov 21 2023',
        selectedTime: '5:00 PM', // Added an earlier time for demonstration
        totalAmount: 50,
        status: 'approved',
      },
      {
        id: 6,
        userName: 'User F',
        userContact: 355451678,
        userMail:'userf@gmail.com',
        servicesNames: ['manicure'],
        selectedDate: 'Tue Nov 22 2023',
        selectedTime: '1:00 PM',
        totalAmount: 30,
        status: 'pending',
      },
    ];

    // Filter the data to include only bookings with 'approved' status
    const pendingBookings = simulatedData.filter((booking) => booking.status === 'pending');

    // Sort the bookings based on selectedDate and then selectedTime
   pendingBookings.sort((a, b) => {
     const dateComparison = new Date(a.selectedDate) - new Date(b.selectedDate);
     if (dateComparison !== 0) {
       return dateComparison;
     }

     // Convert the time to 24-hour format for proper comparison
     const convertTo24HourFormat = (timeString) => {
       const [time, period] = timeString.split(' ');
       const [hours, minutes] = time.split(':').map(Number);

       if (period === 'PM' && hours !== 12) {
         return `${hours + 12}:${minutes}`;
       } else if (period === 'AM' && hours === 12) {
         return `00:${minutes}`;
       }

       return `${hours}:${minutes}`;
     };

     const timeA = convertTo24HourFormat(a.selectedTime);
     const timeB = convertTo24HourFormat(b.selectedTime);

     return new Date(`2000-01-01T${timeA}`) - new Date(`2000-01-01T${timeB}`);
   });


    setBookings(pendingBookings);
  }, []);
  handleAccept =()=>{console.log('accept clicked');}
    handleCancel =()=>{console.log('cancel clicked');}

return (
    <View>
      <View>
        <Header title={'New Appointments'} />
      </View>
      <ScrollView style={styles.container}>
        {bookings.map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.selectedTime}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.salonNameText}>{item.userName}</Text>
              <Text style={styles.servicesHeading}>Services : </Text>
              <View style={styles.servicesContainer}>
                {item.servicesNames.map((service, index) => (
                  <Text key={index} style={styles.salonLocation}>
                    {'\u2022'} {service}
                  </Text>
                ))}
              </View>
              <Text style={styles.totalAmountText}>Total Amount: Rs. {item.totalAmount}</Text>
              <View style={styles.line} />
              <View style={styles.locationContainer}>
                <Fonta name="phone" size={18} color="#C9A0A0" style={styles.icon} />
                <Text style={styles.salonLocation}>{item.userContact}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Fonta name="envelope" size={18} color="#C9A0A0" style={styles.icon} />
                <Text style={styles.salonLocation}>{item.userMail}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Fonta name="calendar-alt" size={18} color="#C9A0A0" style={styles.icon} />
                <Text style={styles.salonLocation}>{item.selectedDate}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => handleAccept(item.id, 'Accept')}
                >
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => handleCancel(item.id, 'Cancel')}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
    item: {

      padding: 16,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 10, // Border radius
      backgroundColor: 'white', // Background color for each item
      borderColor: '#C9A0A0', // Border color for each item
      borderWidth: 2, // Border width for each item
      shadowColor: '#C9A0A0', // Shadow color
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5, // Elevation for Android shadow
    },
  servicesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
  },
  timeContainer: {
    backgroundColor: '#C9A0A0',
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    //borderRadius: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
    marginLeft: 50,
    marginRight: 50,
    width: '40%',
  },
  servicesContainer: {},
  salonNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C9A0A0',
    marginBottom: 20,
    textAlign: 'center',
    marginRight: '50%',
  },
  salonLocation: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  acceptButton: {
    backgroundColor: '#C9A0A0',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginLeft: '-40%',
    marginBottom:20,
    //borderColor:'black',
   // borderWidth:2,
  },
  cancelButton: {
    backgroundColor: '#C9A0A0',
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
        marginBottom:20,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SalonNewBookings;
