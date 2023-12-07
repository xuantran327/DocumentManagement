import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, RefreshControl, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from '../../styles/ProfileScreen';
import { showAlert } from '../../functions';
import { Color } from '../../styles/GlobalStyles';
import AccountAvatar from '../components/AccountAvatar';
import { getDateAlt } from '../../functions';
import config from '../constants/config';

const ProfileScreen = props => {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [radiobtn, setRadiobtn] = useState(['Nữ', 'Nam', 'Khác']);
    const [gender, setGender] = useState(0);
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(getDateAlt(new Date()));
    const [uri, setUri] = useState(`${config.apiBaseUrl}/image/avatar/default-avatar.jpg`);
    const [editable, setEditable] = useState(false);

    const getUserById = async () => {
        const userId = JSON.parse(await AsyncStorage.getItem('@session')).userId;
        axios.get(`${config.apiBaseUrl}/api/user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                // setDetail(response.data);
                // console.log(response.data);
                setEmail(response.data.email)
                setName(response.data.name);
                setDob(getDateAlt(response.data.dob));
                setGender(response.data.gender);
                setPhoneNumber(response.data.phone_number);
                setUri(`${config.apiBaseUrl}/image/avatar/` + response.data.avatar_link);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        getUserById();
    }, []);

    return (
        <View style={[styles.profile1DocumentMangemen, styles.photo1IconLayout]}>
            <View style={styles.searchBar}>
                <TouchableOpacity style={[styles.iconArrowBackIos]} onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={36} color={Color.colorWhite} />
                </TouchableOpacity>
                <Text style={[styles.thngTinC, styles.hVTnPosition1]}>
                    Thông tin cá nhân
                </Text>
                <TouchableOpacity style={[styles.editIcon]} onPress={() => setEditable(true)}>
                    <Icon name="edit" size={24} color={Color.colorWhite} />
                </TouchableOpacity>
            </View>
            <ScrollView
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: 'auto', width: 328, paddingBottom: 220 }}
            >
                <View style={styles.mask}>
                    <Image
                        style={[styles.photo1Icon, styles.photo1IconLayout]}
                        contentFit="cover"
                        source={{ uri: uri }}
                    />
                </View>
                <Text style={[styles.hVTn, styles.hVTnPosition]}>Họ và tên</Text>
                <View
                    style={[
                        styles.inputprimarydefault,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View
                        style={[styles.xunTrnWrapper, styles.wrapperPosition]}>
                        <TextInput style={[styles.xunTrn, styles.nTypo]} editable={editable} value={name}></TextInput>
                    </View>
                </View>
                <Text style={[styles.ngySinh, styles.hVTnTypo]}>Ngày sinh</Text>
                <View
                    style={[
                        styles.inputprimarydefault1,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View style={[styles.xunTrnWrapper, styles.wrapperPosition]}>
                        <TextInput style={[styles.xunTrn, styles.nTypo]} editable={false} value={dob}></TextInput>
                    </View>
                </View>
                <Text style={[styles.giiTnh, styles.hVTnTypo]}>Giới tính</Text>
                <View style={{ flexDirection: 'row', left: 8 }}>
                    {radiobtn &&
                        radiobtn.map((data, key) => {
                            return (
                                <View key={key} style={[styles.parentPosition]}>
                                    {gender == key ? (
                                        <Pressable style={[styles.parentPosition]} disabled={editable}>
                                            <Text style={[styles.n, styles.nTypo]}>{data}</Text>
                                            <View style={styles.container}>
                                                <View style={styles.circle} />
                                            </View>
                                        </Pressable>
                                    ) : (
                                        <Pressable style={[styles.parentPosition]} disabled={editable}>
                                            <Text style={[styles.n, styles.nTypo]}>{data}</Text>
                                            <View style={styles.container}>
                                            </View>
                                        </Pressable>
                                    )}
                                </View>
                            );
                        })}
                </View>
                <Text style={[styles.sInThoi, styles.hVTnTypo]}>Số điện thoại</Text>
                <View
                    style={[
                        styles.inputprimarydefault2,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View style={[styles.frame, styles.wrapperPosition]}>
                        <TextInput style={[styles.xunTrn, styles.nTypo]} editable={editable} value={phoneNumber}></TextInput>
                    </View>
                </View>
                <Text style={[styles.email, styles.hVTnTypo]}>Email</Text>
                <View
                    style={[
                        styles.inputprimarydefault3,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View style={[styles.xunTrnWrapper, styles.wrapperPosition]}>
                        <TextInput style={[styles.xunTrn, styles.nTypo]} editable={false} value={email}>
                        </TextInput>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default ProfileScreen;