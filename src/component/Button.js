import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GLOBAL_COLORS } from "../constants/constants";

const Button = ({ children, onPress, style, mode }) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text style={[styles.text, mode === "flat" && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:GLOBAL_COLORS.colors.primary500,
        // borderRadius:15
    },
    button: {
        padding: 10
    },
    text: {
        color: GLOBAL_COLORS.colors.primary50,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    flat: {
        backgroundColor: 'transparent'
    },
    flatText: {
        color: GLOBAL_COLORS.colors.primary100
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: GLOBAL_COLORS.colors.primary200,
        borderRadius: 6
    }
})

export default Button;