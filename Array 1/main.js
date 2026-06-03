function ordinaDecrescente(array) {
    return [...array].sort((a, b) => b - a);
}

function ordinaCrescente(array) {
    return [...array].sort((a, b) => a - b);
}

let numeriMisti = [15, -3, 42, 0, 8, -15, 23, 4, 8, 16];

console.log("Ordinamento Decrescente:");
console.log(ordinaDecrescente(numeriMisti));

console.log("Ordinamento Crescente:");
console.log(numeriMisti);
