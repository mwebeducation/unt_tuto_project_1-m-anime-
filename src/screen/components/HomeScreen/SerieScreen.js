/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Surface, Title} from 'react-native-paper';
import * as Animated from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const SerieScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Surface style={{elevation: 12}}>
        <Animated.View animation="zoomIn" duration={3000}>
          <LottieView
            style={{width: wp(80)}}
            source={require('../../../../assets/animations/404page.json')}
            autoPlay={true}
            loop
          />
          <Animated.Text
            style={{textAlign: 'center', marginBottom: hp(5)}}
            animation="slideInUp"
            duration={3000}>
            <Title style={{color: '#2089dc'}}> No Data, yet! </Title>
          </Animated.Text>
        </Animated.View>
      </Surface>
    </View>
  );
};

export default SerieScreen;
