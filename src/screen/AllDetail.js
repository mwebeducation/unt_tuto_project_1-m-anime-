/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Divider, Header, Icon, ListItem, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Avatar, Card, Paragraph, Subheading} from 'react-native-paper';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const AllDetail = ({route}) => {
  const [isLoved, setIsLoved] = React.useState(false);
  const {Datas} = route.params;
  const navigation = useNavigation();
  return (
    <View style={{display: 'flex', flex: 1}}>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          type: 'ionicon',
          color: '#f5f6fa',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={<Text style={styles.text}> {Datas.title} </Text>}
      />
      <ScrollView>
        <Card elevation={3} style={styles.card}>
          <Card.Cover source={Datas.img} />
          <Card.Title
            title={Datas.subTitle}
            subtitle={Datas.page}
            left={(props) => <Avatar.Image {...props} source={Datas.pageImg} />}
            right={() => <Icon name="ellipsis-vertical-sharp" type="ionicon" />}
          />
          <Divider />
          <Card.Actions style={styles.cardBtn}>
            <TouchableOpacity onPress={() => setIsLoved(!isLoved)}>
              {isLoved ? (
                <Icon name="heart" type="ionicon" color="#EA2027" />
              ) : (
                <Icon name="heart-outline" type="ionicon" />
              )}
              <Text> Love </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="movie-filter" type="material-community" />
              <Text> Trailer </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share-social-outline" type="ionicon" />
              <Text> Share </Text>
            </TouchableOpacity>
          </Card.Actions>
          <Divider />
          <Card.Content style={styles.cardContent}>
            <Subheading style={{textAlign: 'center'}}>{Datas.title}</Subheading>
            <View>
              <Paragraph style={styles.paragrahp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis sapiente praesentium temporibus, expedita accusantium
                libero asperiores dolore.
              </Paragraph>
              <TouchableOpacity>
                <Text style={{color: '#0652DD', textAlign: 'right'}}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>
          </Card.Content>
          <Divider />
          <Card.Content>
            {Datas.episodes.map((item) => (
              <ListItem bottomDivider key={item.id}>
                <ListItem.Content>
                  <ListItem.Title>Episode ~ {item.id}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron name="play" type="ionicon" color="#1e272e" />
              </ListItem>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default AllDetail;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Padauk',
    color: '#f5f6fa',
    fontWeight: 'bold',
    fontSize: hp(2.2),
  },
  card: {
    margin: hp(1),
  },
  cardBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardContent: {
    marginVertical: hp(1),
  },
  title: {
    textAlign: 'justify',
    color: '#1e272e',
    fontFamily: 'Padauk',
  },
  paragrahp: {
    textAlign: 'justify',
    color: '#485460',
    fontFamily: 'Lato',
  },
});
