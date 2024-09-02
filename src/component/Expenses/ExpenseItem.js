import React, { useRef } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { GLOBAL_COLORS } from "../../constants/constants";
import * as Animatable from "react-native-animatable"
import { getFormatedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, date, amount, index, animationType, isManageScreen }) => {

    const navigation = useNavigation();
    const Component = isManageScreen === "manage" ? View : Pressable;
    const pressHandler = () => {
        navigation.navigate("ManageExpenses", { expenseId: id, description: description, date: date.toISOString(), amount: parseFloat(amount) })
    }

    if (amount === undefined || isNaN(amount)) {
        amount = 0; // Default to 0 if invalid
    }


    return (
        <Animatable.View
            animation={animationType}
            delay={index * 100}
            useNativeDriver
        >
            <Component
                {...(!isManageScreen && {
                    android_ripple: { color: 'rgba(0, 0, 0, 0.3)' },
                    style: ({ pressed }) => pressed && styles.pressed,
                    onPress: pressHandler,
                })}
            >
                <View style={styles.expenseItem}>
                    <View>
                        <Text style={[styles.text, styles.description]}>{description}</Text>
                        <Text style={styles.text}>{getFormatedDate(date)}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                    </View>
                </View>
            </Component>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    },
    expenseItem: {
        backgroundColor: GLOBAL_COLORS.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        marginVertical: 8,
        borderRadius: 6,
        elevation: 3,
        shadowColor: GLOBAL_COLORS.colors.gray500,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 5,
        shadowOpacity: 0.5
    },
    text: {
        color: GLOBAL_COLORS.colors.primary50
    },
    description: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 16

    },
    amountContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        minWidth: 75
    },
    amount: {
        color: GLOBAL_COLORS.colors.primary700,
        fontWeight: 'bold'
    }
})
export default ExpenseItem;