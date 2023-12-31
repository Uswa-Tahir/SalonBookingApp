import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Fonta from 'react-native-vector-icons/FontAwesome5';

const SalonConfirmedBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const simulatedData = [
      {
        id: 1,
        userName: 'User A',
        userContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
        selectedDate: 'Mon Nov 20 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'approved',
      },
      {
        id: 2,
        userName: 'User B',
        salonLocation: 'location A',
        userContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup'],
        selectedDate: 'Tues Nov 22 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'approved',
      },
      {
        id: 3,
        userName: 'User C',
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
        servicesNames: ['manicure'],
        selectedDate: 'Tue Nov 22 2023',
        selectedTime: '1:00 PM',
        totalAmount: 30,
        status: 'pending',
      },
    ];

    // Filter the data to include only bookings with 'approved' status
    const approvedBookings = simulatedData.filter((booking) => booking.status === 'approved');

    // Sort the bookings based on selectedDate and then selectedTime
   approvedBookings.sort((a, b) => {
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


    setBookings(approvedBookings);
  }, []);

 // ...

 return (
   <View>
     <View>
       <Header title={'Confirmed Appointments'} />
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
               <Fonta name="calendar-alt" size={18} color="#C9A0A0" style={styles.icon} />
               <Text style={styles.salonLocation}>{item.selectedDate}</Text>
             </View>
           </View>
         </View>
       ))}
     </ScrollView>
   </View>
 );

 // ...

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center', // Center vertically
    justifyContent: 'flex-start', // Align items to the start of the container
  },
  servicesHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 10, // Add margin at the bottom for separation
  },
  timeContainer: {
    backgroundColor: '#C9A0A0',
    padding: 10,
   // borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height:80,
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
  servicesText: {
    fontSize: 20,
    color: 'black',
  },
  salonNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C9A0A0',
    marginTop: 10,
    textAlign: 'center',
        marginRight:'50%',

  },
  salonLocation: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
  totalAmountText: {
  /*  marginTop: 10,
    color: 'black',
    fontSize: 17,
  */ fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginTop:10,
        marginBottom: 10,},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
});

export default SalonConfirmedBookings;
