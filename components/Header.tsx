import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: '#C9A0A0', fontWeight: 'bold', marginLeft: 10 }]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
    //borderBottomWidth: 1.5,  // Add this line to show a bottom border
        //borderBottomColor: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
