/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, Subheading, Surface} from 'react-native-paper';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {View} from 'react-native';
import {Data} from '../../../data/data';
import * as Animated from 'react-native-animatable';

const AllScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <Card
      elevation={3}
      style={{width: wp(40), marginHorizontal: wp(2)}}
      onPress={() => navigation.navigate('AllDetail', {Datas: item})}>
      <Card.Cover style={{width: wp(40), height: hp(14)}} source={item.img} />
      <Card.Title titleStyle={{fontSize: hp(1.3)}} title={item.title} />
    </Card>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* popular */}
      <Surface
        style={{marginTop: hp(2), paddingVertical: hp(1), marginBottom: hp(1)}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: wp(2),
            marginBottom: hp(1),
          }}>
          <Animated.Text animation="fadeInRightBig" style={{textAlign: 'left'}}>
            <Subheading> Popular </Subheading>
          </Animated.Text>
          <Animated.Text animation="fadeInLeftBig" style={{textAlign: 'right'}}>
            <Subheading> View All </Subheading>
          </Animated.Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Surface>
      {/* Series */}
      <Surface style={{marginVertical: hp(1), paddingVertical: hp(1)}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: wp(2),
            marginBottom: hp(1),
          }}>
          <Animated.Text animation="fadeInRightBig" style={{textAlign: 'left'}}>
            <Subheading> Popular </Subheading>
          </Animated.Text>
          <Animated.Text animation="fadeInLeftBig" style={{textAlign: 'right'}}>
            <Subheading> View All </Subheading>
          </Animated.Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Surface>
      {/* Movie */}
      <Surface style={{marginVertical: hp(1), paddingVertical: hp(1)}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: wp(2),
            marginBottom: hp(1),
          }}>
          <Animated.Text style={{textAlign: 'left'}}>
            <Subheading> Movie </Subheading>
          </Animated.Text>
          <Animated.Text style={{textAlign: 'right'}}>
            <Subheading> View All </Subheading>
          </Animated.Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Surface>
      {/* Noval */}
      <Surface style={{marginVertical: hp(1), paddingVertical: hp(1)}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: wp(2),
            marginBottom: hp(1),
          }}>
          <Animated.Text animation="fadeInRightBig" style={{textAlign: 'left'}}>
            <Subheading> Noval </Subheading>
          </Animated.Text>
          <Animated.Text animation="fadeInLeftBig" style={{textAlign: 'right'}}>
            <Subheading> View All </Subheading>
          </Animated.Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Surface>
      {/* Manga */}
      <Surface style={{marginTop: hp(1), paddingVertical: hp(1)}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: wp(2),
            marginBottom: hp(1),
          }}>
          <Animated.Text animation="fadeInRightBig" style={{textAlign: 'left'}}>
            <Subheading> Manga </Subheading>
          </Animated.Text>
          <Animated.Text animation="fadeInLeftBig" style={{textAlign: 'right'}}>
            <Subheading> View All </Subheading>
          </Animated.Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Surface>
    </ScrollView>
  );
};

export default AllScreen;
