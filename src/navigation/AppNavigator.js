import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ManageExpenses from "../screens/ManageExpense/index";
import { GLOBAL_COLORS } from "../constants/constants";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:GLOBAL_COLORS.colors.primary100},
                headerTintColor:'#fff',
                headerLeft:()=> null
            }}>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{presentation:'modal'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;