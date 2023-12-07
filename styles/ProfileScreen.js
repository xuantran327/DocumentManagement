import { StyleSheet } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    photo1IconLayout: {
        width: "100%",
        overflow: "hidden",
    },
    hVTnPosition1: {
        zIndex: 1,
        textAlign: "left",
        position: "absolute",
    },
    hVTnPosition: {
        zIndex: 1,
        textAlign: "left",
        position: "relative",
    },
    inputprimarydefaultPosition: {
        left: 0,
        height: 47,
        width: 327,
        position: "relative",
    },
    wrapperPosition: {
        paddingBottom: Padding.p_mini,
        paddingRight: Padding.p_166xl,
        paddingTop: Padding.p_mini,
        paddingLeft: Padding.p_mini,
        borderWidth: 1,
        borderColor: Color.colorDarkslategray,
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 6,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowColor: "rgba(0, 110, 233, 0.1)",
        borderRadius: Border.br_3xs,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderStyle: "solid",
        top: 0,
        left: 0,
        width: 327,
        position: "absolute",
    },
    nTypo: {
        color: Color.colorDimgray_100,
        // fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        position: "absolute",
    },
    nTypoEditable: {
        color: Color.colorBlack,
        // fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        position: "absolute",
    },
    hVTnTypo: {
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        left: 8,
    },
    parentPosition: {
        height: 24,
        top: 73,
        position: "relative",
        width: 109,
        // right: 10,
    },
    photo1Icon: {
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    mask: {
        marginLeft: -79.5,
        top: 20,
        borderRadius: 80,
        width: 160,
        height: 160,
        zIndex: 0,
        left: "50%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
    hVTn: {
        top: 58,
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        left: 8,
        zIndex: 1,
    },
    xunTrn: {
        top: 15,
        display: "flex",
        width: 295,
        height: 18,
        left: 16,
        zIndex: 0,
        alignItems: "center",
        // fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_sm,
    },
    xunTrnWrapper: {
        height: 47,
    },
    inputprimarydefault: {
        top: 64,
        zIndex: 2,
        height: 47,
    },
    ngySinh: {
        top: 316,
        zIndex: 3,
        textAlign: "left",
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        position: "absolute",
    },
    inputprimarydefault1: {
        top: 114,
        zIndex: 4,
        height: 47,
    },
    giiTnh: {
        top: 140,
        zIndex: 5,
        textAlign: "left",
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        position: "relative",
    },
    n: {
        top: 3,
        left: 32,
    },
    circle: {
        marginTop: -6.6,
        marginLeft: -6.6,
        top: "50%",
        borderRadius: 6,
        backgroundColor: Color.systemGreySGL1,
        width: 13,
        height: 13,
        left: "50%",
        position: "absolute",
    },
    circleEditable: {
        marginTop: -6.6,
        marginLeft: -6.6,
        top: "50%",
        borderRadius: 6,
        backgroundColor: Color.colorDarkslategray_100,
        width: 13,
        height: 13,
        left: "50%",
        position: "absolute",
    },
    container: {
        borderRadius: 13,
        borderColor: Color.systemGreySGL1,
        borderWidth: 2.6,
        width: 24,
        height: 24,
        borderStyle: "solid",
        top: 0,
        left: 0,
        position: "absolute",
        overflow: "hidden",
    },
    containerEditable: {
        borderRadius: 13,
        borderColor: Color.colorDarkslategray_100,
        borderWidth: 2.6,
        width: 24,
        height: 24,
        borderStyle: "solid",
        top: 0,
        left: 0,
        position: "absolute",
        overflow: "hidden",
    },
    sInThoi: {
        top: 169,
        zIndex: 9,
        textAlign: "left",
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        position: "relative",
    },
    frame: {
        height: 47,
    },
    inputprimarydefault2: {
        top: 174,
        zIndex: 10,
        height: 47,
    },
    email: {
        top: 194,
        zIndex: 11,
        textAlign: "left",
        width: 138,
        color: Color.colorDarkslategray_100,
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        lineHeight: 24,
        fontSize: FontSize.size_base,
        position: "relative",
    },
    inputprimarydefault3: {
        top: 199,
        zIndex: 12,
        height: 47,
    },
    list: {
        marginLeft: -163.5,
        top: 114,
        height: 622,
        paddingBottom: Padding.p_71xl,
        width: 327,
        left: "50%",
        position: "absolute",
        flexGrow: 1,
    },
    iconArrowBackIos: {
        top: 46,
        left: 32,
        zIndex: 1,
        position: "absolute",
    },
    thngTinC: {
        marginLeft: -88,
        bottom: 10,
        fontSize: FontSize.size_5xl,
        fontWeight: "500",
        // fontFamily: FontFamily.robotoMedium,
        color: Color.colorWhite,
        left: "50%",
    },
    editIcon: {
        top: 56,
        right: 32,
        zIndex: 1,
        position: "absolute",
    },
    searchBar: {
        marginLeft: -187.5,
        backgroundColor: Color.colorGreen,
        borderColor: Color.colorGreen,
        borderBottomWidth: 1,
        width: 375,
        height: 94,
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_3xs,
        paddingRight: Padding.p_5xs,
        paddingBottom: Padding.p_3xs,
        justifyContent: "center",
        flexDirection: "row",
        borderStyle: "solid",
        top: 0,
        alignItems: "center",
        left: "50%",
        position: "absolute",
    },
    profile1DocumentMangemen: {
        flex: 1,
        height: 812,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        width: "100%",
    },
    calendarAltIcon: {
        marginTop: 2,
        right: 14,
        zIndex: 1,
        overflow: "hidden",
    },
    circlePosition: {
        top: "50%",
        position: "absolute",
    },
    paraprimarycenter: {
        fontSize: FontSize.size_xs,
        fontWeight: "700",
        // fontFamily: FontFamily.interBold,
        width: 325,
        color: Color.colorWhite,
    },
    text2FlexBox: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    searchBarPosition: {
        backgroundColor: Color.colorGreen,
        flexDirection: "row",
        // left: "25%",
        position: "relative",
    },
    buttonprimarydefault: {
        // marginLeft: -75,
        top: 227,
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
    paraprimarycenter: {
        // top: 0,
        fontSize: FontSize.size_xs,
        fontWeight: "700",
        // fontFamily: FontFamily.interBold,
        width: 79,
        marginLeft: -3,
        color: Color.colorWhite,
    },
    searchBarFlexBox: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});