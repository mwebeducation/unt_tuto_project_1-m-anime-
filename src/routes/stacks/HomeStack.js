import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screen/TabScreen/HomeScreen';
import {Header, Input} from 'react-native-elements';
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
        icon: 'md-notifications-outline',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
      centerComponent={{text: 'M~Anime', style: styles.headerTitle}}
      rightComponent={{
        icon: 'search',
        type: 'ionicon',
        color: '#f5f6fa',
      }}
    />
  );
};

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{header: customHeader}}>
      <Stack.Screen name="Home" component={HomeScreen} />
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
