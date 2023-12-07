import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from '../../styles/ProfileScreen';
import { Color } from '../../styles/GlobalStyles';
import { getDateAlt, getExtension } from '../../functions';
import config from '../constants/config';

const ProfileScreen = props => {

    const navigation = useNavigation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [editable, setEditable] = useState(false);
    const [show, setShow] = useState(false);
    const [base64, setBase64] = useState('');

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [radiobtn, setRadiobtn] = useState(['Nữ', 'Nam', 'Khác']);
    const [gender, setGender] = useState(0);
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(getDateAlt(new Date()));
    const [filename, setFilename] = useState('');
    const [uri, setUri] = useState('');

    const [tmpName, setTmpName] = useState('');
    const [tmpPhoneNumber, setTmpPhoneNumber] = useState('');
    const [tmpGender, setTmpGender] = useState(0);
    const [tmpDob, setTmpDob] = useState(getDateAlt(new Date()));
    const [tmpFilename, setTmpFilename] = useState('');
    const [tmpUri, setTmpUri] = useState('');

    const isValidInput = (name, phoneNumber) => {
        if (name === '' || phoneNumber === '') return false;
        if (name.length < 3 || name.length > 30) return false;
        return true;
    }

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true,
        });

        if (result.canceled) {
            console.log('User cancelled image picker');
        } else if (result.error) {
            console.log('Image Picker Error: ', result.error);
        } else {
            setTmpFilename(result.assets[0].uri.split('/').pop());
            setBase64(result.assets[0].base64);
            setTmpUri(`data:image/${getExtension(result.assets[0].uri.split('/').pop())};base64,${result.assets[0].base64}`);
        }
    };
    const handleUploadPhoto = async (base64, fileName) => {
        try {
            const response = await axios.post(`${config.apiBaseUrl}/api/upload-avatar`, {
                base64: base64,
                fileName: fileName,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleResetUserData = () => {
        if (tmpFilename !== filename || tmpName !== name || tmpDob !== dob || tmpGender !== gender || tmpPhoneNumber !== phoneNumber) {
            setTmpFilename(filename);
            setTmpName(name);
            setTmpDob(dob);
            setTmpGender(gender);
            setTmpPhoneNumber(phoneNumber);
            setTmpUri(`${config.apiBaseUrl}/image/avatar/${filename}`);
        }
        setEditable(false);
    }
    const handleCancelEdit = () => {
        if (tmpFilename !== filename || tmpName !== name || tmpDob !== dob || tmpGender !== gender || tmpPhoneNumber !== phoneNumber) {
            Alert.alert(
                'Thông báo',
                'Bạn muốn huỷ thay đổi?',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            console.log('OK Pressed');
                            navigation.goBack();
                        },
                    },
                    {
                        text: 'Huỷ',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
            );
        } 
        else {
            navigation.goBack();
        }
    };
    const editUser = async () => {
        if (!isValidInput(tmpName, tmpPhoneNumber)) {
            Alert.alert('Thông báo', 'Bạn phải nhập thông tin hợp lệ!');
            return;
        }
        try {
            const userId = JSON.parse(await AsyncStorage.getItem('@session')).userId;
            const response = await axios.patch(
                `${config.apiBaseUrl}/api/user/${userId}`,
                {
                    name: tmpName,
                    phoneNumber: tmpPhoneNumber,
                    gender: tmpGender,
                    avatarLink: tmpFilename,
                    dob: tmpDob,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );
            if (response.data.status === 200) {
                setEditable(false);
                Alert.alert('Thông báo', response.data.message);
                if (tmpFilename !== filename) {
                    handleUploadPhoto(base64, tmpFilename);
                }
                setName(tmpName);
                setDob(tmpDob);
                setGender(tmpGender);
                setPhoneNumber(tmpPhoneNumber);
                setFilename(tmpFilename);
            }
        } catch (error) {
            Alert.alert('Thông báo', error.message);
            // console.log(error);
        }
    };
    const getUserById = async () => {
        const userId = JSON.parse(await AsyncStorage.getItem('@session')).userId;
        axios.get(`${config.apiBaseUrl}/api/user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                // console.log(response.data);
                setFilename(response.data.avatar_link);
                setUri(`${config.apiBaseUrl}/image/avatar/` + response.data.avatar_link);
                setEmail(response.data.email)
                setName(response.data.name);
                setDob(getDateAlt(response.data.dob));
                setGender(response.data.gender);
                setPhoneNumber(response.data.phone_number);

                setTmpFilename(response.data.avatar_link);
                setTmpUri(`${config.apiBaseUrl}/image/avatar/` + response.data.avatar_link);
                setTmpName(response.data.name);
                setTmpDob(getDateAlt(response.data.dob));
                setTmpGender(response.data.gender);
                setTmpPhoneNumber(response.data.phone_number);

                setIsLoaded(true);
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
                <TouchableOpacity style={[styles.iconArrowBackIos]} onPress={handleCancelEdit}>
                    <Icon name="angle-left" size={36} color={Color.colorWhite} />
                </TouchableOpacity>
                <Text style={[styles.thngTinC, styles.hVTnPosition1]}>
                    Thông tin cá nhân
                </Text>
                {editable ? (
                    <TouchableOpacity style={[styles.editIcon]} onPress={handleResetUserData}>
                        <Icon name="close" size={24} color={Color.colorWhite} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[styles.editIcon]} onPress={() => setEditable(true)}>
                        <Icon name="edit" size={24} color={Color.colorWhite} />
                    </TouchableOpacity>
                )}

            </View>
            <ScrollView
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: 'auto', width: 328, paddingBottom: 238 }}
            >
                <TouchableOpacity onPress={editable ? handleChoosePhoto : null}>
                    <View style={styles.mask}>
                        {isLoaded ? (
                            <Image
                                style={[styles.photo1Icon, styles.photo1IconLayout]}
                                contentFit="cover"
                                source={{ uri: tmpUri }}
                            />
                        ) : (
                            <Image
                                style={[styles.photo1Icon, styles.photo1IconLayout]}
                                contentFit="cover"
                                source={require('../../assets/default-avatar.jpg')} />
                        )}
                    </View>
                </TouchableOpacity>
                <Text style={[styles.hVTn, styles.hVTnPosition]}>Họ và tên</Text>
                <View
                    style={[
                        styles.inputprimarydefault,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View
                        style={[styles.xunTrnWrapper, styles.wrapperPosition]}>
                        <TextInput
                            style={editable ? [styles.xunTrn, styles.nTypoEditable] : [styles.xunTrn, styles.nTypo]}
                            editable={editable} value={tmpName} onChangeText={value => setTmpName(value)}></TextInput>
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
                        <TextInput
                            style={editable ? [styles.xunTrn, styles.nTypoEditable] : [styles.xunTrn, styles.nTypo]}
                            editable={false} value={tmpDob} onChangeText={value => setTmpDob(value)}></TextInput>
                        {editable ? (
                            <>
                                <TouchableOpacity style={[styles.calendarAltIcon, styles.circlePosition]} onPress={() => setShow(true)}>
                                    <Icon name="calendar" size={24} color={Color.colorDarkslategray_100} />
                                </TouchableOpacity>
                                {show && (
                                    <DateTimePicker
                                        // testID="dateTimePicker"
                                        value={new Date(tmpDob)}
                                        mode={'date'}
                                        // is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => {
                                            setShow(false);
                                            if (selectedDate !== undefined) {
                                                setTmpDob(getDateAlt(new Date(selectedDate)));
                                            }
                                        }}
                                    />
                                )}
                            </>
                        ) : (<></>)}

                    </View>
                </View>
                <Text style={[styles.giiTnh, styles.hVTnTypo]}>Giới tính</Text>
                {editable ? (
                    <View style={{ flexDirection: 'row', left: 8 }}>
                        {radiobtn &&
                            radiobtn.map((data, key) => {
                                return (
                                    <View key={key} style={[styles.parentPosition]}>
                                        {tmpGender == key ? (
                                            <Pressable style={[styles.parentPosition]} disabled={false}>
                                                <Text style={[styles.n, styles.nTypoEditable]}>{data}</Text>
                                                <View style={styles.containerEditable}>
                                                    <View style={styles.circleEditable} />
                                                </View>
                                            </Pressable>
                                        ) : (
                                            <Pressable style={[styles.parentPosition]} disabled={false} onPress={() => setTmpGender(key)}>
                                                <Text style={[styles.n, styles.nTypoEditable]}>{data}</Text>
                                                <View style={styles.containerEditable}>
                                                </View>
                                            </Pressable>
                                        )}
                                    </View>
                                );
                            })}
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', left: 8 }}>
                        {radiobtn &&
                            radiobtn.map((data, key) => {
                                return (
                                    <View key={key} style={[styles.parentPosition]}>
                                        {tmpGender == key ? (
                                            <Pressable style={[styles.parentPosition]} disabled={true}>
                                                <Text style={[styles.n, styles.nTypo]}>{data}</Text>
                                                <View style={styles.container}>
                                                    <View style={styles.circle} />
                                                </View>
                                            </Pressable>
                                        ) : (
                                            <Pressable style={[styles.parentPosition]} disabled={true} onPress={() => setTmpGender(key)}>
                                                <Text style={[styles.n, styles.nTypo]}>{data}</Text>
                                                <View style={styles.container}>
                                                </View>
                                            </Pressable>
                                        )}
                                    </View>
                                );
                            })}
                    </View>
                )}
                <Text style={[styles.sInThoi, styles.hVTnTypo]}>Số điện thoại</Text>
                <View
                    style={[
                        styles.inputprimarydefault2,
                        styles.inputprimarydefaultPosition,
                    ]}
                >
                    <View style={[styles.frame, styles.wrapperPosition]}>
                        <TextInput
                            style={editable ? [styles.xunTrn, styles.nTypoEditable] : [styles.xunTrn, styles.nTypo]}
                            editable={editable} value={tmpPhoneNumber} onChangeText={value => setTmpPhoneNumber(value)}></TextInput>
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
                {editable ? (
                    <TouchableOpacity style={[styles.buttonprimarydefault, styles.searchBarPosition]} onPress={editUser}>
                        <Text style={[styles.paraprimarycenter, styles.searchBarFlexBox]}>
                            Lưu thông tin
                        </Text>
                    </TouchableOpacity>
                ) : <></>}

            </ScrollView>
        </View>
    );
};
export default ProfileScreen;