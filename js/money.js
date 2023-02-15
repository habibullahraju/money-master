document.getElementById('btn-calculate').addEventListener('click', function () {
    const income = document.getElementById('income-field').value;
   const incomeParse = parseFloat(income);
   if (incomeParse <= 0 || isNaN(incomeParse)) {
        alert('Inter your salary degit!')    
   }
    const food = document.getElementById('food').value;
    const foodValue = parseFloat(food);
    if (foodValue <= 0 || isNaN(foodValue)) {
        alert('please enter a valid number!')
    }
    const rent = document.getElementById('rent').value;
    const rentValue = parseFloat(rent);
    if (rentValue <= 0 || isNaN(rentValue)) {
        alert('please enter a valid number!')
    }
    const cloths = document.getElementById('cloths').value;
    const clothsValue = parseFloat(cloths);
    if (clothsValue <= 0 || isNaN(clothsValue)) {
        alert('please enter a valid number!')
    }
    const expensSum = foodValue + rentValue + clothsValue;

    const totalExpenses = document.getElementById('total-expenses').innerText = expensSum;
    const incomeField = document.getElementById('income-field').value;
    const incomeFieldValue = parseFloat(incomeField);

    const incomeFieldMinusExpenses = incomeFieldValue - totalExpenses;
    document.getElementById('balance').innerText = incomeFieldMinusExpenses;

})
document.getElementById('btn-save').addEventListener('click', function(){

    const saveInputField = document.getElementById('save-field').value;
    const saveInputFieldValue = parseFloat(saveInputField);
    const balance = document.getElementById('balance').innerText;
    const balanceNumber = parseFloat(balance);
    const calculateSaving = (balanceNumber * saveInputFieldValue /100 ) ;
    document.getElementById('saving-amount').innerText = calculateSaving;
    if (saveInputFieldValue < 0 || isNaN(saveInputFieldValue)) {
        alert("enter a valid number!")
}
    const finalTotal = balanceNumber - calculateSaving;
    document.getElementById('remaining-total').innerText = finalTotal;
    
})