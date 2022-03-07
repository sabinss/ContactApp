import React, {useEffect, useState} from 'react';
import api from '../api/api';

const ProfileContext = React.createContext(null);

const ProfileContextProvider = ({children}) => {
  const [profile, setProfile] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const updateProfile = profile => {
    setProfile(profile);
  };

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const result = await api.get('/contact');
      setContacts(result?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{profile, updateProfile, contacts, fetchContacts, loading}}>
      {children}
    </ProfileContext.Provider>
  );
};

export {ProfileContextProvider, ProfileContext};
