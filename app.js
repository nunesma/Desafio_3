// alert('Ola')

// function imc(altura, peso) {
//     return peso/(altura * altura)
// }

// let altura = prompt('Qual a altura?')
// let peso = prompt('Qual o peso?')
// IMC = imc(altura, peso)
// alert(`O seu imc e ${IMC}`)

// function convert(dolar) {
//     let conversao = dolar * 4.80
//     return conversao.toFixed(2)
// }

// let dolares = prompt('Qual o valor?')
// let real = convert(dolares)
// alert(`A conversao de ${dolares} dolares em ${real} reais`)

// function mostrarTabuada(numero) {
//     for (let i = 1; i<=10; i++) {
//         let resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }

// let numero = prompt('Numero');
// mostrarTabuada(numero);

// function perimetroCirc(raio) {
//     let area = Math.PI*raio*raio;
//     let perimetro = 2 * Math.PI*raio;

//     console.log(`Area: ${area.toFixed(2)} metros quadrados`)
//     console.log(`Perimetro: ${perimetro.toFixed(2)} metros`)
// }

// let raio = prompt('Raio');
// perimetroCirc(raio)

function cFatorial(numero) {
    if (numero===0 || numero===1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i<= numero; i++) {
        fatorial = i;
        console.log(`${fatorial}`)
    }

    return fatorial;
}

let numero = prompt('Numero')
let resultado = cFatorial(numero)
console.log(`O fatorial de ${numero} e ${resultado}`)