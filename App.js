import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import CreateContact from './src/screens/CreateContact';
import Profile from './src/screens/Profile';
import MyContact from './src/screens/MyContact';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyContacts">
        <Stack.Screen name="MyContacts" component={MyContact} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
