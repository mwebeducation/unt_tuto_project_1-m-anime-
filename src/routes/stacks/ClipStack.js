import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClipScreen from '../../screen/TabScreen/ClipScreen';
import {Header} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Stack = createStackNavigator();

const customHeader = () => {
  return (
    <Header
      leftComponent={{
        icon: 'md-camera-sharp',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
      centerComponent={{
        text: 'Enjoin with Clip video',
        style: styles.headerTitle,
      }}
      placement="center"
      rightComponent={{
        icon: 'md-person-circle',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
    />
  );
};

export default function ClipStack() {
  return (
    <Stack.Navigator screenOptions={{header: customHeader}}>
      <Stack.Screen name="Clip" component={ClipScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins',
    color: '#fff',
    fontSize: hp(2.3),
  },
});
