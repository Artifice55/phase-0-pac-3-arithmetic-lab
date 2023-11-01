function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n+ 1;
}

function decrement(n) {
    return n - 1;
}

function makeInt(n) {
    const parsedInt = parseInt(n, 10); // Explicitly specify base 10
    if (!isNaN(parsedInt)) {
        return parsedInt;
    }
}



function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    if (!isNaN(parsedFloat)) {
        return parsedFloat;
    } 
}

    
