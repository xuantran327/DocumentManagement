import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

import { styles } from '../../styles/AccountScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import DocumentList from '../components/DocumentList';
import { Color } from '../../styles/GlobalStyles';

const AccountScreen = () => {
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
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>
            Thông tin cá nhân
          </Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            // source={require("../assets/useralt.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Giới thiệu</Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            // source={require("../assets/infocircle.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Liên hệ</Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            // source={require("../assets/addressbook.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Cài đặt</Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            // source={require("../assets/cog.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Text style={[styles.thngTinC, styles.xunTrnTypo]}>Đăng xuất</Text>
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            // source={require("../assets/signoutalt.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.tabbar5Icon, styles.searchBarPosition]}
        contentFit="cover"
        // source={require("../assets/tabbar5.png")}
      />
    </View>
  );
};
export default AccountScreen;