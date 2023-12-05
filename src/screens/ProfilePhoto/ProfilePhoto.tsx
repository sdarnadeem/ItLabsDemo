import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfilePhoto.styles';
import {Button, TabBar} from '../../components';
import {NavigationProp} from '@react-navigation/native';
import {BottomSheet} from '@rneui/themed';
import {ListItem} from '@rneui/base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const image = require('../../assets/images/placeholder2.png');
const editImageIcon = require('../../assets/images/u_camera.png');
const crossIcon = require('../../assets/images/cross.png');
const cameraIcon = require('../../assets/images/camera.png');
const gallery = require('../../assets/images/gallery.png');
const deleteIcon = require('../../assets/images/remove.png');

const avatars = [
  {uri: require('../../assets/images/avatars/avatar1.png')},
  {uri: require('../../assets/images/avatars/avatar2.png')},
  {uri: require('../../assets/images/avatars/avatar3.png')},
  {uri: require('../../assets/images/avatars/avatar4.png')},
  {uri: require('../../assets/images/avatars/avatar5.png')},
  {uri: require('../../assets/images/avatars/avatar6.png')},
  {uri: require('../../assets/images/avatars/avatar7.png')},
  {uri: require('../../assets/images/avatars/avatar8.png')},
  {uri: require('../../assets/images/avatars/avatar9.png')},
  {uri: require('../../assets/images/avatars/avatar10.png')},
  {uri: require('../../assets/images/avatars/avatar11.png')},
  {uri: require('../../assets/images/avatars/avatar12.png')},
  {uri: require('../../assets/images/avatars/avatar13.png')},
  {uri: require('../../assets/images/avatars/avatar14.png')},
  {uri: require('../../assets/images/avatars/avatar15.png')},
  {uri: require('../../assets/images/avatars/avatar16.png')},
];

const ProfilePhoto = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [imageUri, setImageUri] = useState<{
    uri: string | undefined;
    type: 'uri' | 'source';
  }>({
    uri: image,
    type: 'source',
  });

  async function handleLaunchCamera() {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets) {
      setImageUri({uri: result.assets[0].uri, type: 'uri'});
      setIsBottomSheetVisible(false);
    }
  }

  async function launchGallery() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    });
    if (result.assets) {
      setImageUri({uri: result.assets[0].uri, type: 'uri'});
      setIsBottomSheetVisible(false);
    }
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.crossIcon}
          onPress={() => navigation.goBack()}>
          <Image source={crossIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Choose profile photo.</Text>
        <Text style={styles.subTitle}>
          Choose a profile photo from your library or select an avatar to add to
          your profile
        </Text>

        <TabBar activeTab={activeTab} onTabChange={n => setActiveTab(n)} />

        <View style={styles.bottomContainer}>
          {activeTab === 0 ? (
            <>
              <Image
                source={
                  imageUri.type === 'uri'
                    ? {uri: imageUri.uri as string}
                    : (imageUri.uri as any)
                }
                style={{width: 270, height: 270, borderRadius: 200}}
              />
              <TouchableOpacity
                style={styles.profileEditContainer}
                onPress={() => {
                  setIsBottomSheetVisible(true);
                }}>
                <Image source={editImageIcon} />
                <Text style={styles.editText}>Edit Photo</Text>
              </TouchableOpacity>
            </>
          ) : (
            <ScrollView contentContainerStyle={styles.gridContainer}>
              {avatars.map((img, index) => (
                <TouchableOpacity
                  key={(index + 1) * 2555455}
                  onPress={() => {
                    setImageUri({uri: img.uri, type: 'source'});
                    setActiveTab(0);
                  }}>
                  <Image source={img.uri} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>

        <Button
          title="save"
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={() => {
            navigation.navigate('PersonalInfoScreen', {
              ...imageUri,
            });
          }}
        />
      </View>

      <BottomSheet
        modalProps={{}}
        isVisible={isBottomSheetVisible}
        onBackdropPress={() => setIsBottomSheetVisible(false)}>
        {[
          {
            title: 'Upload your photo',
            titleStyle: styles.bottomSheetTitle,
            onPress: () => {},
            containerStyle: {},
            key: 18377337,
          },
          {
            title: 'View photo library',
            titleStyle: styles.bottomSheetItem,
            onPress: launchGallery,
            containerStyle: {},
            key: 18377338,
            icon: gallery,
          },
          {
            title: 'Take a photo',
            titleStyle: styles.bottomSheetItem,
            onPress: handleLaunchCamera,
            containerStyle: {},
            key: 18377339,
            icon: cameraIcon,
          },
          {
            title: 'Remove photo',
            titleStyle: styles.bottomSheetDeleteItem,
            onPress: () => {
              setImageUri({uri: image, type: 'source'});
              setIsBottomSheetVisible(false);
            },
            containerStyle: {},
            key: 18377334,
            icon: deleteIcon,
          },
        ].map(l => (
          <ListItem
            key={l.key}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            {l.icon && <Image source={l.icon} />}
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </ScrollView>
  );
};

export default ProfilePhoto;
