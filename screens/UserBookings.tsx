import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Fonta from 'react-native-vector-icons/FontAwesome5';

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulated data (unchanged)
    const simulatedData = [
      {
        id: 1,
        salonName: 'Salon A',
        salonLocation: 'location A',
        salonContact: 35556789,
        servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
        selectedDate: 'Mon Nov 21 2023',
        selectedTime: '10:00 AM',
        totalAmount: 50,
        status: 'approved',
      },
       {
              id: 2,
              salonName: 'Salon B',
              salonLocation: 'location B',
              salonContact: 35556789,
              servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
              selectedDate: 'Mon Nov 21 2023',
              selectedTime: '10:00 AM',
              totalAmount: 50,
              status: 'approved',
            },
             {
                    id: 3,
                    salonName: 'Salon B',
                    salonLocation: 'location C',
                    salonContact: 35556789,
                    servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
                    selectedDate: 'Mon Nov 21 2023',
                    selectedTime: '9:00 AM',
                    totalAmount: 500,
                    status: 'approved',
                  },
                   {
                          id: 4,
                          salonName: 'Salon C',
                          salonLocation: 'location C',
                          salonContact: 35556789,
                          servicesNames: ['haircut', 'soft glam makeup', 'Facial', 'Rebounding'],
                          selectedDate: 'Mon Nov 22 2023',
                          selectedTime: '10:00 AM',
                          totalAmount: 50,
                          status: 'approved',
                        },
      // ... (remaining simulated data)
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
              <Text style={styles.salonNameText}>{item.salonName}</Text>
              <Text style={styles.servicesHeading}>Services:</Text>
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
                <Fonta name="map-marker-alt" size={18} color="#C9A0A0" />
                <Text style={styles.salonLocation}>{item.salonLocation}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Fonta name="phone" size={18} color="#C9A0A0" />
                <Text style={styles.salonLocation}>{item.salonContact}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Fonta name="calendar-alt" size={18} color="#C9A0A0" />
                <Text style={styles.salonLocation}>{item.selectedDate}</Text>
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
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
    //borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  salonNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C9A0A0',
    marginTop: 10,
    textAlign: 'center',
    marginBottom:10,
    marginTop:-20,
    marginRight:'50%',

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
  salonPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  phoneText: {
    marginTop: 10,
    color: 'grey',
    fontSize: 16,
  },
  salonLocation: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
});

export default UserBookings;
