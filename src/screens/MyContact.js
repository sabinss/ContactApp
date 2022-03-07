import React, {useEffect, useState, useMemo, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import api from '../api/service';
import ContactsCard from '../components/ContactCard';
import {showToast} from '../helper/utility';
import {ProfileContext} from '../context/ProfileContext';

const MyContact = ({navigation}) => {
  const {updateProfile, contacts, fetchContacts, loading} =
    useContext(ProfileContext);
  const [search, setSearch] = useState('');

  const contactList = useMemo(() => {
    if (!search) return contacts;
    return contacts.filter(contact => {
      return (
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search, contacts]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async id => {
    try {
      setLoading(true);
      await api.delete(`/contact/${id}`);
      fetchContacts();
      showToast('Your contact has been deleted successsfully');
      setLoading(false);
    } catch (error) {
      console.log('erorr', error);
      setLoading(false);
      showToast('Something went wrong', 'red');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#a39f95"
        style={styles.textInput}
        placeholder="search contact"
        value={search}
        onChangeText={event => {
          setSearch(event);
        }}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={contactList}
          keyExtractor={item => item._id}
          ListHeaderComponent={() =>
            !contactList.length ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                  }}>
                  No contacts found.Search again!
                </Text>
              </View>
            ) : null
          }
          renderItem={({item}) => (
            <ContactsCard
              onPress={() => {
                updateProfile(item);
                navigation.navigate('Profile', {profile: item});
              }}
              contactInfo={item}
              handleDelete={id => {
                deleteContact(id);
              }}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  addIcon: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ede7e6',
    height: 50,
    borderRadius: 10,
    color: 'black',
    paddingLeft: 20,
  },
});

export default MyContact;
