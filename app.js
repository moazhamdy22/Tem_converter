const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num){
    return Math.round(num*100)/100;
}
function clecuisToFahernheitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp*(9/5))+32;
    const kTemp = cTemp+273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}
function fahernheitToCelcuisAndKelvin(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp +459.67)* (5/9);
    celciusInput.value= roundNum(cTemp);
    kelvinInput.value= roundNum(kTemp);
}
function kelvinToCelcuisAndFahrenheit(){
    const kTepm = parseFloat(kelvinInput.value);
    const cTemp =kTepm-273.15;
    const fTemp =( (9/5) * (kTepm - 273) )+32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);

}
function main(){
    celciusInput.addEventListener('input',clecuisToFahernheitAndKelvin)
    fahrenheitInput.addEventListener('input',fahernheitToCelcuisAndKelvin)
    kelvinInput.addEventListener('input',kelvinToCelcuisAndFahrenheit)

}
main();


