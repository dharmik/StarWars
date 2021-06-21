import { Toast } from 'native-base';
import { Alert } from 'react-native';
import { ApplicationStyles as styles } from '../theme';
import Strings from './Strings';

// Show Confirmation Alert Dialog
const showConfirmation = (
  title,
  message,
  firstText,
  secondText,
  firstPress,
  secondPress
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: firstText,
        onPress: firstPress
      },
      {
        text: secondText,
        onPress: secondPress,
        style: 'cancel'
      }
    ],
    { cancelable: true }
  );
};

// Show Confirmation Prompt alert Dialog
const showPromptConfirmation = (title, message, defaultValue, callBack) => {
  Alert.prompt(title, message, callBack, 'plain-text', defaultValue);
};

// Show Alert information with button press
const showInfoAlert = (title, message, buttonTitle, buttonPress) => {
  Alert.alert(title, message, [
    {
      text: buttonTitle,
      onPress: buttonPress
    }
  ]);
};

// Show Toast message
const showToastMsg = (message, buttonText = Strings.ok) =>
  Toast.show({
    text: message,
    buttonText: buttonText,
    position: 'bottom',
    duration: 3000,
    style: styles.toast.toastContainer,
    textStyle: styles.toast.textStyle
  });

const getIdFromUrl = (url) => {
  const arrUrl = url.split('/');
  return arrUrl[arrUrl.length - 2];
};

export default {
  showConfirmation,
  showPromptConfirmation,
  showInfoAlert,
  showToastMsg,
  getIdFromUrl
};
