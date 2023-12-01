import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../../styles/AccountScreen';
import config from '../constants/config';

const AccountAvatar = props => {

    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getAccountAvatar = async () => {
        const userId = await AsyncStorage.getItem('user_id');
        axios.get(`${config.apiBaseUrl}/api/user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setData(response.data);
                setIsLoaded(true);
                // console.log(response.data);
                // setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    };
    
    useEffect(() => {
        getAccountAvatar();
    }, [isFocused]);
    
    useEffect(() => {
        if (props.refreshing) getAccountAvatar();
    }, [props.refreshing]);

    return (
        <View style={[styles.maskParent, styles.maskPosition]}>
            <View style={[styles.mask, styles.maskPosition]}>
                {isLoaded ? (
                    <Image
                    style={[styles.photo1Icon, styles.photo1IconLayout]}
                    contentFit="cover"
                    source={{
                        uri: `${config.apiBaseUrl}/image/avatar/` + data.avatar_link,
                    }}
                />
                ) : (
                    <Image
                    style={[styles.photo1Icon, styles.photo1IconLayout]}
                    contentFit="cover"
                    source={require('../../assets/default-avatar.jpg')} />
                )}
                
            </View>
            <View style={styles.rapunzelxuantrangmailcomParent}>
                <Text style={[styles.xunTrn, styles.xunTrnTypo]}>{data.name}</Text>
                <Text
                    style={[styles.rapunzelxuantrangmailcom, styles.tiKhonFlexBox]}
                    numberOfLines={1} ellipsizeMode='tail'
                >
                    {data.email}
                </Text>
            </View>
        </View>
    );
};
export default AccountAvatar;
