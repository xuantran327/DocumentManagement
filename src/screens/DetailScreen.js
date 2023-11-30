import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import * as Linking from 'expo-linking';

import { styles } from '../../styles/DetailScreen';
import { Color } from '../../styles/GlobalStyles';
import config from '../constants/config';
import { getDateTime } from '../../functions';

const DetailScreen = route => {
    const navigation = useNavigation();
    const [detail, setDetail] = useState([]);
    const documentId = Object.values(route)[1].params.documentId;
    // console.log(`${config.apiBaseUrl}/api/document-detail/${documentId}`);

    const getDocumentDetailById = () => {
        axios.get(`${config.apiBaseUrl}/api/document-detail/${documentId}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setDetail(response.data);
                // console.log(detail);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(getDocumentDetailById, [documentId]);

    const downloadFile = filename => {
        const fileUrl = `${config.apiBaseUrl}/upload/${filename}`;
        // console.log(fileUrl);
        Linking.canOpenURL(fileUrl).then(supported => {
            if (supported) {
                Linking.openURL(fileUrl);
            } else {
                console.warn('Cannot open URL:', fileUrl);
            }
        });
    };


    return (
        <View style={styles.detail1DocumentMangement}>
            <View style={[styles.searchBar, styles.searchBarFlexBox]}>
                <TouchableOpacity style={[styles.iconArrowBackIos]} onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={36} color={Color.colorWhite} />
                </TouchableOpacity>
                <Text style={[styles.chiTitCng]}>
                    Chi tiết công văn
                </Text>
            </View>
            <ScrollView
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ height: 'auto', paddingBottom: 206 }}
            >
                <View style={[styles.carousel, styles.s1IconLayout]}>
                    <Image
                        style={styles.s1IconLayout}
                        contentFit="cover"
                        source={{
                            uri: `${config.apiBaseUrl}/image/thumbnail/${detail.thumbnail}`,
                        }}
                    />
                </View>
                <View style={[styles.iconInfoParent, styles.iconParentLayout]}>
                    <Icon name="info-circle" size={26} color={Color.colorBlack} />
                    <Text style={[styles.thngTinChung, styles.chiTitCngFlexBox]}>
                        Thông tin chung
                    </Text>
                </View>
                <View style={[styles.tbTParent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Số hiệu</Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{detail.so_hieu}</Text>
                </View>
                <View style={[styles.parent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Cập nhật</Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{getDateTime(detail.updated_at)}</Text>
                </View>
                <View style={[styles.tsNguynVnAParent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Người ký</Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{detail.nguoi_ky}</Text>
                </View>
                <View style={[styles.group, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Ngày chuyển</Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{getDateTime(detail.ngay_chuyen)}</Text>
                </View>
                <View style={[styles.trngIHcCngNghThngParent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Cơ quan ban hành</Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>
                        {detail.co_quan_ban_hanh}
                    </Text>
                </View>
                <View style={[styles.thngBoParent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>
                        Hình thức văn bản
                    </Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{detail.hinh_thuc_van_ban}</Text>
                </View>
                <View style={[styles.oToParent, styles.parentPosition]}>
                    <Text style={[styles.lnhVc, styles.sHiuTypo]}>Lĩnh vực</Text>
                    <Text style={[styles.oTo, styles.tbTTypo]}>{detail.linh_vuc}</Text>
                </View>
                <View style={[styles.cngVnNiBParent, styles.parentPosition1]}>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>
                        Loại hình công văn
                    </Text>
                    <Text style={[styles.tbT, styles.tbTTypo]}>{detail.loai_hinh_cong_van}</Text>
                </View>
                <View style={[styles.vnBnChOIuHnhParent, styles.parentPosition]}>
                    <Text style={[styles.lnhVc, styles.sHiuTypo]}>Loại văn bản</Text>
                    <Text style={[styles.oTo, styles.tbTTypo]}>
                        {detail.loai_van_ban}
                    </Text>
                </View>
                <View style={[styles.iconAlignLeftParent, styles.iconParentLayout]}>
                    <Icon name="align-left" size={26} color={Color.colorBlack} />
                    <Text style={[styles.thngTinChung, styles.chiTitCngFlexBox]}>
                        Trích yếu nội dung
                    </Text>
                </View>
                <Text style={[styles.tChcThi]}>
                    {detail.trich_yeu_noi_dung}
                </Text>
                {detail.con_hieu_luc ? (
                    <Text style={[styles.cnHiuLc, styles.cnHiuLcTypo]}>Còn hiệu lực</Text>
                  ) : (
                    <Text style={[styles.htHiuLc, styles.cnHiuLcTypo]}>Hết hiệu lực</Text>
                  )}
                <TouchableOpacity
                    style={[styles.buttonprimarydefault, styles.searchBarPosition]}
                    onPress={() => downloadFile(detail.ten_tep_dinh_kem)}
                >
                    <Text style={[styles.paraprimarycenter, styles.searchBarFlexBox]}>
                        Tải về
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
export default DetailScreen;