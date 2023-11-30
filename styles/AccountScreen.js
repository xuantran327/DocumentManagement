import { StyleSheet } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    photo1IconLayout: {
        width: "100%",
        overflow: "hidden",
    },
    maskPosition: {
        height: 100,
        left: 0,
        top: 0,
        position: "absolute",
    },
    tiKhonFlexBox: {
        textAlign: "left",
        position: "absolute",
    },
    xunTrnTypo: {
        fontWeight: "600",
        textAlign: "left",
        position: "absolute",
    },
    groupParentLayout: {
        height: 55,
        left: 0,
        width: 328,
        position: "absolute",
    },
    searchBarPosition: {
        width: 375,
        marginLeft: -187.5,
        left: "50%",
        position: "absolute",
    },
    photo1Icon: {
        height: "100%",
        top: "6.36%",
        right: "-5.72%",
        bottom: "-6.36%",
        left: "5.72%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    g1: {
        top: -21,
        left: -21,
        width: 371,
        height: 333,
        position: "absolute",
    },
    mask: {
        borderRadius: 50,
        width: 100,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
    rapunzelxuantrangmailcom: {
        top: 27,
        color: "#6e6e6e",
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        width: 210,
        left: 0,
        fontSize: FontSize.size_base,
    },
    xunTrn: {
        fontSize: FontSize.size_xl,
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        width: 210,
        left: 0,
        top: 0,
    },
    rapunzelxuantrangmailcomParent: {
        top: 24,
        left: 118,
        height: 51,
        width: 210,
        position: "absolute",
    },
    maskParent: {
        zIndex: 0,
        width: 328,
    },
    groupChild: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorWhitesmoke_100,
        top: 0,
    },
    thngTinC: {
        top: 20,
        left: 55,
        // fontFamily: FontFamily.robotoBold,
        color: Color.colorDarkslategray_100,
        fontSize: FontSize.size_base,
    },
    userAltIcon: {
        top: 19,
        left: 20,
        width: 20,
        height: 20,
        position: "absolute",
        overflow: "hidden",
    },
    rectangleParent: {
        top: 120,
        zIndex: 1,
    },
    rectangleGroup: {
        top: 183,
        zIndex: 2,
    },
    rectangleContainer: {
        top: 246,
        zIndex: 3,
    },
    groupView: {
        top: 309,
        zIndex: 4,
    },
    rectangleParent1: {
        top: 372,
        zIndex: 5,
    },
    list: {
        marginLeft: -163.5,
        top: 114,
        height: 638,
        paddingBottom: Padding.p_71xl,
        width: 328,
        left: "50%",
        position: "absolute",
    },
    tabbar5Icon: {
        bottom: 0,
        borderRadius: Border.br_5xs,
        height: 60,
        overflow: "hidden",
    },
    tiKhon: {
        marginLeft: -51.5,
        bottom: 14,
        fontSize: FontSize.size_5xl,
        fontWeight: "500",
        // fontFamily: FontFamily.robotoMedium,
        color: Color.white,
        zIndex: 0,
        left: "50%",
    },
    searchBar: {
        backgroundColor: Color.colorGreen_100,
        borderStyle: "solid",
        borderColor: Color.colorGreen_100,
        borderBottomWidth: 1,
        height: 94,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_3xs,
        paddingRight: Padding.p_5xs,
        paddingBottom: Padding.p_3xs,
        top: 0,
    },
    accountDocumentMangement: {
        flex: 1,
        height: 812,
        overflow: "hidden",
        backgroundColor: Color.white,
    },
});