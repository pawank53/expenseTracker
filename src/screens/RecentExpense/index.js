import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../../component/Expenses/ExpensesOutput";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDays } from "../../util/date";
import { getExpenses } from "../../util/https";
import { setExpenses } from "../../redux/action/Actions";
import Loader from "../../component/Loader";
const RecentExpenses = () => {

    const dispatch = useDispatch()
    const expenses = useSelector((state) => state.expenseState.expenses);
    console.log("Resent screen expenses::", expenses);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async () => {
            setLoading(true)
            const expenses = await getExpenses();
            console.log("Hi ", expenses);
            setLoading(false)
            dispatch(setExpenses(expenses))
        }
        fetchExpenses()
    }, [dispatch])
    const getLast7DaysExpenses = (expenses) => {
        return expenses.filter(expense => ((expense.date.toISOString().split('T')[0]) > (new Date(getDateMinusDays(new Date(), 7))).toISOString().split('T')[0]));
    }
    const recentExpenses = getLast7DaysExpenses(expenses);

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <ExpensesOutput
                expenses={recentExpenses}
                expensesPeriod={"Last 7 Days"}
                animationType="fadeInUp"
                fallBackText="No expenses registered for the last 7 days." />
        </View>
    )
}
export default RecentExpenses;