import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import {ContactFormValidation} from '../validation/contactFormSchema';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {Message} from './ErrorMessage';
import api from '../api/service';
import {navigate} from '../navigation/navigation-ref';
import {ProfileContext} from '../context/ProfileContext';

const ContactForm = props => {
  const {navigation, profile} = props;
  const {fetchContacts} = useContext(ProfileContext);
  const [initialValues, setInitialValues] = useState({
    firstName: profile?.firstName ?? '',
    lastName: profile?.lastName ?? '',
    email: profile?.email ?? '',
    company: profile?.company ?? '',
    phone: profile?.phone.toString() ?? '',
    imageUrl: '',
  });
  const createContact = async contactData => {
    try {
      await api.post('/contact', contactData);
      fetchContacts();
      navigate('MyContacts');
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateContact = async contactData => {
    try {
      await api.put(`/contact/${profile._id}`, contactData);
      fetchContacts();
      navigate('MyContacts');
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          props.isEdit ? updateContact(values) : createContact(values);
        }}
        validationSchema={ContactFormValidation}>
        {({values, errors, touched, handleSubmit, handleChange}) => {
          console.log('touced', touched, errors);
          return (
            <>
              <View style={styles.container}>
                <TextInput
                  placeholder="firstname"
                  style={styles.textInput}
                  value={values.firstName}
                  onChangeText={firstName => {
                    handleChange('firstName')(firstName);
                  }}
                />
                {touched.firstName && errors.firstName && (
                  <Message text={errors.firstName} />
                )}
                <TextInput
                  placeholder="lastname"
                  style={styles.textInput}
                  onChangeText={lastName => {
                    handleChange('lastName')(lastName);
                  }}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <Message text={errors.lastName} />
                )}
                <TextInput
                  placeholder="email"
                  style={styles.textInput}
                  value={values.email}
                  onChangeText={email => {
                    handleChange('email')(email);
                  }}
                />
                {touched.email && errors.email && (
                  <Message text={errors.email} />
                )}
                <TextInput
                  placeholder="company"
                  style={styles.textInput}
                  value={values.company}
                  onChangeText={company => {
                    handleChange('company')(company);
                  }}
                />
                {touched.company && errors.company && (
                  <Message text={errors.company} />
                )}
                <TextInput
                  placeholder="phone"
                  style={styles.textInput}
                  keyboardType="numeric"
                  value={values.phone}
                  onChangeText={phone => {
                    handleChange('phone')(phone);
                  }}
                />
                {touched.phone && errors.phone && (
                  <Message text={errors.phone} />
                )}
                <Button
                  title="Submit"
                  style={styles.btn}
                  onPress={() => {
                    handleSubmit(values);
                  }}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ede7e6',
    height: 50,
    borderRadius: 10,
    color: 'black',
    paddingLeft: 20,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
  },
});

export default ContactForm;
