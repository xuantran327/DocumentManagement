import { StyleSheet } from "react-native";
import { FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    ngDngQunPosition: {
        zIndex: 0,
        position: "relative",
    },
    viNgDngPosition: {
        zIndex: 1,
        textAlign: "left",
        position: "relative",
    },
    dngTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        left: 0,
        width: 327,
    },
    textFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    ngDngQun: {
        top: 8,
        textAlign: "left",
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        left: 0,
        width: 327,
    },
    viNgDng: {
        top: 21,
        color: Color.colorBlack,
        left: 0,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        zIndex: 1,
        width: 327,
    },
    ngDngQlcv: {
        top: 37,
        zIndex: 2,
        position: "relative",
    },
    nuGpKh: {
        top: 53,
        zIndex: 3,
        position: "relative",
    },
    list: {
        marginLeft: -163.5,
        top: 114,
        height: 678,
        paddingBottom: Padding.p_71xl,
        width: 327,
        left: "50%",
        position: "absolute",
    },
    iconArrowBackIos: {
        top: 46,
        left: 32,
        zIndex: 1,
        position: "absolute",
    },
    giiThiu: {
        marginLeft: -82,
        bottom: -20,
        fontSize: FontSize.size_5xl,
        fontWeight: "500",
        // fontFamily: FontFamily.robotoMedium,
        color: Color.colorWhite,
        left: "50%",
    },
    searchBar: {
        marginLeft: -187.5,
        backgroundColor: Color.colorGreen,
        borderStyle: "solid",
        borderColor: Color.colorGreen,
        borderBottomWidth: 1,
        height: 94,
        flexDirection: "row",
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_3xs,
        paddingRight: Padding.p_5xs,
        paddingBottom: Padding.p_3xs,
        width: 375,
        top: 0,
        position: "absolute",
        left: "50%",
    },
    introductionDocumentMangem: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        height: "100%",
        overflow: "hidden",
        width: "100%",
    },
});