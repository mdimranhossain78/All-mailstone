
/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 * celsius to fahrenheit convert;
 */

function celsiusToFahrenheit(celsius){

    const convert =( celsius *(9/5)) + 32
    return convert
}

const result = celsiusToFahrenheit(50);
console.log(result)