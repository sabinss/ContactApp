import React from 'react';
import {View, Text} from 'react-native';

const Message = ({text, position, textStyle}) => {
  return (
    <View style={{color: 'red'}}>
      <Text style={{color: 'red'}}>{text}</Text>
    </View>
  );
};

export {Message};
