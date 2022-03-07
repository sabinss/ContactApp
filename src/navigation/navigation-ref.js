import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export const navigate = name => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
};

export const goBack = () => navigationRef.current?.goBack();

export const getCurrentRouteName = () =>
  navigationRef.current?.getCurrentRoute();
