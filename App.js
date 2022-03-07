import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
const Stack = createStackNavigator();

const ModalStack = createStackNavigator();

import CreateContact from './src/screens/CreateContact';
import Profile from './src/screens/Profile';
import MyContact from './src/screens/MyContact';
import {navigationRef} from './src/navigation/navigation-ref';
import {navigate} from './src/navigation/navigation-ref';
import {EditProfile} from './src/screens/EditProfile';
import {
  ProfileContextProvider,
  ProfileContext,
} from './src/context/ProfileContext';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <ProfileContextProvider>
        <Stack.Navigator initialRouteName="MyContacts">
          <Stack.Screen
            name="MyContacts"
            component={MyContact}
            options={({navigation}) => ({
              title: 'Contacts',
              headerRight: () => {
                return (
                  <Button
                    onPress={() => {
                      navigation.navigate('CreateContact', {profile: null});
                    }}
                    title="Add"
                  />
                );
              },
            })}
          />
          <ModalStack.Group screenOptions={{presentation: 'modal'}}>
            <ModalStack.Screen name="CreateContact" component={CreateContact} />
          </ModalStack.Group>

          <ModalStack.Group screenOptions={{presentation: 'modal'}}>
            <ModalStack.Screen name="EditProfile" component={EditProfile} />
          </ModalStack.Group>

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({navigation}) => ({
              title: 'Profile',
              headerRight: () => {
                return (
                  <Button
                    onPress={() => {
                      navigation.navigate('EditProfile');
                    }}
                    title="Edit"
                  />
                );
              },
            })}
          />
        </Stack.Navigator>
      </ProfileContextProvider>
    </NavigationContainer>
  );
};

export default App;
