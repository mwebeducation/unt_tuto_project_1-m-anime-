import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screen/TabScreen/ProfileScreen';
import {Header} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Stack = createStackNavigator();

const nowTime = new Date().getHours();

const customHeader = () => {
  return (
    <Header
      centerComponent={{
        text:
          nowTime < 12
            ? 'Good Morinig'
            : nowTime < 16
            ? 'Good Afternoon'
            : nowTime < 19
            ? 'Good Evening'
            : 'Good Nignt',
        style: styles.headerTitle,
      }}
      placement="left"
      rightComponent={{
        icon: 'settings-outline',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
    />
  );
};
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{header: customHeader}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
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
