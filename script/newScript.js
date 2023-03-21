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

