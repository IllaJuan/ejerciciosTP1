let num1 = parseInt(prompt("Introduce un número:"));
let num2 = parseInt(prompt("Introduce otro número:"));

if (num1 > num2) {
    document.write(`El ${num1} es el número más grande`);
} else if (num1 < num2) {
    document.write(`El ${num2} es el número más grande`);
} else {
    document.write("Los números son iguales");
}