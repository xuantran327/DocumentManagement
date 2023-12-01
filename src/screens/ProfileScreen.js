import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../../styles/AccountScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import { Color } from '../../styles/GlobalStyles';
import AccountAvatar from '../components/AccountAvatar';

const ProfileScreen = () => {
    return (
        <View />
    )
};
export default ProfileScreen;