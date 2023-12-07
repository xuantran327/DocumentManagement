import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../../styles/IntroductionScreen';
import { Color } from '../../styles/GlobalStyles';

const IntroductionScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.introductionDocumentMangem}>
      <View style={[styles.searchBar, styles.textFlexBox]}>
        <TouchableOpacity style={[styles.iconArrowBackIos]} onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={36} color={Color.colorWhite} />
        </TouchableOpacity>
        <Text style={[styles.giiThiu, styles.viNgDngPosition]}>Giới thiệu</Text>
      </View>
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: 'auto', paddingBottom: 115 }}
      >
        <Text style={[styles.ngDngQun, styles.ngDngQunPosition]}>
          Ứng dụng quản lý công văn (QLCV) là ứng dụng di động phục vụ nhu cầu
          xem và quản lý các văn bản, công văn của các công ty, văn phòng, cơ
          quan nhà nước. Ứng dụng tập trung vào việc xem, lưu trữ, quản lý các
          công văn cũng như các loại văn bản giấy tờ khác tại cơ quan một cách
          dễ dàng và hợp lý, từ đó giúp cho người lãnh đạo, người đứng đầu đơn
          vị ra các chỉ thị, các quyết định một cách nhanh chóng chuyển đến đúng
          đối tượng cần hướng tới và theo dõi được tình trạng của chỉ thị mình
          ban ra.
        </Text>
        <Text style={[styles.viNgDng, styles.viNgDngPosition]}>
          Với ứng dụng QLCV, người dùng có thể xem danh sách các công văn, tìm
          kiếm và tải về công văn, tạo thuận lợi trong việc triển khai công văn
          đến các cơ quan, tổ chức có liên quan.
        </Text>
        <Text
          style={[styles.ngDngQlcv, styles.dngTypo]}
        >{`Ứng dụng QLCV có các chức năng chính:
- Xem danh sách các công văn
- Tìm kiếm công văn theo từ khoá
- Xem nội dung chi tiết của công văn
- Tải về công văn`}</Text>
        <Text style={[styles.nuGpKh, styles.dngTypo]}>
          Nếu gặp khó khăn trong quá trình cài đặt hay sử dụng ứng dụng QLCV,
          vui lòng liên hệ 0987654321 để được hỗ trợ.
        </Text>
      </ScrollView>
    </View>
  );
};
export default IntroductionScreen;