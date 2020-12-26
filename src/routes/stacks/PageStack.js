import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageScreen from '../../screen/TabScreen/PageScreen';
import {Header} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createStackNavigator();

const customHeader = () => {
  return (
    <Header
      centerComponent={{
        text: 'Page For You',
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
export default function PageStack() {
  return (
    <Stack.Navigator screenOptions={{header: customHeader}}>
      <Stack.Screen name="Page" component={PageScreen} />
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
