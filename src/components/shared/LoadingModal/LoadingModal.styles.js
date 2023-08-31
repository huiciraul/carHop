import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "transparent",
        borderColor:"transparent",
        borderWidth: 2,
        borderRadius: 10,
    },
    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    text:{
        color: "white",
        textTransform: "uppercase",
        marginTop: 10,
    },
});