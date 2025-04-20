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

function shoppingCost(aluQuantity, peyajQuantity, chaalQuantity) {

    let aluPrice = 40;
    let peyajPrice = 80;
    let chaalPrice = 65;

    let aluTotalPrice = aluQuantity * aluPrice;
    let peyajTotalPrice = peyajQuantity * peyajPrice;
    let chaalTotalPrice = chaalQuantity * chaalPrice;

    let totalPrice = aluTotalPrice + peyajTotalPrice + chaalTotalPrice;

    return {

        totalPrice: totalPrice,
        aluPrice: aluTotalPrice,
        peyajPrice: peyajTotalPrice,
        chaalPrice: chaalTotalPrice

    }


}


let shopping = shoppingCost(5, 2, 10);
console.log('Total shopping cost =', shopping.totalPrice);

// *********************************
console.log('Alu Price is =', shopping.aluPrice);
// *********************************
console.log('Peyaj price is =', shopping.peyajPrice);
// *********************************
console.log('Chaal price is =', shopping.chaalPrice);