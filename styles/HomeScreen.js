import { StyleSheet } from "react-native";
import { Border, FontSize, Color, FontFamily, Padding } from "./GlobalStyles";

export const styles = StyleSheet.create({
    cardPosition: {
        marginLeft: -164,
        // height: 246,
        left: "50%",
    },
    pointerActive: {
        color: Color.colorGreen,
        fontSize: 30,
        marginHorizontal: 1.5,
    },
    pointerInactive: {
        color: Color.colorDarkgray_200,
        fontSize: 30,
        marginHorizontal: 1.5,
    },
    maskLayout: {
        borderRadius: Border.br_base,
        overflow: "hidden",
    },
    iconPosition: {
        // bottom: "0%",
        // maxHeight: "100%",
        // maxWidth: "100%",
        height: 20,
        left: 3,
        // top: "0%",
        position: "relative",
        overflow: "hidden",
    },
    parentPosition: {
        // zIndex: 1,
        position: "relative",
    },
    slidesFlexBox: {
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
    },
    textTypo: {
        color: Color.colorDarkgray_200,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        position: "absolute",
    },
    searchBarPosition: {
        width: 375,
        left: "50%",
        position: "absolute",
    },
    inputFlexBox: {
        borderStyle: "solid",
        alignItems: "center",
        flexDirection: "row",
    },
    xemThmTypo: {
        // fontFamily: FontFamily.robotoBold,
        fontWeight: "700",
        textAlign: "left",
    },
    pointer: {
        top: 228,
        flexDirection: "row",
        position: "absolute",
        alignSelf: 'center',
    },
    photo1Icon: {
        top: -11.5,
        // right: "-5.72%",
        // bottom: "-6.36%",
        // left: "5.72%",
        // position: "absolute",
        // overflow: "hidden",
        width: 328,
        height: 246,
    },
    mask: {
        // height: "90.65%",
        bottom: "9.35%",
        left: "0%",
        top: "0%",
        // borderRadius: Border.br_base,
        right: "0%",
        position: "absolute",
        // width: "100%",
        // backgroundColor: Color.white,
        backgroundColor: "#f2f2f2",
    },
    carousel15: {
        // zIndex: 0,
        // top: 0,
        width: 328,
        height: 246,
        // position: "absolute",
    },
    carousel: {
        // zIndex: 0,
        height: 246,
        width: 328,
        overflow: "hidden",
        flexDirection: 'column',
        position: "relative",
    },
    thngBo1: {
        fontSize: FontSize.h6SemiBold_size,
        lineHeight: 30,
        textAlign: "left",
        // fontFamily: FontFamily.h6SemiBold,
        color: Color.colorGray_200,
        fontWeight: "600",
        // flex: 1,
    },
    thngBo1Wrapper: {
        alignSelf: "stretch",
        flexDirection: "row",
        // zIndex: 0,
    },
    iconDateRange: {
        width: 25,
        right: 25,
    },
    text: {
        left: 28,
        width: 303,
        top: 0,
    },
    iconDateRangeParent: {
        height: 24,
        width: "100.91%",
        top: 4,
        bottom: "-93.33%",
        left: "-0.91%",
        right: "0%",
        // position: "relative",
        flexDirection: 'row',
    },
    frameParent: {
        top: 12,
        // left: 0,
        width: 328,
        // bottom: 300,
        // width: 'auto',
        position: "relative",
        // flexDirection: 'column',
    },
    card: {
        height: "auto",
        // marginLeft: -164,
        // left: "50%",
        flexDirection: 'column',
        marginBottom: 30,
        // width: 'auto',
    },
    list: {
        top: 114,
        paddingBottom: Padding.p_71xl,
        left: "50%",
        height: 593,
        width: 328,
        marginLeft: -163.5,
        position: "absolute",
        flexGrow: 1,
    },
    placeholder: {
        marginTop: -12,
        top: "50%",
        left: 44,
        display: "flex",
        width: 215,
        fontWeight: "600",
        color: Color.colorDarkgray_200,
        lineHeight: 24,
        fontSize: FontSize.size_base,
        alignItems: "center",
        zIndex: 1,
    },
    input: {
        top: -1,
        bottom: 10,
        left: -3,
        borderRadius: Border.br_81xl,
        backgroundColor: Color.colorGray_100,
        borderColor: Color.colorGray_100,
        borderWidth: 1,
        width: 335,
        height: 40,
        paddingHorizontal: Padding.p_xs,
        paddingVertical: Padding.p_5xs,
        zIndex: 0,
        position: "absolute",
    },
    searchBar: {
        backgroundColor: Color.colorGreen,
        borderColor: Color.colorGreen,
        borderBottomWidth: 1,
        height: 94,
        justifyContent: "center",
        paddingLeft: Padding.p_base,
        paddingTop: Padding.p_3xs,
        paddingRight: Padding.p_5xs,
        paddingBottom: Padding.p_3xs,
        borderStyle: "solid",
        alignItems: "center",
        flexDirection: "row",
    },
    cngVnMi: {
        fontSize: 24,
        color: Color.colorGray_200,
        fontWeight: "700",
    },
    xemThm: {
        fontSize: 18,
        color: Color.colorGreen,
    },
    cngVnMiNhtParent: {
        top: 262,
        justifyContent: "space-between",
        padding: 3,
        zIndex: 3,
        marginLeft: -164,
        left: "50%",
        width: 328,
    },
    homeTaskMangement: {
        height: '100%',
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.colorWhite,
    },
});