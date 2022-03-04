import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function ContactsCard({contactInfo}) {
  const {firstName, lastName} = contactInfo;
  return (
    <View style={styles.card}>
      <Text style={styles.primaryText}>{firstName + ' ' + lastName}</Text>
      {/* <View style={styles.infoContainer}>
        <View style={{...styles.icon, backgroundColor: color}}>
          <Text style={styles.iconContent}>{displayName[0]}</Text>
        </View>
        <Text style={styles.primaryText}>{displayName}</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  primaryText: {
    fontSize: 18,
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
