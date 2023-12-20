let num = parseInt(prompt("Ingrese un número:"));
let numeros = [2,3,5,7];
let divisible = [];

for (let numero of numeros) {
    if ((num % numero) == 0) {
        divisible.push(numero);
    }
}

if (divisible.length == 1) {
    divisible = divisible.toString();
    document.write(`El ${num} es divisible por ${divisible}.`);
} else if (divisible.length > 1) {
    divisible = divisible.toString();
    divisible = divisible.replace(/,/g, ', por ');
    divisible = divisible.replace(/,([^,]*)$/, ' y$1');
    document.write(`El ${num} es divisible por ${divisible}.`);
} else {
    document.write(`No es divisible por 2, 3, 5 o 7.`);
}
