export const getFormatedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const getDateMinusDays = (date, noOfDays)=>{
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - noOfDays)
}
