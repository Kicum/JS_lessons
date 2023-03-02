let numberOne = 0;
let numberTwo = 0;

numberOne = prompt(`Input first number`); 
numberTwo = prompt(`Input second number`); 

if (numberOne === null || numberOne === '' || numberTwo == null || numberTwo === '') {
    alert ("Ooops we got a trouble")

}else if (numberTwo === '0') {
    alert(`Addition result is : ${+numberOne + +numberTwo}!`);
    alert(`Subtraction  result is : ${Number(numberOne) - Number(numberTwo)}!`);
    alert(`Multiplication  result is : ${+(numberOne) * +(numberTwo)}!`);
    alert(`Division result is a mistake!`);

}else if (numberOne < numberTwo) {
    if (confirm('Are you sure?') === true){
        alert(`Addition result is : ${+numberOne + +numberTwo}!`);
        alert(`Subtraction  result is : ${+(numberOne) - +(numberTwo)}!`);
        alert(`Multiplication  result is : ${+(numberOne) * +(numberTwo)}!`);
        alert(`Division result is : ${+(numberOne) / +(numberTwo)}!`);

    } else {
        alert(`Addition result is : ${+numberOne + +numberTwo}!`);
        alert(`Multiplication  result is : ${+(numberOne) * +(numberTwo)}!`);
        alert(`Division result is : ${+(numberOne) / +(numberTwo)}!`);
    }
    
     
} else {
    alert(`Addition result is : ${+numberOne + +numberTwo}!`);
    alert(`Subtraction  result is : ${Number(numberOne) - Number(numberTwo)}!`);
    alert(`Multiplication  result is : ${+(numberOne) * +(numberTwo)}!`);
    alert(`Division result is : ${parseInt(numberOne) / parseInt(numberTwo)}!`);
}


