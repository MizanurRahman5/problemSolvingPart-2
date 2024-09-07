/**
 * multiple      elements calculat
 */

function totalPrice (shirt, pant, shoes){

    const shirtPrice = 200;
    const pantPrice = 500;
    const shoesPrice = 1000;

    const totalShirtPrice = shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoesPrice = shoes * shoesPrice;

    const totalAllprice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalAllprice;
}


const result = totalPrice(1, 0, 0);
console.log(result)