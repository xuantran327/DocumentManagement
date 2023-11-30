import React, {useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

import { styles } from '../../styles/SearchScreen';
import DocumentList from '../components/DocumentList';
import { Color } from '../../styles/GlobalStyles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

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