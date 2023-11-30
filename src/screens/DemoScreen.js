import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

import { styles } from '../../styles/HomeScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import DocumentList from '../components/DocumentList';
import { Color } from '../../styles/GlobalStyles';

const DemoScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const checkTokenExpiration = async () => {
    const expires_at = await AsyncStorage.getItem('expires_at');
    const expiration = new Date(expires_at);
    if (new Date() >= expiration) {
      // Token has expired, log out the user
      await handleLogout();
      clearInterval(intervalId);
    }
  };
  const intervalId = setInterval(checkTokenExpiration, 1000); // Check every second

  const handleLogout = async () => {
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
      console.log(response.data);
      showAlert('Thông báo', response.data.message);
      await AsyncStorage.removeItem('api_token');
      await AsyncStorage.removeItem('expires_at');
      navigation.goBack();
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <View style={styles.homeTaskMangement}>
      <View style={[styles.list, styles.listLayout]}>
        <View style={[styles.carousel15, styles.cardPosition]}>
          <View style={styles.pointer}>
            <Image
              style={styles.pointerLayout}
              contentFit="cover"
            //   source={require("../../assets/ellipse-8.png")}
            />
            <Image
              style={[styles.pointerItem, styles.pointerLayout]}
              contentFit="cover"
            //   source={require("../../assets/ellipse-9.png")}
            />
            <Image
              style={[styles.pointerItem, styles.pointerLayout]}
              contentFit="cover"
            //   source={require("../../assets/ellipse-10.png")}
            />
            <Image
              style={[styles.pointerItem, styles.pointerLayout]}
              contentFit="cover"
            //   source={require("../../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.pointerItem, styles.pointerLayout]}
              contentFit="cover"
            //   source={require("../../assets/ellipse-12.png")}
            />
          </View>
          <View style={[styles.mask, styles.maskLayout]}>
            <View style={[styles.g1, styles.g1Position]}>
              <Image
                style={styles.photo1Icon}
                contentFit="cover"
                // source={require("../../assets/photo1.png")}
              />
            </View>
            <View style={[styles.g2, styles.g1Position]}>
              <Image
                style={[styles.photo2Icon, styles.iconPosition]}
                contentFit="cover"
                // source={require("../../assets/photo2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.parentPosition]}>
          <View style={[styles.carousel, styles.maskLayout]}>
            <View style={[styles.slides, styles.slidesFlexBox]}>
              <Image
                style={[styles.s1Icon, styles.listLayout]}
                contentFit="cover"
                // source={require("../../assets/s1.png")}
              />
            </View>
          </View>
          <View style={[styles.frameParent, styles.parentPosition]}>
            <View style={styles.thngBo1Wrapper}>
              <Text style={styles.thngBo1}>Thông báo 1</Text>
            </View>
            <View style={[styles.iconDateRangeParent, styles.parentPosition]}>
              <Image
                style={[styles.iconDateRange, styles.iconPosition]}
                contentFit="cover"
                // source={require("../../assets/-icon-date-range.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>
                10/10/2010 10:10
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.card1, styles.cardPosition]}>
          <View style={[styles.carousel, styles.maskLayout]}>
            <View style={[styles.slides, styles.slidesFlexBox]}>
              <Image
                style={[styles.s1Icon, styles.listLayout]}
                contentFit="cover"
                // source={require("../../assets/s1.png")}
              />
            </View>
          </View>
          <View style={[styles.frameParent, styles.parentPosition]}>
            <View style={styles.thngBo1Wrapper}>
              <Text style={styles.thngBo1}>Thông báo 1</Text>
            </View>
            <View style={[styles.iconDateRangeParent, styles.parentPosition]}>
              <Image
                style={[styles.iconDateRange, styles.iconPosition]}
                contentFit="cover"
                // source={require("../../assets/-icon-date-range.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>
                10/10/2010 10:10
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarPosition]}>
        <View style={[styles.input, styles.inputFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            // source={require("../../assets/icon.png")}
          />
          <Text style={[styles.placeholder, styles.textTypo]}>
            Tìm công văn...
          </Text>
        </View>
      </View>
      <View style={[styles.cngVnMiNhtParent, styles.slidesFlexBox]}>
        <Text style={[styles.cngVnMi, styles.xemThmTypo]}>
          Công văn mới nhất
        </Text>
        <Text style={[styles.xemThm, styles.xemThmTypo]}>Xem thêm</Text>
      </View>
      <Image
        style={[styles.tabbar5Icon, styles.searchBarPosition]}
        contentFit="cover"
        // source={require("../../assets/tabbar5.png")}
      />
    </View>
  );
};
export default DemoScreen;