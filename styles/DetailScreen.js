import { StyleSheet } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    s1IconLayout: {
        width: 327,
        height: 246,
        overflow: "hidden",
    },
    iconParentLayout: {
        width: 331,
        height: 24,
        left: 0,
        position: "relative",
    },
    iconLayout: {
        width: 24,
        height: 24,
        position: "absolute",
    },
    chiTitCngFlexBox: {
        textAlign: "left",
        position: 'absolute',
    },
    parentPosition1: {
        right: 1,
        width: 327,
        position: "relative",
    },
    tbTTypo: {
        textAlign: "right",
        fontSize: FontSize.size_base,
        right: 0,
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        top: 0,
        position: "relative",
    },
    sHiuTypo: {
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        left: 0,
        position: "relative",
    },
    parentPosition: {
        right: 0,
        width: 327,
        position: "relative",
    },
    cnHiuLcTypo: {
        textAlign: "center",
        fontWeight: "700",
    },
    searchBarPosition: {
        backgroundColor: Color.colorGreen,
        flexDirection: "row",
        // left: "25%",
        position: "relative",
    },
    searchBarFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    carousel: {
        borderRadius: Border.br_base,
        zIndex: 0,
    },
    iconInfo: {
        left: 0,
        width: 24,
        top: 0,
    },
    thngTinChung: {
        left: 32,
        fontSize: FontSize.size_xl,
        width: 299,
        color: Color.colorBlack,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        top: 0,
    },
    iconInfoParent: {
        // top: 261,
        position: 'relative',
        marginTop: 15,
        zIndex: 1,
        height: 24,
    },
    tbT: {
        width: 189,
        // height: 'auto',
    },
    sHiu: {
        width: 138,
        fontWeight: "600",
        fontSize: FontSize.size_base,
        top: 0,
    },
    tbTParent: {
        top: 15,
        zIndex: 2,
        flexDirection: 'row',
    },
    parent: {
        top: 18,
        zIndex: 3,
        flexDirection: 'row',
    },
    tsNguynVnAParent: {
        top: 23,
        zIndex: 4,
        flexDirection: 'row',
    },
    group: {
        top: 28,
        zIndex: 5,
        flexDirection: 'row',
    },
    trngIHcCngNghThngParent: {
        top: 33,
        zIndex: 6,
        flexDirection: 'row',
    },
    thngBoParent: {
        top: 38,
        zIndex: 7,
        flexDirection: 'row',
    },
    oTo: {
        width: 190,
    },
    lnhVc: {
        width: 137,
        fontWeight: "600",
        fontSize: FontSize.size_base,
        top: 0,
    },
    oToParent: {
        top: 43,
        zIndex: 8,
        flexDirection: 'row',
    },
    cngVnNiBParent: {
        top: 48,
        zIndex: 9,
        flexDirection: 'row',
    },
    vnBnChOIuHnhParent: {
        top: 53,
        zIndex: 10,
        flexDirection: 'row',
    },
    iconAlignLeftParent: {
        top: 87,
        zIndex: 11,
        height: 24,
    },
    tChcThi: {
        top: 101,
        zIndex: 12,
        width: 327,
        fontSize: FontSize.size_base,
        textAlign: "left",
        color: Color.colorBlack,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        left: 0,
        position: "relative",
    },
    cnHiuLc: {
        marginLeft: -164,
        top: 115,
        fontSize: FontSize.size_sm,
        color: "#008800",
        zIndex: 13,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        textAlign: "center",
        fontWeight: "700",
        width: 327,
        left: "50%",
        position: "relative",
    },
    htHiuLc: {
        marginLeft: -164,
        top: 115,
        color: Color.colorDarkgray_200,
        zIndex: 13,
        textAlign: "center",
        fontWeight: "700",
        fontSize: FontSize.size_sm,
        // fontFamily: FontFamily.h6SemiBold,
        lineHeight: 24,
        width: 327,
        left: "50%",
        position: "relative",
    },
    paraprimarycenter: {
        // top: 0,
        left: 18,
        fontSize: FontSize.size_xs,
        // fontFamily: FontFamily.interBold,
        color: Color.colorWhite,
        textAlign: "center",
        fontWeight: "700",
        zIndex: 0,
    },
    buttonprimarydefault: {
        // marginLeft: -75,
        top: 118,
        borderRadius: 22,
        shadowColor: "rgba(0, 110, 233, 0.1)",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowRadius: 6,
        elevation: 6,
        shadowOpacity: 1,
        width: 150,
        justifyContent: "space-between",
        paddingHorizontal: Padding.p_21xl,
        paddingVertical: Padding.p_mini,
        zIndex: 14,
        alignItems: "center",
        position: 'relative',
        bottom: 100,
        height: 45,
        alignSelf: 'center',
    },
    list: {
        marginLeft: -163.5,
        top: 114,
        height: 700,
        paddingBottom: Padding.p_71xl,
        width: 327,
        left: "50%",
        position: "absolute",
        flexGrow: 1,
        flexDirection: 'column',
    },
    iconArrowBackIos: {
        top: 46,
        left: 32,
        zIndex: 1,
        position: "absolute",
    },
    chiTitCng: {
        marginLeft: -78,
        bottom: 10,
        fontSize: FontSize.size_5xl,
        fontWeight: "500",
        // fontFamily: FontFamily.robotoMedium,
        color: Color.colorWhite,
        zIndex: 1,
        left: "50%",
        position: "absolute",

    },
    searchBar: {
        marginLeft: -187.5,
        borderStyle: "solid",
        borderColor: Color.colorGreen,
        borderBottomWidth: 1,
        width: 375,
        height: 94,
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_3xs,
        paddingRight: Padding.p_5xs,
        paddingBottom: Padding.p_3xs,
        backgroundColor: Color.colorGreen,
        flexDirection: "row",
        left: "50%",
        position: "absolute",
        top: 0,
        justifyContent: "center",
    },
    detail1DocumentMangement: {
        backgroundColor: Color.white,
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
});