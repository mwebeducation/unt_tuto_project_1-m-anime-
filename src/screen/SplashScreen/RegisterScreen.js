/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
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
import Modal from 'react-native-modal';

const initialValues = {
  name: '',
  email: '',
  password: '',
  comfirmPassword: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(3).max(12).required(),
  comfirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
});

const RegisterScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const Navigate = useNavigation();
  const [invisiblePass, setInvisiblePass] = React.useState(true);
  const [invisibleComfirmPas, setInvisibleComfirmPas] = React.useState(true);
  const email_ref = React.useRef();
  const pass_ref = React.useRef();
  const comfirm_ref = React.useRef();
  return (
    <View>
      <Modal isVisible={visible} style={styles.modal}>
        <Card>
          <Card.Title
            h4
            h4Style={{textAlign: 'center', color: '#33a0ff', fontSize: hp(3)}}>
            {' '}
            Successful{' '}
          </Card.Title>
          <Card.Divider />
          <Text style={styles.modalText}>
            Your registering is completed, Now Login with Your Account
          </Text>
          <Button
            type="solid"
            title="OK"
            onPress={() => Navigate.navigate('Login')}
          />
        </Card>
      </Modal>
      <View style={styles.root}>
        <Surface style={styles.surface}>
          <Card containerStyle={styles.card}>
            <Card.Title h3 h3Style={styles.cardTitle}>
              Register
            </Card.Title>
            <Card.Divider />
            <View style={styles.viewForm}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => setVisible(!visible)}>
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
                      {/* username */}
                      <Input
                        label="Full Name"
                        labelStyle={{color: '#000'}}
                        placeholder="Min Kg Kyaw"
                        containerStyle={styles.Input}
                        leftIcon={{
                          type: 'ionicon',
                          name: 'person',
                        }}
                        rightIcon={
                          values.name.length < 1
                            ? null
                            : touched.name && errors.name
                            ? {type: 'material', name: 'error', color: 'red'}
                            : {
                                type: 'ionicon',
                                name: 'shield-checkmark',
                                color: '#4cd137',
                              }
                        }
                        value={values.name}
                        onChangeText={handleChange('name')}
                        returnKeyType="next"
                        onBlur={handleBlur('name')}
                        onSubmitEditing={() => email_ref.current.focus()}
                        blurOnSubmit={false}
                        errorMessage={touched.name && errors.name}
                      />
                      {/* email */}
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
                        ref={email_ref}
                        errorMessage={touched.email && errors.email}
                      />
                      {/* password */}
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
                          invisiblePass
                            ? {
                                type: 'ionicon',
                                name: 'eye-sharp',
                                onPress: () => setInvisiblePass(!invisiblePass),
                              }
                            : {
                                type: 'ionicon',
                                name: 'md-eye-off-sharp',
                                onPress: () => setInvisiblePass(!invisiblePass),
                              }
                        }
                        secureTextEntry={invisiblePass}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        ref={pass_ref}
                        returnKeyType="next"
                        autoCapitalize="none"
                        errorMessage={touched.password && errors.password}
                        onSubmitEditing={() => comfirm_ref.current.focus()}
                        blurOnSubmit={false}
                      />
                      {/* comfirm password */}
                      <Input
                        label="Comfirm Password"
                        labelStyle={{color: '#000'}}
                        placeholder="Renter Your Password"
                        containerStyle={styles.Input}
                        leftIcon={{
                          type: 'ionicon',
                          name: 'lock-closed-sharp',
                        }}
                        rightIcon={
                          invisibleComfirmPas
                            ? {
                                type: 'ionicon',
                                name: 'eye-sharp',
                                onPress: () =>
                                  setInvisibleComfirmPas(!invisibleComfirmPas),
                              }
                            : {
                                type: 'ionicon',
                                name: 'md-eye-off-sharp',
                                onPress: () =>
                                  setInvisibleComfirmPas(!invisibleComfirmPas),
                              }
                        }
                        secureTextEntry={invisibleComfirmPas}
                        value={values.comfirmPassword}
                        onChangeText={handleChange('comfirmPassword')}
                        onBlur={handleBlur('comfirmPassword')}
                        ref={comfirm_ref}
                        returnKeyType="done"
                        autoCapitalize="none"
                        errorMessage={
                          touched.comfirmPassword && errors.comfirmPassword
                        }
                      />
                      <Button
                        icon={{
                          name: 'send',
                          color: 'white',
                          type: 'ionicon',
                        }}
                        buttonStyle={styles.registerBtn}
                        title="Register"
                        iconRight={true}
                        disabled={!isValid}
                        onPress={handleSubmit}
                      />
                      <View style={styles.otherBtn}>
                        <TouchableOpacity
                          style={styles.loginBtn}
                          onPress={() => Navigate.navigate('Login')}>
                          <Text>
                            Already have an Account, {''}
                            <Text style={styles.registerText}>Login!</Text>
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              </Formik>
            </View>
          </Card>
        </Surface>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginVertical: hp(3.5),
    alignItems: 'center',
    width: wp('86%'),
    elevation: 5,
  },
  surface: {
    alignItems: 'center',
    elevation: 3,
    width: wp('95%'),
    height: hp('85.5%'),
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
  loginBtn: {
    marginTop: hp(1),
  },
  registerText: {
    color: '#33a0ff',
  },
  registerBtn: {
    marginTop: hp(1.5),
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'PlayfairDisplay',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: hp(3),
  },
});
