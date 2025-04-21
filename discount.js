// *if you buy 100 or less, the price is $100 each.
// *if you buy 101 to 200, the price is $90 each.
// *if you buy 201 or more, the price is $70 each.

// function discountPrice(quantity) {
//     if (quantity <= 100) {
//         let total = quantity * 100;
//         return total;
//     } else if (quantity <= 200) {
//         let total = quantity * 90;
//         return total;
//     } else(total = quantity * 70);
//     return total;
// }


// let totalPrice = discountPrice(300);
// console.log('Discount based on your buying quantity! and your total price is =', totalPrice);



// ***********************************************************


function priceAfterDiscount(poriman) {
    if (poriman <= 100) {
        let total = poriman * 100;
        return total;
    } else if (poriman <= 200) {
        let total = poriman * 80;
        return total;
    } else(total = poriman * 70);
    return total;
}


let totalPrice = priceAfterDiscount(400);
console.log('You got a interesting discount on your product =', totalPrice);