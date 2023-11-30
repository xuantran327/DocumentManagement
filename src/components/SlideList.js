import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import axios from "axios";
import { useIsFocused } from '@react-navigation/native';

import { styles } from '../../styles/HomeScreen';
import config from '../constants/config';

const SlideList = props => {

    const isFocused = useIsFocused();
    const [image, setImage] = useState([]);
    const [imgActive, setImgActive] = useState(0);
    // const [isLoaded, setIsLoaded] = useState(false);

    const onchange = nativeEvent => {
        if (nativeEvent) {
            const slide = Math.ceil(
                nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
            );
            if (slide != imgActive) {
                setImgActive(slide);
            }
        }
    };

    const getSlideList = () => {
        axios.get(`${config.apiBaseUrl}/api/slide`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setImage(response.data);
                // console.log(image);
                // setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(getSlideList, [isFocused]);
    useEffect(() => {
        if (props.refreshing) getSlideList();
    }, [getSlideList, props.refreshing]);

    return (
        <View style={[styles.carousel15, styles.cardPosition]}>
            <View style={[styles.pointer]}>
                {image &&
                    image.map((e, index) => (
                        <Text
                            key={index}
                            style={imgActive == index ? styles.pointerActive : styles.pointerInactive}>
                            •
                        </Text>
                    ))}
            </View>
            <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={[styles.mask]}
            >
                {image &&
                    image.map((e, index) => (
                        <View key={index}>
                            <Image
                                resizeMode="cover"
                                style={styles.photo1Icon}
                                source={{
                                    uri: `${config.apiBaseUrl}/image/slide/` + e.image,
                                }}
                            />
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
};
export default SlideList;
