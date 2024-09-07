const product = [
    {name : 'sampu', price : 40},
    {name : 'kaina', price : 25},
    {name : 'kaos', price : 35},
    {name : 't-shirt', price : 20},
    {name : 'kemeja', price : 50},
    {name : 'baju', price : 30},
    {name : 'celana', price : 45},
    {name : 'jaket', price : 60},
    {name : 'kaos', price : 35}
];

function getProductSum (product) {
    let totalAllprice = 0;

    for (let products  of product){
        if ( products.price){
            totalAllprice += products.price;
        }
    }
    return totalAllprice;
}

const productSum = getProductSum(product);
console.log(productSum);