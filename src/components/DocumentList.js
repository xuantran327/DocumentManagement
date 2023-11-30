import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList, RefreshControl } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

import { styles } from '../../styles/SearchScreen';
import { Color } from '../../styles/GlobalStyles';
import { getDateTime } from '../../functions';
import config from '../constants/config';

const DocumentList = props => {
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [document, setDocument] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigateDocumentDetails = selectedId => {
        setSelectedId(selectedId);
        navigation.navigate('Detail', {documentId: selectedId});
    };
    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            setRefreshing(false);
        });
    }, []);
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.carousel}>
                <View>
                    <Image
                        style={styles.s1Icon}
                        contentFit="cover"
                        source={{ uri: `${config.apiBaseUrl}/image/thumbnail/` + item.thumbnail }}
                    />
                </View>
            </View>
            <View style={[styles.frameParent, styles.cardPosition]}>
                <View style={styles.thngBo1Wrapper}>
                    <Text style={styles.thngBo1}>{item.trich_yeu_noi_dung}</Text>
                </View>
                <View style={styles.iconDateRangeParent}>
                    <Icon name="calendar" size={20} color={Color.colorDarkgray_200} style={styles.iconDateRange} />
                    <Text style={styles.text}>{getDateTime(item.updated_at)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    let url = props.search == '' || props.search == null
        ? `${config.apiBaseUrl}/api/document-list/`
        : `${config.apiBaseUrl}/api/document-list/` + props.search;

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const getDocumentList = () => {
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setDocument(response.data);
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(getDocumentList, [url, isFocused]);
    useEffect(() => {
        if (refreshing) getDocumentList();
    }, [getDocumentList, refreshing]);

    const renderItem = ({ item }) => {
        return (
            <Item item={item} onPress={() => navigateDocumentDetails(item.id)} />
        );
    };

    return (
        <FlatList
            data={document}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            //   style={[s.mt2]}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
            contentContainerStyle={{marginLeft: 24}}
        />
    );

};

export default DocumentList;