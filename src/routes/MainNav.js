/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNav';
import LoginScreen from '../screen/SplashScreen/LoginScreen';
import RegisterScreen from '../screen/SplashScreen/RegisterScreen';
import AllDetail from '../screen/AllDetail';
import IntroScreen from '../screen/SplashScreen/IntroScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function MainNavigation() {
  const [isLunch, setIsluch] = useState(true);

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem('Lunched', 'success');
  //     console.log('Data SuccessfulySaved');
  //   } catch {
  //     console.log('Failed to save the Data To Storage');
  //   }
  // };

  // const readData = async () => {
  //   try {
  //     await AsyncStorage.getItem('Lunched').then((value) => {
  //       if (value == null) {
  //         saveData();
  //         setIsluch(true);
  //       } else {
  //         setIsluch(false);
  //       }
  //     });
  //   } catch {
  //     console.log('Fail to Read Data');
  //   }
  // };

  // useEffect(() => {
  //   readData();
  // }, []);

  useEffect(() => {
    (async () => {
      const val = await AsyncStorage.getItem('luched');
      if (val === null) {
        await AsyncStorage.setItem('luched', 'access');
        setIsluch(true);
      } else {
        setIsluch(false);
      }
    })();
  }, []);

  console.log(isLunch);
  return (
    <Stack.Navigator
      initialRouteName={isLunch ? 'Intro' : 'Tab'}
      headerMode={false}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AllDetail" component={AllDetail} />
    </Stack.Navigator>
  );
}
