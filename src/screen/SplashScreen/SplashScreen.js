import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Headline, Subheading, Title} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Card elevation={3} style={styles.card}>
          <Card.Content>
            <Animatable.View animation="slideInDown" duration={2500}>
              <Headline style={styles.cardTitle}> M Anime </Headline>
            </Animatable.View>
            <View style={styles.lottieContainer}>
              <LottieView
                style={styles.lottieView}
                source={require('../../../assets/animations/home.json')}
                autoPlay
                loop={false}
              />
              <Animatable.View animation="slideInRight" duration={2500}>
                <Subheading style={styles.cardContent}>
                  အိမ်မှာနေပါ၊ M-Anime ကြည့်၍ အပန်းဖြေပါ။
                </Subheading>
              </Animatable.View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  cardTitle: {
    marginTop: hp(5),
    paddingTop: hp(3),
    textAlign: 'center',
    fontFamily: 'Oswald',
    color: '#33a0ff',
    fontWeight: 'bold',
    fontSize: hp(4.2),
  },
  root: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  lottieView: {
    width: wp('100%'),
  },
  cardContent: {
    marginTop: hp(8),
    textAlign: 'center',
    fontFamily: 'Oswald',
    color: '#33a0ff',
  },
  lottieContainer: {
    marginTop: hp(16),
  },
});
