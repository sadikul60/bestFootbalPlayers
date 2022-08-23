
//  added event handlar
// button-1
document.getElementById('button-one').addEventListener('click', function(){
    const newMbappeText = document.getElementById('text-one');
    const newText = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }
    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newText;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-one');
});
// button-2
document.getElementById('button-two').addEventListener('click', function(){
    
    const newMbappeText = document.getElementById('text-two');
    const newtextFieldElement = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newtextFieldElement;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-two');
});
// button-3
document.getElementById('button-three').addEventListener('click', function(){
    const newMbappeText = document.getElementById('text-three');
    const newtextFieldElement = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newtextFieldElement;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-three');
});
// button-4
document.getElementById('button-four').addEventListener('click', function(){
    const newMbappeText = document.getElementById('text-four');
    const newtextFieldElement = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newtextFieldElement;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-four');
});
// button-5
document.getElementById('button-five').addEventListener('click', function(){
    const newMbappeText = document.getElementById('text-five');
    const newtextFieldElement = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newtextFieldElement;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-five');
});
// button-6
document.getElementById('button-six').addEventListener('click', function(){
    const newMbappeText = document.getElementById('text-six');
    const newtextFieldElement = newMbappeText.innerText;

    const listNumbers = getListElementNumber('list-container');
    if (listNumbers == 5) {
        alert('No more than five players can be added to the list');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li')
    li.innerText = newtextFieldElement;
    
    listContainer.appendChild(li);
    setDisanledButtion('button-six');
});

//=============================================================================
//=============================================================================

// Function declare (New Function Create).
// Function-1 getInputValueById function adding
function getInputFieldValueById (inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputValue = parseFloat(inputFieldValueString);
    return inputValue;
}

// Function-2 getListElementNumber function addin
function getListElementNumber(listQuantity){
    const quantities = document.getElementById(listQuantity).childNodes.length;
    return quantities;

}

// Function-3 getTextFieldElementById function adding
function getTextFieldElementById (textElementId){
    const textFieldElement = document.getElementById(textElementId);
    const textFieldElementString = textFieldElement.innerText;
    const textElement = parseFloat(textFieldElementString);
    return textElement;
}

// Function-4 setTextFieldElementById function adding
function setTextFieldElementById (setTextId, newElement){
    const textFieldElement = document.getElementById(setTextId);
    textFieldElement.innerText = newElement;
}

// Function-5 setDisabledButtonById function adding
function setDisanledButtion (buttonId){
    const button = document.getElementById(buttonId);
    if (button.disabled){
        button.disabled = false;
    }
    else {
        button.disabled = true;
        button.style.backgroundColor = 'rgb(156 163 175)';
    }
}


//==================================================================
//==================================================================
// added event handlar
// calculate button event handlar
document.getElementById('calculate-btn').addEventListener('click', function(){
    // inputValue
    const perPlayerAmount = getInputFieldValueById('player-input');

    // Per Player validation set
    if (isNaN(perPlayerAmount)){
        alert ('Please Player Field input a valid number');
        return;
    }
    // get listQuantity
    const listQuantity = getListElementNumber('list-container')
    
    // totalExpenses Amount calculation
    const totalExpenses = perPlayerAmount * listQuantity;
    // set totalExpenses Amount
    setTextFieldElementById('total-expenses', totalExpenses);
});


// added event handlar 
// calculate sub total 

document.getElementById('total-btn').addEventListener('click', function(){
    
    // inputFieldValue
    const managerAmount = getInputFieldValueById('manager-input');
    const coachAmount = getInputFieldValueById('coach-input');
    const totalExpenses = getTextFieldElementById('total-expenses');
    // managerAmount and coachAmount validation set
    if (isNaN(managerAmount)){
        alert ('Please Manager Field input a valid number');
        return;
    }
    if (isNaN(coachAmount)){
        alert ('Please Coach Field input a valid number');
        return;
    }
    // subtotal Amount calculation
    const subTotal = managerAmount + coachAmount + totalExpenses;
    setTextFieldElementById('sub-total', subTotal);
});


