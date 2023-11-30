import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Alert,
    Platform,
    TouchableOpacity,
    PermissionsAndroid,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

import { styles } from '../../styles/DetailScreen';
import { Color } from '../../styles/GlobalStyles';
import config from '../constants/config';

const DetailScreen = route => {
    const navigation = useNavigation();
    const [detail, setDetail] = useState([]);
    const documentId = Object.values(route)[1].params.documentId;
    // console.log(documentId);

    const getDocumentDetailById = () => {
        axios.get(`${config.apiBaseUrl}/api/document-detail/` + documentId, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setDetail(response.data);
                console.log(detail);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(getDocumentDetailById, [documentId]);

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
                contentContainerStyle={{ height: 'auto', paddingBottom: 242 }}
            >
                <View style={[styles.carousel, styles.s1IconLayout]}>
                    <Image
                        style={styles.s1IconLayout}
                        contentFit="cover"
                        source={require("../../assets/conan.jpg")}
                    />
                </View>
                <View style={[styles.iconInfoParent, styles.iconParentLayout]}>
                    <Icon name="info-circle" size={26} color={Color.colorBlack} />
                    <Text style={[styles.thngTinChung, styles.chiTitCngFlexBox]}>
                        Thông tin chung
                    </Text>
                </View>
                <View style={[styles.tbTParent, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>106/TB-ĐT</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Số hiệu</Text>
                </View>
                <View style={[styles.parent, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>01/01/2001 01:01</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Cập nhật</Text>
                </View>
                <View style={[styles.tsNguynVnAParent, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>TS. Nguyễn Văn A</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Người ký</Text>
                </View>
                <View style={[styles.group, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>01/01/2001 01:01</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Ngày chuyển</Text>
                </View>
                <View
                    style={[styles.trngIHcCngNghThngParent, styles.parentPosition1]}
                >
                    <Text style={[styles.tbT, styles.tbTTypo]}>
                        Trường Đại học Công nghệ thông tin và Truyền thông Việt Hàn
                    </Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>Cơ quan ban hành</Text>
                </View>
                <View style={[styles.thngBoParent, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>Thông báo</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>
                        Hình thức văn bản
                    </Text>
                </View>
                <View style={[styles.oToParent, styles.parentPosition]}>
                    <Text style={[styles.oTo, styles.tbTTypo]}>Đào tạo</Text>
                    <Text style={[styles.lnhVc, styles.sHiuTypo]}>Lĩnh vực</Text>
                </View>
                <View style={[styles.cngVnNiBParent, styles.parentPosition1]}>
                    <Text style={[styles.tbT, styles.tbTTypo]}>Công văn nội bộ</Text>
                    <Text style={[styles.sHiu, styles.sHiuTypo]}>
                        Loại hình công văn
                    </Text>
                </View>
                <View style={[styles.vnBnChOIuHnhParent, styles.parentPosition]}>
                    <Text style={[styles.oTo, styles.tbTTypo]}>
                        Văn bản chỉ đạo điều hành
                    </Text>
                    <Text style={[styles.lnhVc, styles.sHiuTypo]}>Loại văn bản</Text>
                </View>
                <View style={[styles.iconAlignLeftParent, styles.iconParentLayout]}>
                    <Icon name="align-left" size={26} color={Color.colorBlack} />
                    <Text style={[styles.thngTinChung, styles.chiTitCngFlexBox]}>
                        Trích yếu nội dung
                    </Text>
                </View>
                <Text style={[styles.tChcThi]}>
                    Tổ chức thi kết thúc học phần Vật lý và Nguyên lý hệ điều hành (Đối
                    với Sinh viên đã Hoãn thi/Duyệt thi lại ở Học Kỳ II Năm học
                    2020-2021 - chưa nộp đơn xin dự thi).
                </Text>
                <Text style={[styles.cnHiuLc, styles.cnHiuLcTypo]}>Còn hiệu lực</Text>
                <View style={[styles.buttonprimarydefault, styles.searchBarPosition]}>
                    <Text style={[styles.paraprimarycenter, styles.searchBarFlexBox]}>
                        Tải về
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};
export default DetailScreen;