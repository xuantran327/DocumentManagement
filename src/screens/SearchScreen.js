import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

import { styles } from '../../styles/SearchScreen';
import DocumentList from '../components/DocumentList';
import { Color } from '../../styles/GlobalStyles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  // const checkTokenExpiration = async () => {
  //   const expires_at = await AsyncStorage.getItem('expires_at');
  //   const expiration = new Date(expires_at);
  //   if (new Date() >= expiration) {
  //     // Token has expired, log out the user
  //     await handleLogout();
  //     clearInterval(intervalId);
  //   }
  // };
  // const intervalId = setInterval(checkTokenExpiration, 1000); // Check every second

  // const handleLogout = async () => {
  //   const api_token = await AsyncStorage.getItem('api_token');
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: `${config.apiBaseUrl}/api/logout`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //       data: JSON.stringify({ api_token: api_token }),
  //     });
  //     console.log(response.data);
  //     showAlert('Thông báo', response.data.message);
  //     await AsyncStorage.removeItem('api_token');
  //     await AsyncStorage.removeItem('expires_at');
  //     navigation.goBack();
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  return (

    <View style={styles.searchTaskMangement}>
      <TouchableOpacity style={styles.iconArrowBackIos} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={36} color={Color.colorGray_200} />
      </TouchableOpacity>
      <SearchBar
        placeholder="Tìm công văn..."
        placeholderTextColor={Color.colorDarkgray_200}
        onChangeText={value => setSearch(value)}
        onClear={() => setSearch("")}
        value={search}
        searchIcon={
          <Icon name="search" size={18} color={Color.colorGray_200} style={styles.iconSearch} />
        }
        clearIcon={
          <Icon name="close" size={20} color={Color.colorGray_200} style={styles.iconClose} />
        }
        inputContainerStyle={styles.input}
        containerStyle={styles.searchBar}
        inputStyle={{ color: Color.colorDarkgray_200 }}
      />
      
      <View style={styles.list}>

        <DocumentList search={search} />

      </View>
    </View>
  );
};
export default SearchScreen;