import axios from 'axios'

const BACKEND_URL = "https://reduxapp-3d79e-default-rtdb.firebaseio.com"
export async function storeData(expenseData) {
    try {
        const response = await axios.post(BACKEND_URL + "/expenses.json", expenseData);
        const id = response.data.name;
        return id;
    } catch (error) {
        console.error("Error storing data:", error);
        throw error;
    }
}

export async function getExpenses() {
    try {
        const response = await axios.get(BACKEND_URL + "/expenses.json");
        const expenses = [];
    
        for (let key in response.data) {
          const expObj = {
            id: key,
            amount: response.data[key].amount,
            description: response.data[key].description,
            date: new Date(response.data[key].date),
          };
          expenses.push(expObj);
        }
        return expenses;
      } catch (error) {
        console.log("Error fetching expenses:", error);
        // throw error;
      }
}

export const updateExpenseData = (id, expenseData) => {
    axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData)
}

export const deleteExpenseData = (id) => {
    axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}
