
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Button,Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Header from '../components/Header';
import UserBookings from './screens/UserBookedAppointment';

const TimeSlot = ({ time, onPress, selected }) => (
  <TouchableOpacity
    style={[styles.timeSlot, selected && styles.selectedTimeSlot]}
    onPress={onPress}
  >
    <Text style={styles.timeSlotText}>{time}</Text>
  </TouchableOpacity>
);

const SelectDate = ({ route }) => {
  const { salonId, selectedServiceIds, totalAmount } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigation = useNavigation();
   const minimumDate = new Date();
    minimumDate.setDate(minimumDate.getDate() + 1);
      const status='Pending';


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const handleTimeSlotPress = (time) => {
    setSelectedTime(time);
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const formattedHour = hour < 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`;
      timeSlots.push(formattedHour);
    }
    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  const handleBook = () => {
    /*if (selectedDate && selectedTime) {
          const formattedDate = selectedDate.toISOString();

      navigation.navigate('UserBookedAppointment', {
                                         salonId,
                                         selectedServiceIds,
                                         totalAmount,
                                         selectedDate:formattedDate,
                                         selectedTime,
                                         status,
                                       });
    } else {
      Alert.alert('Incomplete Selection', 'Please select both date and time to proceed.');
    }*/
     navigation.navigate('UserBookedAppointment', {
                                             salonId,
                                             selectedServiceIds,
                                             totalAmount,
                                            // selectedDate:formattedDate,
                                             selectedTime,
                                             status,
                                           });
  };

  return (
    <View style={styles.container}>
            <Header title={'Appointments'} />

      <View style={styles.contentContainer}>

        <Text style={styles.selectDateHeading}>Select Date</Text>

        <TouchableOpacity style={styles.selectDateButton} onPress={showDatePicker}>
          <Text style={styles.selectDateButtonText}>Select Date</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={minimumDate}
                     maximumDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)} // Allow selection of the current date and future dates
// Allow selection of the current date and future dates
        />

        <View style={styles.selectedDateContainer}>
          {selectedDate && <Text style={styles.selectedDateText}> {selectedDate.toDateString()}</Text>}
        </View>

        <Text style={styles.selectDateHeading}>Select Time</Text>
        <View style={styles.timeSlotsContainer}>
          {[0, 1, 2].map((row) => (
            <View key={row} style={styles.timeSlotsRow}>
              {timeSlots.slice(row * 3, row * 3 + 3).map((time) => (
                <TimeSlot
                  key={time}
                  time={time}
                  onPress={() => handleTimeSlotPress(time)}
                  selected={selectedTime === time}
                />
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.selectedDateText}>{selectedTime}</Text>
      </View>

      <View style={styles.totalAmountContainer}>
        <View style={styles.totalAmountTextContainer}>
          <Text style={styles.totalAmountText}>Total Amount: Rs {totalAmount}</Text>
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  timeSlotsContainer: {
    marginTop: 20,
  },
  timeSlotsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  selectDateButton: {
    padding: 20,
    backgroundColor: '#C9A0A0',
    alignItems: 'center',
    marginTop: 30,
  },
  selectDateButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  timeSlot: {
    padding: 30,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#C9A0A0',
    backgroundColor: '#F3E9E9',
    flex: 2,
    margin: 5,
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#C9A0A0',
  },
  timeSlotText: {
    color: 'black',
    fontSize: 20,
  },
  selectedDateContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  selectedDateText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  selectDateHeading: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginLeft: 10,
  },
  bookButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 8,
    width: 90,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  totalAmountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
});

export default SelectDate;
