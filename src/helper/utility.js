import {WToast, Snackbar} from 'react-native-smart-tip';
import {Alert} from 'react-native';

export const showToast = (data, backgroundColor, textColor) => {
  console.log;
  let toastOpts = {
    data: data,
    textColor: textColor ? textColor : '#fff',
    backgroundColor: backgroundColor ? backgroundColor : 'green',
    duration: WToast.duration.SHORT,
    position: WToast.position.BOTTOM,
  };
  WToast.show(toastOpts);
};

export const alert = (title, handleOk, handleCancel) => {
  return Alert.alert(title, 's', [
    {
      text: 'Cancel',
      onPress: () => handleCancel(),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => handleOk()},
  ]);
};
