import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleView from '../components/CircleView';
import Divider from './Divider';

export default function ContactsCard({contactInfo, handleDelete, onPress}) {
  const {_id, firstName, lastName} = contactInfo;
  return (
    <>
      <View style={styles.card}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={onPress}>
          <CircleView firstLetter={contactInfo['firstName'][0]} />
          <Text style={styles.primaryText}>{firstName + ' ' + lastName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDelete(_id);
          }}>
          <Icon name="trash-can-outline" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  primaryText: {
    fontSize: 18,
    marginLeft: 20,
  },
  iconContent: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 24,
    color: 'white',
    marginHorizontal: 10,
  },
  icon: {
    borderRadius: 25,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    padding: 1,
    backgroundColor: 'green',
  },
});
