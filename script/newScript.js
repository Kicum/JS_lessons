const array = [8, 5, 6, 7, 3, 11, 4, 10, 2, -1200];
let sum = 0; 
let result = {};
let hesh = [];

for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] !== 'number'){
        continue
    } else {
        sum += array[i];
    }
   
}
console.log({sum})



function findMinMax (array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i <= array.length; i++) {
        if (typeof array[i] !== 'number'){
            continue
        } else {
        
            if (min > array[i]) {
                min = array[i];
            }
        }
    }
    

    for (let i = 1; i <= array.length; i++) {
        if (typeof array[i] !== 'number'){
            continue
        } else {
        
            if (max < array[i]) {
                max = array[i];
            }
        }
    }
   
    return { min, max }
    
}
result =  findMinMax(array)
console.log(findMinMax(array))

// lesson 25

// const user = {
//     name: 'Serhii',
//     age: 32,
//     sayHello() {
//         console.log(`Hi, my name is ${this.name}, my age is ${this.age}`)
//     }
// }

// function isEmpty (obj) {
//     return Object.keys(obj).length === 0
// }
// console.log(isEmpty(user))
// user.sayHello()

// const calc = {
//     one: null,
//     two: null,
//     ask() {
//         this.one = Number(prompt(`Input first number`)); 
//         this.two = Number(prompt(`Input second number`)); 
//     }, 
//     sum(){
//         return this.one + this.two
//     }, 
//     mul(){
//         return this.one * this.two
//     },

// }

// calc.ask()
// console.log(calc.sum())
// console.log(calc.mul())


//Lesson 26

// function Accumulator(num) {
// this.num = num

// this.increment = () => {
//    this.num ++
// }

// this.decrement = () => {
//     this.num --
//  }
// }

// function CancelableAccumulator(num) {
//     Accumulator.call(this, num)
//     this.clear = () => {
//         this.num = num
//     }
// }

// let num = new CancelableAccumulator(3)
// console.log(num)
// num.increment()
// console.log(num)
// num.decrement()
// num.clear()
// console.log(num)


//Lesson 27


document.getElementById("sum").innerHTML = sum;
let item = document.getElementById("sum");
item.style.fontWeight = "bold"

if (sum > 1500) {
    item.style.color = "#98FF98"
} else if(sum > 1000) {
    item.style.color = "#5FC663"
}else if(sum > 500) {
    item.style.color = "#41AA4A"
}else if(sum > 100) {
    item.style.color = "#007417"
}else if(sum >= 0) {
    item.style.color = "#004200"
}else if (sum < -1500){
    item.style.color = "#FF0500"
} else if (sum < -1000) {
    item.style.color = "#FF3632"
}else if (sum < -500) {
    item.style.color = "#FF1D18"
}else  {
    item.style.color = "#FF6865"
}


document.getElementById("min").innerHTML = result.min;
document.getElementById("max").innerHTML = result.max;

let minResult = document.getElementById("min");
minResult.style.fontWeight = "bold"
minResult.style.color = "#FF0500"
let maxResult = document.getElementById("max");
maxResult.style.fontWeight = "bold"
maxResult.style.color = "#98FF98"
