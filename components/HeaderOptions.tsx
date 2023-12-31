
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const HeaderOptions = () => {
  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#C9A0A0',
      elevation: 0,
      shadowOpacity: 0,
      height: 200,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 10,
    },
    headerTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'center',
    },
    logoImage: {
      width: 70,
      height: 60,
      borderRadius: 40,
      marginRight: 10,
    },
  });

  return {
    headerStyle: styles.headerContainer,
    headerTitleStyle: styles.headerTitleStyle,
    headerTitle: ({ style }) => (
      <View style={styles.headerTitleContainer}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={{ ...style, ...styles.headerTitleStyle }}>BeautifyMe</Text>
      </View>
    ),
  };
};

export default HeaderOptions;
