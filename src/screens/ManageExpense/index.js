import React, { useLayoutEffect, useState } from "react";
import { Alert, Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import ExpenseItem from "../../component/Expenses/ExpenseItem";
import IconButton from "../../component/IconButton";
import Button from "../../component/Button";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../../redux/action/Actions";
import { TextInput } from "react-native-gesture-handler";
import CustomDatePicker from "../../component/CustomDatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from 'react-native-uuid';
import { deleteExpenseData, storeData, updateExpenseData } from "../../util/https";

const ManageExpenses = ({ route, navigation }) => {

    const expenseId = route.params?.expenseId;
    console.log("expenseId", expenseId);
    const isEditing = !!expenseId
    const dispatch = useDispatch();
    let isManageScreen=true
    const expenses = useSelector((state) => state.expenseState.expenses);
    console.log("Expenses:", expenses);
    const selectedExpense = expenses.find((expense) => expense.id === expenseId);
    const [description, setDescription] = useState(selectedExpense ? selectedExpense.description : "");
    const [amount, setAmount] = useState(selectedExpense ? parseFloat(selectedExpense.amount) : 0.00);
    const [date, setDate] = useState(selectedExpense ? new Date(selectedExpense.date) : new Date());
    const [modalVisible, setModalVisible] = useState(false);
    const deleteHandler = async() => {
        dispatch(deleteExpense(expenseId))
        deleteExpenseData(expenseId)
        isManageScreen=false
        navigation.goBack();
    }

    const cancelHandler = () => {
        isManageScreen=false
        navigation.goBack();
    }

    const confirmHandler = () => {
        setModalVisible(true)
    }

    const updateExpenseHandler = async () => {
        const expenseData = {
            description,
            amount,
            date: date,
            ...(isEditing? { id: expenseId } : {})
        }
        if (expenseData?.amount >= 0 && expenseData?.description !== "") {
            if (isEditing) {
                updateExpenseData(expenseId, expenseData)
                dispatch(updateExpense(expenseData, expenseId))
            } else {
               const id= await storeData(expenseData) // API to store data in firebase
                dispatch(addExpense({...expenseData, id:id}))
            }
            isManageScreen=false
            navigation.goBack();
        } else {
            Alert.alert("Please Enter valid details!")
        }
    }

    const handleAmountChange = (text) => {
        const parsedAmount = parseFloat(text)
        setAmount(isNaN(parsedAmount) ? 0 : parsedAmount)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense",
            // headerLeft: Platform.OS === 'ios' ? () => (
            //     <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
            //         <Icon style={styles.arrow} name="angle-left" color="#fff" size={30} />
            //         <Text style={styles.back}>Back</Text>
            //     </TouchableOpacity>
            // ) : undefined,
        })
    }, [navigation, isEditing])

    return (
        <SafeAreaView style={styles.container}>
            {isEditing ?
                (<View style={styles.subContainer}>
                    <ExpenseItem isManageScreen={isManageScreen} expenseId={expenseId} description={description} date={date} amount={parseFloat(amount)} />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.cancelButton} mode="flat" onPress={cancelHandler}>Cancel</Button>
                        <Button onPress={confirmHandler}>Update</Button>
                    </View>
                    <View style={styles.deleteContainer}>
                        <IconButton name={"trash"} color={"red"} size={24} onPress={deleteHandler} />
                    </View>
                </View>)
                : (<View style={styles.buttonContainer}>
                    <Button style={styles.cancelButton} mode="flat" onPress={cancelHandler}>Cancel</Button>
                    <Button onPress={confirmHandler}>Add</Button>
                </View>)

            }
            <Modal style={styles.modalContainer} visible={modalVisible} animationType="slide" transparent={false}>
                <View style={styles.modalBackdrop}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>{isEditing ? "Update Expense" : "Add Expense"}</Text>
                        <TextInput
                            style={styles.txtInput}
                            value={description}
                            onChangeText={setDescription}
                            placeholder="description"
                        />
                        <TextInput
                            style={styles.txtInput}
                            value={amount.toString()}
                            onChangeText={handleAmountChange}
                            placeholder="Amount"
                        />
                        <CustomDatePicker date={date} setDate={setDate} />
                        <View style={styles.modalButtons}>
                            <Button style={styles.cancelButton} onPress={() => setModalVisible(false)}>Cancel</Button>
                            <Button style={styles.okButton} onPress={updateExpenseHandler}>OK</Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default ManageExpenses;