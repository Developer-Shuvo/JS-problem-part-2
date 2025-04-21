function discountPrice(quantity) {
    if (quantity <= 100) {
        let total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        let total = quantity * 90;
        return total;
    } else(total = quantity * 70);
    return total;
}


let totalPrice = discountPrice(200);
console.log('Discount based on your buying quantity! and your total price is =', totalPrice);