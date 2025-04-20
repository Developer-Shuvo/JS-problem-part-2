// ******************  How much wood do I need to make furniture?  ********************
// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {

//     let perChairWood = 5;
//     let perTableWood = 8;
//     let perBedWood = 40;

//     let chairTotalWood = chairQuantity * perChairWood;
//     let tableTotalWood = tableQuantity * perTableWood;
//     let bedTotalWood = bedQuantity * perBedWood;

//     let totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

//     return {
//         totalWood: totalWood,
//         chairWood: chairTotalWood,
//         tableWood: tableTotalWood,
//         bedWood: bedTotalWood
//     };
// }

// let wood = woodQuantity(5, 2, 2);
// console.log('To make furniture I need total wood: =', wood.totalWood);

// // *********************************
// console.log('Chair wood needed =', wood.chairWood);

// // *********************************
// console.log('Table Wood needed =', wood.tableWood);


// // *********************************
// console.log('Bed wood needed =', wood.bedWood);











// *****************Necessary shopping calculation *********************

// function shoppingCost(aluQuantity, peyajQuantity, chaalQuantity) {

//     let aluPrice = 40;
//     let peyajPrice = 80;
//     let chaalPrice = 65;

//     let aluTotalPrice = aluQuantity * aluPrice;
//     let peyajTotalPrice = peyajQuantity * peyajPrice;
//     let chaalTotalPrice = chaalQuantity * chaalPrice;

//     let totalPrice = aluTotalPrice + peyajTotalPrice + chaalTotalPrice;

//     return {

//         totalPrice: totalPrice,
//         aluPrice: aluTotalPrice,
//         peyajPrice: peyajTotalPrice,
//         chaalPrice: chaalTotalPrice

//     }

// }

// let shopping = shoppingCost(5, 2, 10);
// console.log('Total shopping cost =', shopping.totalPrice);

// // *********************************
// console.log('Alu Price is =', shopping.aluPrice);
// // *********************************
// console.log('Peyaj price is =', shopping.peyajPrice);
// // *********************************
// console.log('Chaal price is =', shopping.chaalPrice);




// ********************Minimum number find out of an array********************

// let prices = [20000, 37000, 26000, 16000, 23000, 43000];

// function getMinPrice(numbers) {
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }


// let lowestPrice = getMinPrice(prices);
// console.log('Most Lowest Mobile price is =', lowestPrice);







// ********************Minimum Price/ lowest price find out of an object***********************

// let mobile = [{ name: 'Nokia', price: 20000, color: 'Black', madeIn: 'Finland' },
//     { name: 'Samsung', price: 37000, color: 'White', madeIn: 'Korea' },
//     { name: 'Apple', price: 26000, color: 'Black', madeIn: 'USA' },
//     { name: 'Oppo', price: 16000, color: 'Blue', madeIn: 'China' },
//     { name: 'Vivo', price: 23000, color: 'Black', madeIn: 'China' },
//     { name: 'Xiaomi', price: 43000, color: 'Black', madeIn: 'China' }
// ];


// function lowestPrice(mobiles) {
//     // console.log(mobiles);
//     let min = mobiles[0];
//     for (let phone of mobiles) {
//         if (phone < min)
//             min = phone;
//         console.log(phone)
//     }
//     return min;
// }


// let cheap = lowestPrice(mobile);
// console.log('Lowest price mobile is =', cheap);



let shopping = [
    { name: 'shirt', price: 800, size: 'L' },
    { name: 'Pant', price: 1200, size: 'L' },
    { name: 'Oil', price: 200, size: 'L' },
    { name: 'Medicine', price: 1000 },
    { name: 'Food', price: 1300 },
    { name: 'Cap', price: 400 },
]

function getTotalPrice(shopping) {

    let totalPrice = 0;
    for (let product of shopping) {
        // console.log(product);
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;

}



let totalPrice = getTotalPrice(shopping);
console.log('Todays shopping total price is =', totalPrice);