import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PageStack from './stacks/PageStack';
import LoveStack from './stacks/LoveStack';
import HomeStack from './stacks/HomeStack';
import ClipStack from './stacks/ClipStack';
import ProfileStack from './stacks/ProfileStack';
import {Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#2089dc"
      inactiveColor="#636e72"
      barStyle={styles.root}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="flag" type="feather" color={color} size={28} />
          ),
        }}
        name="Page"
        component={PageStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="angellist"
              type="font-awesome"
              color={color}
              size={28}
            />
          ),
        }}
        name="Clip"
        component={ClipStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="md-home-outline"
              type="ionicon"
              color={color}
              size={28}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="md-heart-outline"
              type="ionicon"
              color={color}
              size={28}
            />
          ),
        }}
        name="Love"
        component={LoveStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-o" type="font-awesome" color={color} size={28} />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    elevation: 5,
  },
});
