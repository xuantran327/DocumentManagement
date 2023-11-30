import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';

import { styles } from '../../styles/AccountScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import DocumentList from '../components/DocumentList';
import { Color } from '../../styles/GlobalStyles';

const AccountScreen = () => {

  const navigation = useNavigation();

  const checkTokenExpiration = async () => {
    const expires_at = await AsyncStorage.getItem('expires_at');
    const expiration = new Date(expires_at);
    // console.log(new Date());
    if (new Date() >= expiration) {
      // Token has expired, log out the user
      await handleLogout();
      clearInterval(intervalId);
    }
  };
  const intervalId = setInterval(checkTokenExpiration, 1000); // Check every second

  const handleLogout = async () => {
    // console.log("Logged out.");
    const api_token = await AsyncStorage.getItem('api_token');
    try {
      const response = await axios({
        method: 'post',
        url: `${config.apiBaseUrl}/api/logout`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: JSON.stringify({ api_token: api_token }),
      });
      // console.log(response.data);
      showAlert('Thông báo', response.data.message);
      await AsyncStorage.removeItem('api_token');
      await AsyncStorage.removeItem('expires_at');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <View style={[styles.accountDocumentMangement, styles.photo1IconLayout]}>
      <View style={[styles.searchBar, styles.searchBarPosition]}>
        <Text style={[styles.tiKhon, styles.tiKhonFlexBox]}>Tài khoản</Text>
      </View>
      <View style={styles.list}>
        <View style={[styles.maskParent, styles.maskPosition]}>
          <View style={[styles.mask, styles.maskPosition]}>
            <View style={styles.g1}>
              <Image
                style={[styles.photo1Icon, styles.photo1IconLayout]}
                contentFit="cover"
              // source={require("../assets/photo1.png")}
              />
            </View>
          </View>
          <View style={styles.rapunzelxuantrangmailcomParent}>
            <Text
              style={[styles.rapunzelxuantrangmailcom, styles.tiKhonFlexBox]}
            >
              rapunzelxuantran@gmail.com
            </Text>
            <Text style={[styles.xunTrn, styles.xunTrnTypo]}>Xuân Trần</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>
            Thông tin cá nhân
          </Text>
          <Icon name="user" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Giới thiệu</Text>
          <Icon name="info-circle" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Liên hệ</Text>
          <Icon name="address-book" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Cài đặt</Text>
          <Icon name="cog" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rectangleParent1, styles.groupParentLayout]} onPress={handleLogout}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Đăng xuất</Text>
          <Icon name="sign-out" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AccountScreen;