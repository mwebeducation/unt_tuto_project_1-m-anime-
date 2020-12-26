/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Button, Card, Input, Text} from 'react-native-elements';
import {Surface} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(3).max(12).required(),
});

const LoginScreen = () => {
  const Navigate = useNavigation();
  const [data, setData] = React.useState({
    secureText: true,
  });
  const pass_ref = React.useRef();
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <Animatable.Image
          animation="fadeInDown"
          style={styles.img}
          source={require('../../../assets/img/Logo.png')}
          duration={2500}
        />
      </View>
      <Animatable.View
        style={styles.cardContainer}
        animation="fadeIn"
        duration={3000}>
        <Surface style={styles.surface}>
          <Card containerStyle={styles.card}>
            <Card.Title h3 h3Style={styles.cardTitle}>
              Login
            </Card.Title>
            <Card.Divider />
            <View style={styles.viewForm}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(_) => Navigate.navigate('Tab')}>
                {({
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  values,
                  isValid,
                }) => {
                  return (
                    <View>
                      <Input
                        label="Email"
                        labelStyle={{color: '#000'}}
                        placeholder="example@address.com"
                        containerStyle={styles.Input}
                        leftIcon={{
                          type: 'ionicon',
                          name: 'mail-sharp',
                        }}
                        rightIcon={
                          values.email.length < 1
                            ? null
                            : touched.email && errors.email
                            ? {type: 'material', name: 'error', color: 'red'}
                            : {
                                type: 'ionicon',
                                name: 'shield-checkmark',
                                color: '#4cd137',
                              }
                        }
                        value={values.email}
                        onChangeText={handleChange('email')}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onBlur={handleBlur('email')}
                        onSubmitEditing={() => pass_ref.current.focus()}
                        blurOnSubmit={false}
                        errorMessage={touched.email && errors.email}
                      />
                      <Input
                        label="Password"
                        labelStyle={{color: '#000'}}
                        placeholder="Enter Your Password"
                        containerStyle={styles.Input}
                        leftIcon={{
                          type: 'ionicon',
                          name: 'lock-closed-sharp',
                        }}
                        rightIcon={
                          data.secureText
                            ? {
                                type: 'ionicon',
                                name: 'eye-sharp',
                                onPress: () => setData({secureText: false}),
                              }
                            : {
                                type: 'ionicon',
                                name: 'md-eye-off-sharp',
                                onPress: () => setData({secureText: true}),
                              }
                        }
                        secureTextEntry={data.secureText}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        ref={pass_ref}
                        returnKeyType="done"
                        autoCapitalize="none"
                        errorMessage={touched.password && errors.password}
                      />
                      <Button
                        icon={{
                          name: 'send',
                          color: 'white',
                          type: 'ionicon',
                        }}
                        buttonStyle={styles.loginBtn}
                        title="Login"
                        iconRight={true}
                        disabled={!isValid}
                        onPress={handleSubmit}
                      />
                      <View style={styles.otherBtn}>
                        <TouchableOpacity
                          style={styles.registerBtn}
                          onPress={() => Navigate.navigate('Register')}>
                          <Text>
                            Don't Have an Account? {''}
                            <Text style={styles.registerText}>
                              Register Now!
                            </Text>
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.forgetBtn}
                          onPress={() => Navigate.navigate('Tab')}>
                          <Text> Forget Password? </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              </Formik>
            </View>
          </Card>
        </Surface>
      </Animatable.View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cardContainer: {
    flex: 3,
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(1),
  },
  img: {
    width: wp(40),
    height: hp(22),
  },
  card: {
    marginVertical: hp(3.5),
    alignItems: 'center',
    width: wp('86%'),
    elevation: 8,
  },
  surface: {
    alignItems: 'center',
    elevation: 3,
    width: wp('95%'),
    height: hp('64%'),
    marginTop: hp(2),
  },
  cardTitle: {
    color: '#33a0ff',
  },
  Input: {
    width: wp('80%'),
  },
  otherBtn: {
    marginVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetBtn: {
    marginTop: hp(1),
  },
  forgetText: {
    color: '#000',
  },
  registerBtn: {
    marginTop: hp(1),
  },
  registerText: {
    color: '#33a0ff',
  },
  loginBtn: {
    marginTop: hp(1.5),
  },
});
