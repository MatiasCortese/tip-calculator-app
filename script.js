const bill = document.getElementById("billInput")
const tipBtns = document.getElementsByClassName("tipBtn")
const custom = document.getElementById("tipCustom")
const numOfPeople = document.getElementById("people-input")
const tipNumbers = document.getElementById("tip__numbers")
const totalNumbers = document.getElementById("total__numbers")
const reset = document.getElementById("resetBtn")
const error = document.getElementById("zeroError")
let inputContainer = document.getElementById("input-container")

bill.addEventListener('input', setBillValue)
Array.from(tipBtns).forEach(btn => {
    btn.addEventListener('click', handleClick)
})
custom.addEventListener('input', setCustomTip)
numOfPeople.addEventListener('input', setPeopleValue)
reset.addEventListener('click', resetApp)

let billValue = 0 // default value
let tipValue = 0.15 // default value -> 15% button is active
let peopleValue = 1
numOfPeople.value = 1

function setBillValue() {
    billValue = bill.value
    if(billValue > 0) {
    calculations()
    } else {
        resetApp()
    }
    return billValue
}

function handleClick(event) {
    Array.from(tipBtns).forEach(btn => {
        // clear the active state
        btn.classList.remove('active-tip')

        //set active state
        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active-tip')
            tipValue = parseFloat(btn.innerHTML)/100
        }     
    })
    //clear custom tip
    custom.value = ''
    calculations()
    return tipValue
}

function setPeopleValue() {
    peopleValue = numOfPeople.value
    if (peopleValue <= 0) {
        error.classList.remove("error-hidden")
        error.classList.add("error")
        numOfPeople.classList.add("redBorder")
    } else {
        numOfPeople.classList.remove("redBorder")
        error.classList.add("error-hidden")
        calculations()
        return peopleValue
    }  
}

function setCustomTip() {
    let customValue = custom.value
    customValue = customValue/100
    calculations()
    return customValue
}

function calculations() {
        if (custom.value == '') {
            let tipAmount = billValue * tipValue / peopleValue
            let total = billValue / peopleValue + tipAmount 
            injectCalculations(tipAmount, total)
            return tipAmount, total
        }
        if (custom.value != '' && custom.value > 0 && custom.value <= 100 ) {
            removeActiveState()
            let customValue = custom.value / 100
            let tipAmount = billValue * customValue / peopleValue
            let total = billValue / peopleValue + tipAmount 
            injectCalculations(tipAmount, total)
            return tipAmount, total
        } 
}

function resetApp() {
    tipNumbers.innerHTML = '$' + 0 + '.' + 0 + 0
    totalNumbers.innerHTML = '$' + 0 + '.' + 0 + 0
    bill.value = ''
    numOfPeople.value = 1
    numOfPeople.classList.remove("redBorder")
    error.classList.remove("error")
    error.classList.add("error-hidden")
    custom.value = ''
    removeActiveState()
    tipBtns[2].classList.add('active-tip')
}

function removeActiveState() {
    Array.from(tipBtns).forEach(btn => {
        // clear the active state
    btn.classList.remove('active-tip')
    })
}

function injectCalculations(tipAmount, total) {
    tipNumbers.innerHTML = "$" + tipAmount.toFixed(2)
    totalNumbers.innerHTML = "$" + total.toFixed(2)
}