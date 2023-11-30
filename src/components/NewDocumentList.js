import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

import config from '../constants/config';
import { getDateTime } from '../../functions';
import { styles } from '../../styles/HomeScreen';
import { Color } from '../../styles/GlobalStyles';

const NewDocumentList = props => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [document, setDocument] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const moveToDocumentDetails = id => {
        navigation.navigate('Detail', {documentId: id});
    };

    const getNewDocumentList = () => {
        axios.get(`${config.apiBaseUrl}/api/new-document`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setDocument(response.data);
                // console.log(document);
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(getNewDocumentList, [isFocused]);
    useEffect(() => {
        if (props.refreshing) getNewDocumentList();
    }, [getNewDocumentList, props.refreshing]);
    return (
        <View style={{ top: 72 }}>
            {document &&
                document.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => moveToDocumentDetails(item.id)}
                        style={[styles.card, styles.parentPosition]}
                    >
                        <Image
                            style={[styles.carousel, styles.maskLayout]}
                            contentFit="contain"
                            source={{ uri: `${config.apiBaseUrl}/image/thumbnail/` + item.thumbnail }}
                        />
                        <View style={[styles.frameParent]}>
                            <View style={styles.thngBo1Wrapper}>
                                <Text style={styles.thngBo1}>{item.trich_yeu_noi_dung}</Text>
                            </View>
                            <View style={[styles.iconDateRangeParent, styles.parentPosition]}>
                                <Icon name="calendar" size={20} color={Color.colorDarkgray_200} style={[styles.iconDateRange, styles.iconPosition]} />
                                <Text style={[styles.text, styles.textTypo]}>
                                    {getDateTime(item.updated_at)}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
        </View>
    );
};
export default NewDocumentList;