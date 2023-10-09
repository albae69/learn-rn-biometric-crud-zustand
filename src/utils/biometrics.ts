import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics({
  allowDeviceCredentials: true,
});

const checkAvailSensor = async () => {
  try {
    const {biometryType, available} = await rnBiometrics.isSensorAvailable();
    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('TouchID is supported');
      return true;
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported');
      return true;
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported');
      return true;
    }
  } catch (error) {
    console.log('Biometrics not supported');
    return false;
  }
};

const triggerBiometrics = async () => {
  try {
    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: 'Secure Note App',
    });
    if (success) {
      console.log('successful biometrics provided');
      return true;
    } else {
      console.log('user cancelled biometric prompt');
      return false;
    }
  } catch (error) {
    console.error('error while triggerBiometrics', error);
    return false;
  }
};

export default {checkAvailSensor, triggerBiometrics};
