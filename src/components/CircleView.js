import React from 'react';
import {View, Text} from 'react-native';

const CircleView = ({firstLetter, circleSize}) => {
  const size = circleSize ?? 50;
  return (
    <View
      style={{
        backgroundColor: '#e1e5eb',
        width: size,
        height: size,
        borderRadius: size / 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{firstLetter}</Text>
    </View>
  );
};

export default CircleView;
