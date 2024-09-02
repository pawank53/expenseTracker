import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => {
    return (
        <View styles={styles.container}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
})
export default Loader;