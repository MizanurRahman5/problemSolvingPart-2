/**
 * smallest number of elements  in the array
 */

function smallestNumber(arr) {
    
    let min = arr[0];
    for (let num of arr) {
        if (num < min){
            min = num;
        }
    }
    return min;
    
}

const array = [45,65,78,43,657,35,78,454,56];
const result = smallestNumber(array);
console.log(result);