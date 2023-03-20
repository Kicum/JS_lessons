let array = [8, 5, 6, 7, 3, 11, 4, -10, 2, -1];
let sum = 0; 
let min = array[0];
let max = array[0];
let hesh = [];

for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] !== 'number'){
        continue
    } else {
        sum += array[i];
    }
   
}
// alert(`Sum of array = ${sum}`)
console.log(sum)

for (let i = 1; i <= array.length; i++) {
    if (typeof array[i] !== 'number'){
        continue
    } else {

        if (min > array[i]) {
            min = array[i];
        } 
         else if (max < array[i]) {
            max = array[i];
        }
    }
}
// alert(`Min digit is ${min}`)
console.log(min)
// alert(`Max digit is ${max}`)
console.log(max)

for (let i = 0; i <= 4; i++) {
    
    if (!i) {
        hesh.push('#')
        console.log(hesh[i])
        continue
    } 
    hesh[i] = hesh[i-1] + "#"
    console.log(hesh[i])
}