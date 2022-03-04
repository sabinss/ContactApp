import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import api from '../api/service';
import ContactsCard from '../components/ContactCard';

const MyContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const contacts = await api.get('/contact');
        console.log('contacts', contacts);
        setContacts(contacts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={search}
        onChangeText={event => {
          console.log('111', event);
          setSearch(event);
        }}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={contactList}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}}>
              <ContactsCard contactInfo={item} />
            </TouchableOpacity>
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
  },
});

export default MyContact;
