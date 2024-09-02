import React  from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../../component/Expenses/ExpensesOutput";
import { useSelector } from "react-redux";

const AllExpenses=()=>{
    const expenses=useSelector((state)=> state.expenseState.expenses)
    return(
        <View>
            <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} animationType="zoomIn"/>
        </View>
    )
}
export default AllExpenses;