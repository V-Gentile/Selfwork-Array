let a = [3, 5, 10, 2, 8];

let somma = a.reduce((acc, valore) => acc + valore, 0);
let media = somma / a.length;

let valoriMinori = a.filter(num => num < media);
let valoriMaggiori = a.filter(num => num > media);

console.log(`Media = ${media}`);
console.log(`Valori minori = [${valoriMinori.join(", ")}]`);
console.log(`Numero di valori minori della media: ${valoriMinori.length}`);
console.log(`Numero di valori maggiori della media: ${valoriMaggiori.length}`);
