import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import UserNavigation from './UserNavigation';
import SalonNavigation from './SalonNavigation';
import AppNavigation from './AppNavigation';

export default function App() {
  return (


    /* <SalonNavigation/>*/


<UserNavigation/>

/* <AppNavigation/>*/


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
