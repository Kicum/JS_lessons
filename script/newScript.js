const array = [8, 5, 6, 7, 3, 11, 4, -10, 2, -1];
let sum = 0; 

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
   
    return { min, max}
    
}
console.log(findMinMax(array))

// lesson 25

const user = {
    name: 'Serhii',
    age: 32,
    sayHello() {
        console.log(`Hi, my name is ${this.name}, my age is ${this.age}`)
    }
}

function isEmpty (obj) {
    return Object.keys(obj).length === 0
}
console.log(isEmpty(user))
user.sayHello()

const calc = {
    one: null,
    two: null,
    ask() {
        this.one = Number(prompt(`Input first number`)); 
        this.two = Number(prompt(`Input second number`)); 
    }, 
    sum(){
        return this.one + this.two
    }, 
    mul(){
        return this.one * this.two
    },

}

calc.ask()
console.log(calc.sum())
console.log(calc.mul())