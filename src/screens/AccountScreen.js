import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../../styles/AccountScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import { Color } from '../../styles/GlobalStyles';
import AccountAvatar from '../components/AccountAvatar';

const AccountScreen = props => {

  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const handleLogout = async () => {
    // console.log("Logged out.");
    const api_token = JSON.parse(await AsyncStorage.getItem('@session')).apiToken;
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
      // await AsyncStorage.removeItem('user_id');
      // await AsyncStorage.removeItem('api_token');
      // await AsyncStorage.removeItem('expires_at');
      await AsyncStorage.removeItem('@session');
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: 'auto', width: 328, paddingBottom: 78 }}
      >
        <AccountAvatar refreshing={refreshing} />
        <TouchableOpacity 
          style={[styles.rectangleParent, styles.groupParentLayout]}
          onPress={() => props.navigation.navigate('Profile')}
        >
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>
            Thông tin cá nhân
          </Text>
          <Icon name="user" size={22} color={Color.colorBlack} style={styles.userAltIcon1} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.rectangleGroup, styles.groupParentLayout]}
          onPress={() => props.navigation.navigate('Introduction')}
        >
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Giới thiệu</Text>
          <Icon name="info-circle" size={24} color={Color.colorBlack} style={styles.userAltIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.rectangleContainer, styles.groupParentLayout]}
          onPress={() => props.navigation.navigate('Contact')}
        >
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Liên hệ</Text>
          <Icon name="address-book" size={20} color={Color.colorBlack} style={styles.userAltIcon1} />
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
      </ScrollView>
    </View>
  );
};
export default AccountScreen;