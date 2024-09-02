import React from "react";
import { View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList=({expenses, animationType})=>{
const renderExpenses=(itemData)=>{
    return(
        <View>
            <ExpenseItem {...itemData.item} index={itemData.index} animationType={animationType} />
        </View>
    )
}

    return(
        <View>
            <FlatList 
            data={expenses}
            renderItem={renderExpenses}
            keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

export default ExpensesList;