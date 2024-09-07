const phonse = [
    {
        id: 1,
        name: 'iPhone 12',
        price: 1000,
        description: 'A revolutionary smartphone with an impressive camera.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21 Ultra',
        price: 1200,
        description: 'A powerful smartphone with an excellent camera and battery life.'
    },
    {
        id: 3,
        name: 'OnePlus 9 Pro',
        price: 800,
        description: 'An innovative smartphone with a powerful processor and a premium camera.'
    },
    {
        id: 4,
        name: 'Google Pixel 5',
        price: 700,
        description: 'A smartphone with a powerful camera and a high-quality display.'
    },
    {
        id: 5,
        name: 'Xiaomi Mi 11',
        price: 600,
        description: 'A stylish and compact smartphone with a high-quality camera and battery life.'
    }
]

function biggerPrice (phones){
    let bigger = phones[0];
    for (let phon of phones) {
        if (phon.price > bigger.price) {
            bigger = phon;
        }
    }
    return bigger;

}

const result = biggerPrice(phonse);

console.log(result);