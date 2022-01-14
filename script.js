// tip percentage  button clicked
let fivePercent = document.getElementById("column1__tipsContainer--five")
let tenPercent = document.getElementById("column1__tipsContainer--ten")
let fifteenPercent = document.getElementById("column1__tipsContainer--fifteen")
let twentyfivePercent = document.getElementById("column1__tipsContainer--twentyfive")
let fiftyPercent = document.getElementById("column1__tipsContainer--fifty")
let custom = document.getElementById("column1__tipsContainer--custom")
let reset = document.getElementById("resetBtn")
let tipNumbers = document.getElementById("tip__numbers")
let totalNumbers = document.getElementById("total__numbers")
let errorMsg = document.getElementById("zeroError")
let inputContainer = document.getElementById("input__Container")
let buttons = document.getElementsByClassName("column1__tipBtn")

// Bill value input
function getInputValue() {
    let inputValue = document.getElementById("column1__billInput").value
    bill = parseInt(inputValue)
    if (bill < 1 || bill > 1000000) {
        alert("Must be more than 1 and less than 1kk")
    } 
    return bill
}

// Function that take number of people
function getNumberOfPeople() {
    let numberOfPeople = document.querySelector(".column1__numberPeopleInput").value
    let numberOfPeopleIn = document.querySelector(".column1__numberPeopleInput")
    numOfPeople = parseInt(numberOfPeople)
    if (numOfPeople < 1) {
        errorMsg.classList.remove("column1__numberPeopleErrorNotDisplayed")
        errorMsg.classList.add("column1__numberPeopleErrorDisplayed")
        numberOfPeopleIn.classList.add("redBorder")
    } 
    if (numOfPeople > 0) {
        errorMsg.classList.add("column1__numberPeopleErrorNotDisplayed")
        numberOfPeopleIn.classList.remove("redBorder")
    }
    return numOfPeople
    
}

custom.addEventListener('input', function(){
    customPercentage = custom.value
    customPercentage = parseInt(customPercentage)
    if (customPercentage < 1 || customPercentage > 100) {
        alert("Must be more than 1 and less than 100")
        tipNumbers.innerHTML = "$" + 0 + "." + 0 + 0
        totalNumbers.innerHTML = "$" + 0 + "." + 0 + 0
        customPercentage.delete()
        custom.placeholder.innerHTML = "Jjejeje"
    } else {
    customPercentage /= 100
    tipCalculation = bill * customPercentage / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers 
    }
})


fivePercent.addEventListener('click', function() {
    fivePercent.classList.add("selectedBtn")
    tipCalculation = bill * 0.05 / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers
})

tenPercent.addEventListener('click', function() {
    tenPercent.classList.add("selectedBtn")
    tipCalculation = bill * 0.10 / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers
})

fifteenPercent.addEventListener('click', function() {
    fifteenPercent.classList.add("selectedBtn")
    tipCalculation = bill * 0.15 / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers
})

twentyfivePercent.addEventListener('click', function() {
    twentyfivePercent.classList.add("selectedBtn")
    tipCalculation = bill * 0.25 / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers
})

fiftyPercent.addEventListener('click', function() {
    fiftyPercent.classList.add("selectedBtn")
    tipCalculation = bill * 0.50 / numOfPeople
    tipNumbers.innerHTML = "$" + tipCalculation.toFixed(2)
    totalCalculation = bill / numOfPeople + tipCalculation
    totalNumbers.innerHTML = "$" + totalCalculation.toFixed(2)
    return tipNumbers, totalNumbers
})

// reset button
reset.addEventListener('click', function(){
    tipNumbers.innerHTML = "$" + 0 + "." + 0 + 0
    totalNumbers.innerHTML = "$" + 0 + "." + 0 + 0
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selectedBtn")
        buttons[i].classList.add("column1__tipBtn")
    }
    return tipNumbers, totalNumbers, buttons
    /* Acá hay que hacer un for each que al clickear el reset a todos los botones le aplique la clase común, es decir, no selected */
})







