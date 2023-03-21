function initNumbers() {
    let numberOne = null;
    let numberTwo = null;
    numberOne = prompt(`Input first number`); 
    numberTwo = prompt(`Input second number`); 
    return [numberOne, numberTwo]
}

function validateNumbers (arr) {
    if( !arr[0]) {
        return false
    } else if (!arr[1] ) {
        return false
     } else if (isNaN(+arr[0])) {
        return false
     } else if (isNaN(+arr[1])) {
        return false
     } else {
        return true
    }

}

function getCalc (arr) {
    let numberOne = +arr[0];
    let numberTwo = +arr[1];

    let answer = true

    let divFunc = numberTwo ? (numberOne / numberTwo) : 'a MISTAKE!!!!'
    
    if (numberOne < numberTwo) answer = confirm('Are you sure?')

    alert(`Addition result is  ${numberOne + numberTwo}!`);
    if(answer) alert(`Subtraction  result is  ${numberOne - numberTwo}!`);
    alert(`Multiplication  result is  ${numberOne * numberTwo}!`);
    alert(`Division result is  ${divFunc}`);
}

function calcNumbers() {
    const arr = initNumbers()
    const isValid = validateNumbers(arr)

    if (!isValid) {
        alert ("Ooops we got a trouble!")
        return
    }

    getCalc(arr)
}

calcNumbers()