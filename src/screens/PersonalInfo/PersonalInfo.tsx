import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './PersonalInfo.styles';
import {Button, Input} from '../../components';
import {NavigationProp} from '@react-navigation/native';

const image = require('../../assets/images/profile_placeholder.png');
const editImageIcon = require('../../assets/images/u_camera.png');

const PersonalInfo = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) => {
  const [imageUri, setImageUri] = useState<{
    uri: string | undefined;
    type: 'uri' | 'source';
  }>({
    uri: image,
    type: 'source',
  });

  const uri = route.params?.uri;
  const type = route.params?.type;

  useEffect(() => {
    if (type || uri) {
      setImageUri({uri, type});
    }
  }, [type, uri]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Let’s get to know you</Text>
        <Text style={styles.subTitle}>
          Let us get to know you a bit better so you can get the best out of us
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={
              imageUri.type === 'uri'
                ? {uri: imageUri.uri as string}
                : (imageUri.uri as any)
            }
            style={styles.profilePic}
          />
          <TouchableOpacity
            style={styles.profileEditContainer}
            onPress={() => navigation.navigate('ProfilePhotoScreen')}>
            <Image source={editImageIcon} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Input placeholder="John" label="First Name" />
        <Input placeholder="Blake" label="Last Name" />
        <Input
          placeholder="2000"
          label="Year of Birth"
          inputProps={{keyboardType: 'number-pad'}}
        />
        <View style={styles.emptyView} />
        <Button title="save" />
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
