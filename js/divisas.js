// 1 USD = 24,72960 LPS
// 1 LPS = 0.040 USD

// 1 EUR = 26.88 LPS
// 1 LPS = 0.037 EUR

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(2);
// })
alert('Utilice los Botones para Seleccionar la cantidad')

// estas variables las dejaré declaradas nada mas (las utilizaré dentro de los eventos y dentro de la funcion convertirDivisa)
let valorDeOpcionSeleccionadaFROM;
let valorDeOpcionSeleccionadaTO;
let cantidad = 0;

const cantidadBox = document.querySelector('#amount');
console.log(cantidadBox);

cantidadBox.addEventListener('click', () => {
    console.log('Click en cantidadBox');
    cantidad = document.querySelector('#amount').valueAsNumber;
    console.log(cantidad );
});

// const seleccionarDivisaAconvertir = document.querySelector('#from');
// console.log(seleccionarDivisaAconvertir);
// const childrenFROM = seleccionarDivisaAconvertir.children;
// console.log(childrenFROM);

// object.addEventListener("change", myScript);

// const seleccionarDivisaAconvertir = document.getSelection('#from');
// console.log(seleccionarDivisaAconvertir);   
// seleccionarDivisaAconvertir.addEventListener(".onChange", () => {
//     console.log('desde change');
// });

// EL CAPTURAR LOS VALORES DE LOS SELECTORES FUE MI BLOQUEO, INGE. NO LOGRABA LA CAPURA DE ESOS ELEMENTOS
// HASTA QUE ENCONTRÉ EN LA DOCUMETACION COMO HACERLO (ya con mas calma) 

 //capturar value del primer input
const seleccionarDivisaAconvertir = document.getElementById("from");
console.log(seleccionarDivisaAconvertir);

seleccionarDivisaAconvertir.addEventListener('change', () => {
    const opcionSeleccionada = seleccionarDivisaAconvertir.options[seleccionarDivisaAconvertir.selectedIndex];
    console.log(opcionSeleccionada);
    valorDeOpcionSeleccionadaFROM = opcionSeleccionada.value;
    console.log(valorDeOpcionSeleccionadaFROM);
});

//capturar value del segundo input
const seleccionarDivisaAlaQueSeConvertira = document.getElementById("to");
console.log(seleccionarDivisaAlaQueSeConvertira);

seleccionarDivisaAlaQueSeConvertira.addEventListener('change', () => {
    const opcionSeleccionadaTO = seleccionarDivisaAlaQueSeConvertira.options[seleccionarDivisaAlaQueSeConvertira.selectedIndex];
    console.log(opcionSeleccionadaTO);
    valorDeOpcionSeleccionadaTO = opcionSeleccionadaTO.value;
    console.log(valorDeOpcionSeleccionadaTO);
    
});

// calcular la conversion

const tasasDeConversion = {
                                usd: {
                                    eur: 0.88,
                                    lps: 24.7296},
                                eur: {
                                    usd: 1.14,
                                    lps: 26.88},
                                lps: {
                                    usd: 0.040,
                                    eur: 0.037}
                        };

function convertirDivisa() {
    console.log(valorDeOpcionSeleccionadaFROM);
    console.log(valorDeOpcionSeleccionadaTO);
    console.log(cantidad);

    if (valorDeOpcionSeleccionadaFROM === valorDeOpcionSeleccionadaTO) {
        alert('Esta Conversión no es válida. Cambie las divisas.');
    } else {
        console.log('Pasó la validación inicial');
        const factorConversion = tasasDeConversion[valorDeOpcionSeleccionadaFROM][valorDeOpcionSeleccionadaTO]; //  acceder a la tasa de conversion entre dos las divisas seleccionadas
        const resultado = cantidad * factorConversion;
        mostrarEnHTML(resultado);
        console.log(resultado);
}
}
// funcion para mostrar el resultado en el html
function mostrarEnHTML(respuesta) {
    const div = document.getElementById('result-container');
    div.innerHTML = '';
    const respuestaAmostrar = document.createElement('div');
    respuestaAmostrar.textContent = respuesta;
    div.appendChild(respuestaAmostrar);
}