import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import ContactForm from '../components/Form';
import {ProfileContext} from '../context/ProfileContext';

export const EditProfile = ({route}) => {
  const profileContext = useContext(ProfileContext);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ContactForm profile={profileContext.profile} isEdit={true} />
    </View>
  );
};
