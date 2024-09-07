/**
 * first 100 => 100
 *  101 to 200 => 90
 *  above 200 => 70
 */

function layerDiscount(quality){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    
    if (quality <= first100Price) {
        const totalAllprice = first100Price * quality;
        return totalAllprice;
    }else if (quality <= second100Price) {
        const total100price = first100Price * 100;
        const remainingQuantity = quality - 100;
        const secon100Price = remainingQuantity * second100Price;
        const total = total100price + secon100Price;
        return total;

        
    }else{
        const firs100Price = first100Price * 100;
        const secon100Price = second100Price * 100;
        const remainingQuantity = quality - 200;
        const totalAbove200Price = remainingQuantity * above200Price;
        const total = firs100Price + secon100Price + totalAbove200Price;
        return total;
    }

}

const result = layerDiscount(101);
console.log(result);