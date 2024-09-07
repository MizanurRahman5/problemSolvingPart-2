const product = [
    {name : 'sampu', price : 40, quantity : 6},
    {name : 'kaina', price : 25, quantity : 2},
    {name : 'kaos', price : 35, quantity : 5},
    {name : 't-shirt', price : 20, quantity : 2},
    {name : 'kemeja', price : 50, quantity : 1},
    {name : 'baju', price : 30, quantity : 7},
    {name : 'celana', price : 45, quantity : 1},
    {name : 'jaket', price : 60, quantity : 5},
    {name : 'kaos', price : 35, quantity : 2}
];

function calculateTotalPrice(product) {
    let totalPrice = 0;
    for (const item of product){
       const price = item.price * item.quantity;
       totalPrice += price;
    }
    return totalPrice;

}

const result = calculateTotalPrice(product);
console.log(result);