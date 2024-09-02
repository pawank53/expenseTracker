import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "../screens/RecentExpense/index";
import AllExpenses from "../screens/AllExpense/index";
import { GLOBAL_COLORS } from "../constants/constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import IconButton from "../component/IconButton";

const Tab = createBottomTabNavigator();
const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: 0.5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
        } else {
            viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
        }
    }, [focused]);

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { top: 0 }]}
        >

            <Animatable.View ref={viewRef} duration={1000}>
                <Icon type={item.type}
                    name={focused ? item.activeIcon : item.inActiveIcon}
                    color={focused ? 'white' : 'gray'}
                    size={item.size}
                />
            </Animatable.View>
        </TouchableOpacity>
    )
}

const TabNavigator = () => {

    const TabArr = [
        { route: 'RecentExpenses', label: 'Recent', type: Icon, activeIcon: 'hourglass-2', inActiveIcon: 'hourglass-o', component: RecentExpenses, size: 24 },
        { route: 'AllExpenses', label: 'All Expenses', type: Icon, activeIcon: 'calendar', inActiveIcon: 'calendar-o', component: AllExpenses, size: 24 },
    ];

    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: GLOBAL_COLORS.colors.primary100 },
                headerTintColor: 'white',
                tabBarActiveTintColor: GLOBAL_COLORS.colors.accent500,
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: GLOBAL_COLORS.colors.error500,
                    position: 'absolute',
                    margin: 16,
                    borderRadius: 16,
                    height: 60,
                },
                headerRight: ({ tintColor }) => (<IconButton name="plus" size={24} color={tintColor} onPress={() => { navigation.navigate("ManageExpenses") }} />)
            })}
        >

            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />

                )
            })}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    }
})
export default TabNavigator;