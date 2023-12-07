import { StyleSheet } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    cardPosition: {
        left: 0,
        position: "relative",
        flexDirection: 'column',
    },
    iconLayout: {
        height: 24,
        width: 24,
    },
    iconClosePosition: {
        marginTop: -12,
        top: "50%",
        position: "absolute",
    },
    s1Icon: {
        width: 328,
        height: 246,
        overflow: "hidden",
    },
    carousel: {
        borderRadius: Border.br_base,
        width: 328,
        // zIndex: 0,
        height: 246,
        overflow: "hidden",
    },
    thngBo1: {
        fontSize: FontSize.h6SemiBold_size,
        lineHeight: 30,
        color: Color.colorGray_200,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        // flex: 1,
    },
    thngBo1Wrapper: {
        alignSelf: "stretch",
        flexDirection: "row",
        zIndex: 0,
    },
    iconDateRange: {
        top: 1,
        left: 3,
        position: "relative",
        overflow: "hidden",
    },
    text: {
        left: 8,
        width: 303,
        color: Color.colorDarkgray_200,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        top: 0,
        position: "relative",
    },
    iconDateRangeParent: {
        // height: "80%",
        width: "100.91%",
        top: 4,
        // right: 16,
        bottom: "-93.33%",
        left: "-0.91%",
        zIndex: 1,
        position: "relative",
        flexDirection: 'row',
    },
    frameParent: {
        top: 12,
        // zIndex: 1,
        width: 328,
    },
    card: {
        // zIndex: 0,
        height: "auto",
        flexDirection: 'column',
        paddingBottom: 30,
    },
    card1: {
        top: 340,
        zIndex: 1,
        height: 246,
    },
    card2: {
        top: 680,
        zIndex: 2,
        height: 246,
    },
    list: {
        top: 114,
        // marginLeft: 24,
        bottom: 114,
        width: "100%",
        height: "100%",
        paddingBottom: 134,
        position: "absolute",
        // flex: 0,
    },
    iconSearch: {
        left: 4,
        top: -1,
        zIndex: 0,
        overflow: "hidden",
    },
    iconClose: {
        right: -1,
        top: -1,
        zIndex: 1,
        paddingLeft: 8,
    },
    placeholder: {
        left: 44,
        display: "flex",
        width: 215,
        zIndex: 2,
        color: Color.colorDarkgray_200,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        marginTop: -12,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        fontWeight: "600",
        alignItems: "center",
    },
    input: {
        marginTop: 37,
        left: 56,
        borderRadius: Border.br_81xl,
        backgroundColor: Color.colorGray_100,
        borderColor: Color.colorGray_100,
        borderWidth: 1,
        paddingHorizontal: Padding.p_9xs,
        paddingVertical: Padding.p_5xs,
        top: "50%",
        borderStyle: "solid",
        width: 279,
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        zIndex: 0,
        position: "absolute",
    },
    iconArrowBackIos: {
        top: 46,
        left: 24,
        zIndex: 1,
        position: "absolute",
    },
    searchBar: {
        // marginLeft: -187.5,
        // left: "50%",
        // backgroundColor: Color.colorGreen,
        // borderColor: Color.colorGreen,
        // borderBottomWidth: 1,
        // width: "100%",
        // height: 60,
        // justifyContent: "center",
        // paddingLeft: Padding.p_base,
        // paddingTop: Padding.p_3xs,
        // paddingRight: Padding.p_5xs,
        // paddingBottom: Padding.p_3xs,
        // borderStyle: "solid",
        // alignItems: "center",
        // flexDirection: "row",
        // top: 0,
        // position: "absolute",
        backgroundColor: Color.colorGreen,
        borderColor: Color.colorGreen,
        height: 94,
    },
    searchTaskMangement: {
        backgroundColor: Color.colorWhite,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // flex: 1,
    },
    refreshControl: {
        alignSelf: 'flex-start'
    },
});