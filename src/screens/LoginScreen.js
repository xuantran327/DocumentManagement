import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../../styles/LoginScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import { Color } from '../../styles/GlobalStyles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = email => {
    if (email === "") return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidPassword = password => {
    if (password === "") return false;
    if (password.length >=6 && password.length <= 25) return true;
    return false;
  }

  const isValidInput = (email, password) => {
    if (isValidEmail(email) && isValidPassword(password)) return true;
    return false;
  }

  const handleLogin = async () => {
    if (!isValidInput(email, password)) {
      showAlert('Thông báo', "Email/Mật khẩu không hợp lệ!");
      return;
    }
    try {
      const response = await axios({
        method: 'post',
        url: `${config.apiBaseUrl}/api/login`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: JSON.stringify({ email: email, password: password }),
      });
      showAlert('Thông báo', response.data.message);
      if (response.data.status === 200) {
        const sessionData = {
          email: email,
          userId: response.data.user_id.toString(),
          apiToken: response.data.api_token,
          loginTime: new Date().getTime(),
          expiryTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
        };
        // await AsyncStorage.setItem('user_id', response.data.user_id.toString());
        // await AsyncStorage.setItem('api_token', response.data.api_token);
        // await AsyncStorage.setItem('expires_at', response.data.expires_at);
        await AsyncStorage.setItem('@session', JSON.stringify(sessionData));
        // const data = JSON.parse(await AsyncStorage.getItem('@session')).expiryTime;
        // console.log(data);
        navigation.navigate('Main');
      }
    } catch (error) {
      // showAlert('Thông báo', 'Email/Mật khẩu không hợp lệ, mời nhập lại!');
      console.log(error);
    }
  };
  return (
    <View style={styles.loginTaskMangement}>
      <Text style={styles.documan}>DocuMan</Text>
      <Text style={styles.ngDngQun}>Ứng dụng quản lý công văn</Text>
      <TouchableOpacity style={styles.buttonprimarydefault} onPress={handleLogin}>
        <Text style={[styles.paraprimarycenter, styles.qunMtKhuTypo]}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      <View
        style={[styles.inputprimarydefault, styles.inputprimarydefaultPosition]}
      >
        <View style={styles.wrapperPosition}>
          <TextInput 
            style={styles.email} 
            placeholder="Email"
            placeholderTextColor={Color.colorDarkgray_100}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={[styles.message, styles.lockPosition]}>
          <Icon name="envelope" size={15} color={Color.colorWhite} />
        </View>
      </View>
      <View
        style={[
          styles.inputprimarydefault1,
          styles.inputprimarydefaultPosition,
        ]}
      >
        <View style={styles.wrapperPosition}>
          <TextInput 
            style={styles.email} 
            secureTextEntry
            placeholder="Mật khẩu"
            placeholderTextColor={Color.colorDarkgray_100}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={[styles.lock, styles.lockPosition]}>
          <Icon name="lock" size={20} color={Color.colorWhite} />
        </View>
      </View>
      <Text style={[styles.qunMtKhu, styles.qunMtKhuTypo]}>Quên mật khẩu?</Text>
    </View>
  );
};

export default LoginScreen;