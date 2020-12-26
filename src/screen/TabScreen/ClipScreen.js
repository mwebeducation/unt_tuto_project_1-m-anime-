import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CameraScreen from '../components/ClipScreen/CameraScreen';
import FollowScreen from '../components/ClipScreen/FollowScreen';
import ForYouScreen from '../components/ClipScreen/ForYouScreen';
import TopScreen from '../components/ClipScreen/TopScreen';
import YourClipScreen from '../components/ClipScreen/YourClipScreen';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();
const ClipScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="ForYou"
      lazy={true}
      tabBarOptions={{
        showIcon: true,
        labelStyle: {
          fontFamily: 'PlayfairDisplay',
          fontSize: hp(2.1),
          textTransform: 'capitalize',
        },
        inactiveTintColor: '#636e72',
        activeTintColor: '#2089dc',
        indicatorStyle: '#2089dc',
        style: {
          width: wp('100%'),
          padding: 0,
          backgroundColor: 'transparent',
          elevation: 5,
        },
      }}>
      <Tab.Screen name="Following" component={FollowScreen} />
      <Tab.Screen
        name="ForYou"
        component={ForYouScreen}
        options={{
          tabBarLabel: 'For You',
        }}
      />
      <Tab.Screen name="Top" component={TopScreen} />
    </Tab.Navigator>
  );
};

export default ClipScreen;
