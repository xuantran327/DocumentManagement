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

const AccountScreen = () => {


  return (
    <></>
  );
};
export default AccountScreen;