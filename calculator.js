function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    return num1 / num2;
}


function calculation(a, b, operation) {
    if (operation === 'add') {
        let result = add(a, b);
        return result;
    } else if (operation === 'subtract') {
        let result = subtract(a, b);
        return result;
    } else if (operation === 'multiply') {
        let result = multiply(a, b);
        return result;
    } else if (operation === 'devide') {
        let result = devide(a, b);
        return result;
    } else {
        return "Invalid operation!";
    }

}


let result = calculation(10, 10, 'devide');
console.log('Your Calculation result is =', result);