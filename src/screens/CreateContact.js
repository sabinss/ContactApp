import React from 'react';
import {View, Text} from 'react-native';
import ContactForm from '../components/Form';

const CreateContact = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ContactForm isEdit={false} />
    </View>
  );
};

export default CreateContact;
