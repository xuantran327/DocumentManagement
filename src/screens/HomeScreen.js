import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';

import { styles } from '../../styles/HomeScreen';
import { showAlert } from '../../functions';
import config from '../constants/config';
import { Color } from '../../styles/GlobalStyles';
import SlideList from '../components/SlideList';
import NewDocumentList from '../components/NewDocumentList';

const HomeScreen = props => {

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

  return (
    <View style={styles.homeTaskMangement}>
      <Pressable onPress={() => props.navigation.navigate('Search')}>
        <SearchBar
          placeholder="Tìm công văn..."
          placeholderTextColor={Color.colorDarkgray_200}
          searchIcon={
            <Icon name="search" size={18} color={Color.colorDarkgray_200} style={styles.iconSearch} />
          }
          inputContainerStyle={styles.input}
          containerStyle={styles.searchBar}
          editable={false}
        />
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.list]}
        contentContainerStyle={{ height: 'auto', width: 328, paddingBottom: 78 }}
        // contentContainerStyle={{ height: "100%", width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <SlideList refreshing={refreshing} />

        <View style={[styles.cngVnMiNhtParent, styles.slidesFlexBox]}>
          <Text style={[styles.cngVnMi, styles.xemThmTypo]}>
            Công văn mới nhất
          </Text>
          <Text style={[styles.xemThm, styles.xemThmTypo]} onPress={() => props.navigation.navigate('Search')}>Xem thêm</Text>
        </View>

        <NewDocumentList refreshing={refreshing} />
        
      </ScrollView>

    </View>
  );
};
export default HomeScreen;