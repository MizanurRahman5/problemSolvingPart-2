/**
 * big number representation
 * 
 */

const zim = 45;
const zima = 43;
const zimu = 432;

function bigNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1 + ' zim largest';
    } else if (num2 > num1 && num2 >num3){
        return num2 + ' zima largest';
    }else{
        return num3 + ' zimu largest';
    }

}



const result = bigNumber(zim, zima, zimu);
console.log(result)