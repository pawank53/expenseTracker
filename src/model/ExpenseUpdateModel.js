import React, { useState } from "react";
import { View, Model, TextInput, Text } from "react-native";
import Button from "../component/Button";

const ExpenseUpdateModel = ({ expense, visible, onClose, onSubmit }) => {
    const [description, setDescription] = useState(expense?.description || '');
    const [amount, setAmount] = useState(expense?.amount || '');
    const [date, setDate] = useState(expense?.date || new Date());

    console.log("Inside modal");
    const handleSubmit = () => {
        const updatedExpense = {
            ...expense,
            description,
            amount,
            date
        }
        onSubmit(updatedExpense);
        onClose();
    }

    return (
        <Model visible={visible} animationType="slide" transparent={true}>
            {/* <View>
                <Text>Update Expenses</Text>
                <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    placeholder="Amount"
                    value={amount}
                    onChangeText={setAmount}
                />
                <TextInput
                    placeholder="Date"
                    value={date}
                    onChangeText={setDate}
                />
                <Button onPress={handleSubmit}>Submit</Button>
                <Button onPress={onClose}>Cancel</Button>
            </View> */}
        </Model>
    )
}
export default ExpenseUpdateModel;