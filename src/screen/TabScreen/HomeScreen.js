import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllScreen from '../components/HomeScreen/AllScreen';
import SerieScreen from '../components/HomeScreen/SerieScreen';
import MovieScreen from '../components/HomeScreen/MovieScreen';
import NovalScreen from '../components/HomeScreen/NovalScreen';
import MangaScreen from '../components/HomeScreen/MangaScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View} from 'react-native-animatable';

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#2089dc',
        inactiveTintColor: '#636e72',
        pressColor: '#d2dae2',
        indicatorStyle: '#2089dc',
        labelStyle: {
          textTransform: 'capitalize',
          fontFamily: 'PlayfairDisplay',
          fontSize: hp(2.1),
        },
        tabStyle: {width: wp(34), elevation: 5},
      }}>
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Serie" component={SerieScreen} />
      <Tab.Screen name="Movie" component={MovieScreen} />
      <Tab.Screen name="Noval" component={NovalScreen} />
      <Tab.Screen name="Manga" component={MangaScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
