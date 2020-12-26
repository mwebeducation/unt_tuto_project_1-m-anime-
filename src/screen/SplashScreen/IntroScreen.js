/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Card} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: '1',
    text: 'မင်္ဂလာပါခင်ဗျာ \n M~Anime မှ ကြိုဆိုပါသည်။',
    image: require('../../../assets/introImg/SuperThank.png'),
  },
  {
    key: '2',
    text:
      'Account တစ်ခုဖွင့်ထားယုံဖြင့် Mac, Linux, Window, Android စသည့် မည်သည့် platform တွင် မဆို လွယ်ကူလျှင်မြန်စွာ ကြည့်ရှုနိုင်ပါသည်။',
    image: require('../../../assets/introImg/WorkFromHome.png'),
  },
  {
    key: '3',
    text:
      'ဘာသာပြန် Animation ဇတ်ကားများအပြင် ဘာသာပြန် Noval များ Manga များကိုလဲ ဝယ်ယူဖတ်ရှုနိုင်ပါသည်။',
    image: require('../../../assets/introImg/MobileUser.png'),
  },
  {
    key: '4',
    text:
      'Online Paymoment များစွာထည့်သွင်းပေးထားသောကြောင့် လွယ်ကူစွာ ငွေပေးချေနိုင်ပြီး',
    image: require('../../../assets/introImg/MobilePay.png'),
  },
  {
    key: '5',
    text: 'User Data များကို အလုံခြုံဆုံးဖြစ်အောင် ပြုလုပ်ပေးထားပါသည်။',
    image: require('../../../assets/introImg/Login.png'),
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.root}>
      <Card containerStyle={{elevation: 12, backgroundColor: '#f1f2f6'}}>
        <Card.Image source={item.image} resizeMode="cover" style={styles.img} />
        <Card.Title style={styles.text}>{item.text}</Card.Title>
      </Card>
    </View>
  );
};

const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={(_) => navigation.navigate('Login')}
      onSkip={(_) => navigation.navigate('Login')}
      showSkipButton={true}
    />
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2089dc',
  },
  img: {
    width: wp(90),
    height: hp(40),
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Padauk',
    marginTop: hp(3),
    fontSize: hp(2),
  },
});
