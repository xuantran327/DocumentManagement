import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../../styles/ContactScreen';
import { Color } from '../../styles/GlobalStyles';

const ContactScreen = props => {
    const navigation = useNavigation();

    return (
        <View style={styles.contactDocumentMangement}>
            <View style={[styles.searchBar, styles.text1FlexBox]}>
                <TouchableOpacity style={[styles.iconArrowBackIos]} onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={36} color={Color.colorWhite} />
                </TouchableOpacity>
                <Text style={styles.linH}>Liên hệ</Text>
            </View>
            <View
                style={[
                    styles.rapunzelxuantrangmailcomParent,
                    styles.rapunzelxuantrangmailcomLayout,
                ]}
            >
                <Text style={[styles.rapunzelxuantrangmailcom, styles.textFlexBox]}>
                    rapunzelxuantran@gmail.com
                </Text>
                <Text style={[styles.text, styles.textFlexBox]}>0987654321</Text>
                <Text style={[styles.trngIHc, styles.textFlexBox]}>
                    Trường Đại học Công nghệ thông tin và Truyền thông Việt Hàn, 470 Trần
                    Đại Nghĩa, p. Hoà Quý, q. Ngũ Hành Sơn, TP Đà Nẵng
                </Text>
                <Icon name="envelope" size={25} color={Color.colorBlack} style={[styles.envelopeIcon, styles.iconPosition1]} />
                <Icon name="phone" size={29} color={Color.colorBlack} style={[styles.phoneAltIcon, styles.iconPosition1]} />
                <Icon name="map-marker" size={26} color={Color.colorBlack} style={[styles.mapMarkerAltIcon, styles.iconPosition1]} />
                <TouchableOpacity style={[styles.facebookSquareIcon, styles.iconPosition]} onPress={() => Linking.openURL('https://www.facebook.com')}>
                    <Icon name="facebook-square" size={25} color={Color.colorBlack} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.instagramIcon, styles.iconPosition]} onPress={() => Linking.openURL('https://www.instagram.com')}>
                    <Icon name="instagram" size={25} color={Color.colorBlack} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ContactScreen;