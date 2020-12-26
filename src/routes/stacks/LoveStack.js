import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoveScreen from '../../screen/TabScreen/LoveScreen';
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
      centerComponent={{
        text: 'Your Activity && More',
        style: styles.headerTitle,
      }}
      placement="left"
      rightComponent={{
        icon: 'ellipsis-vertical-sharp',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
    />
  );
};

export default function LoveStack() {
  return (
    <Stack.Navigator screenOptions={{header: customHeader}}>
      <Stack.Screen name="Love" component={LoveScreen} />
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
