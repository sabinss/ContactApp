import React, {useContext} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleView from '../components/CircleView';
import Divider from '../components/Divider';
import {ProfileContext} from '../context/ProfileContext';

const ICON_SIZE = 25;
const COLOR = '#244cff';
const FONT_SIZE = 18;

const PROFILE_CARDS = [
  {
    title: 'message',
    icon: 'message',
  },
  {
    title: 'mobile',
    icon: 'phone',
  },
  {
    title: 'video',
    icon: 'video',
  },
  {
    title: 'mail',
    icon: 'email',
  },
];

const WIDTH = 90;
const HEIGHT = 70;

const Card = () => {
  const profileContext = useContext(ProfileContext);
  return PROFILE_CARDS.map(data => {
    console.log(data.title);
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          data.title == 'message' &&
            Linking.openURL('sms:' + profileContext?.profile.phone);
        }}>
        <Icon name={data.icon} size={ICON_SIZE} color={COLOR} />
        <Text style={styles.title}>{data.title}</Text>
      </TouchableOpacity>
    );
  });
};

const ProfileHeader = ({name}) => {
  return (
    <View style={styles.profileHeader}>
      <CircleView firstLetter={name[0]} circleSize={90} />
      <Text style={styles.profileHeader_name}>{name}</Text>
    </View>
  );
};

const Profile = ({route, navigation}) => {
  const profile = route?.params?.profile;
  Profile.navigationOptions = navData => {
    return {
      headertTitle: 'test',
    };
  };
  return (
    <View style={styles.container}>
      <ProfileHeader name={profile.firstName} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Card />
      </View>
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={() => {
          Linking.openURL(`tel:${profile.phone}`);
        }}>
        <Text style={{marginVertical: 3}}>mobile</Text>
        <Text style={{color: '#244cff', fontSize: FONT_SIZE}}>
          {profile.phone}
        </Text>
      </TouchableOpacity>
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('sms:' + profile.phone);
          }}>
          <Text style={styles.text}>Send Message</Text>
        </TouchableOpacity>
        <Divider />
        <Text style={styles.text}>Share Contact</Text>
        <Divider />
        <Text style={styles.text}>Add to Favourites</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: COLOR,
    marginVertical: 10,
    fontSize: FONT_SIZE,
    marginBottom: 10,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardWrapper: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  mobileTxt: {},
  profileHeader_name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 7,
  },
  card: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
  },
});

export default Profile;
