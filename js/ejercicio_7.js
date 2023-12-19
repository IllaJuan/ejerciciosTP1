let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));

if (num1 > num2) {
    if (num1 > num3) {
        document.write(`El ${num1} es el número más grande`);
    } else {
        document.write(`El ${num3} es el número más grande`);
    }
} else if (num1 === num2 && num1 === num3) {
    document.write("Los números son iguales");
} else {
    if (num2 > num3) {
        document.write(`El ${num2} es el número más grande`);
    } else {
        document.write(`El ${num3} es el número más grande`);
    }
}