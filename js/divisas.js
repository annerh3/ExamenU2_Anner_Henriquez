// 1 USD = 24,72960 LPS
// 1 LPS = 0.040 USD

// 1 EUR = 26.88 LPS
// 1 LPS = 0.037 EUR

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(2);
// })
// alert('Utilice los Botones para Seleccionar la cantidad')

const cantidadBox = document.querySelector('#amount');
console.log(cantidadBox);
    cantidadBox.addEventListener('click', () => {
        console.log('Click en cantidadBox');
        const cantidad = document.querySelector('#amount').valueAsNumber;
        console.log(cantidad );
    });

// const seleccionarDivisaAconvertir = document.querySelector('#from');
// console.log(seleccionarDivisaAconvertir);
// const childrenFROM = seleccionarDivisaAconvertir.children;
// console.log(childrenFROM);

// object.addEventListener("change", myScript);

const seleccionarDivisaAconvertir = document.getSelection('#from');
console.log(seleccionarDivisaAconvertir);   
seleccionarDivisaAconvertir.addEventListener(".onChange", () => {
    console.log('desde change');
});

// seleccionarDivisaAconvertir.addEventListener('click', () => {
//     console.log('desde evento seleccionarDivisa');
// });