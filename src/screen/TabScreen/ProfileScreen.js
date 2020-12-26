/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Avatar, ListItem, Text, Icon, Button} from 'react-native-elements';
import * as Animated from 'react-native-animatable';
import {Card, Title, Paragraph, Surface, Divider} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const List = [
  {
    id: '1',
    icon: 'md-person-circle-sharp',
    type: 'ionicon',
    title: 'ကိုယ်ပိုင်အချက်အလက်',
  },
  {
    id: '2',
    icon: 'coins',
    type: 'font-awesome-5',
    title: 'ငွေဖြည့်ရန်',
  },
  {
    id: '3',
    icon: 'credit',
    type: 'entypo',
    title: 'လက်ကျန်ငွေစစ်ဆေးရန်',
  },
  {
    id: '6',
    icon: 'ios-bulb-sharp',
    type: 'ionicon',
    title: 'About Us',
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <ListItem bottomDivider>
        <Icon name={item.icon} type={item.type} />
        <ListItem.Content>
          <ListItem.Title> {item.title} </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  return (
    <SafeAreaView>
      <Surface>
        <Card elevation={5} style={{height: hp(100)}}>
          <Card.Cover source={require('../../../assets/img/christmas.jpg')} />
          <Animated.View
            animation="bounceInDown"
            duration={3000}
            style={styles.avater}>
            <Avatar
              rounded
              size="xlarge"
              source={require('../../../assets/img/lisa.jpg')}
            />
            <Text h3>Lisa</Text>
          </Animated.View>
          <Card.Content style={styles.textGroup}>
            <Animated.View animation="fadeIn" duration={3000}>
              <Title style={{textAlign: 'center'}}>Clips</Title>
              <Paragraph style={{textAlign: 'center'}}>150</Paragraph>
            </Animated.View>
            <Animated.View animation="fadeIn" duration={3000}>
              <Title style={{textAlign: 'center'}}>Followers</Title>
              <Paragraph style={{textAlign: 'center'}}>41,200</Paragraph>
            </Animated.View>
            <Animated.View animation="fadeIn" duration={3000}>
              <Title style={{textAlign: 'center'}}>Followings</Title>
              <Paragraph style={{textAlign: 'center'}}>1,550</Paragraph>
            </Animated.View>
          </Card.Content>
          <Divider />
          <Card.Content>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={List}
              renderItem={renderItem}
              style={{display: 'flex'}}
            />
          </Card.Content>
          <Button
            onPress={() => navigation.navigate('Login')}
            title="Log Out"
            containerStyle={{marginVertical: hp(1)}}
          />
        </Card>
      </Surface>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avater: {
    alignItems: 'center',
    marginTop: hp(-18),
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp(1.5),
  },
});
