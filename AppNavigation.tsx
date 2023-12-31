
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash'; // Update the path accordingly
import Login from './screens/Login'; // Update the path accordingly
import ForgotPassword from './screens/ForgotPassword'; // Update the path accordingly
import WhoAreYou from './screens/WhoAreYou'; // Update the path accordingly
import SignUp from './screens/SignUp';
const MainStack = createNativeStackNavigator();

// AppNavigation component
const AppNavigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Add your authentication logic here to determine if the user is logged in
    // For example, you can check if a user token is present in AsyncStorage
    // For this example, I'll use a simple state to simulate the login status
    setTimeout(() => {
      setLoggedIn(true);
    }, 2000); // Simulating a delay (e.g., checking user token asynchronously)
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Splash">
        <MainStack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

         <MainStack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{ headerShown: false }}
                />

         <MainStack.Screen
                           name="WhoAreYou"
                           component={WhoAreYou}
                           options={{ headerShown: false }}
                         />
          <MainStack.Screen
                                    name="SignUp"
                                    component={SignUp}
                                    options={{ headerShown: false }}
                                  />

      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
