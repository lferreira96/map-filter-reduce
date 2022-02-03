/* 
// Enunciado: - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

// Exercício 01 - Usando o .map com this, vetor e com um número variável, de acordo com a constante
const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapComThis(arr, argThis){
    return arr.map(
        function(item){
            return item * this.value;
        }
    , argThis)
}

// Exercício 02 - Usando o .map sem o this, com vetor e com um número fixo

const nums = [1,2];
var nums2 = [];
var nums3 = [];

nums2 = mapComThis(nums,apple);
nums3 = mapComThis(nums,orange);
console.log('this -> apple',mapComThis(nums,apple));
console.log('this -> orange',mapComThis(nums,orange));
console.log(nums2);
console.log(nums3); 

function mapComThis (arr){
    return arr.map(
        function(item){
            return item * 2;
        }
    );
}

const nums = [1,2,3,4,5,6];
console.log(nums);
console.log(mapComThis(nums)); */

// Enunciado: - Filtre e retorne todos os números pares de um array.

// Duas formas diferentes de se escrever a função:
// Primeira forma, igual a feita nos exercícios anteriores
/*function filtraPares(arr){
    return arr.filter(
        function callBack(item){
            return item %2 === 0;
        }
    );
}*/

//Segunda forma, separando as duas funções, chamando a callBack dentro do arr.filter

/*function filtraPares(arr){
    return arr.filter(callBack); // só chamamos o callBack uma vez que o item já será o arr.
}

function callBack(item){
    return item %2 ===0;
}

function filtraImpares(arr){
    return arr.filter(callBack2); // só chamamos o callBack uma vez que o item já será o arr.
}

function callBack2(item){
    return item %2 !==0;
}

const meuArray=[2,4,6,8,1,3,5,12,7,9,10];

console.log(filtraPares(meuArray));
console.log(filtraImpares(meuArray));*/


//1. Some todos os números de um array

/*function somaNumeros(arr){
    return arr.reduce(
        function(prev,current){
            console.log({prev});
            console.log({current});
            return prev + current;
        },10
    )
}

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(somaNumeros(arr));
*/
//2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista = [
    {
        name: 'Sabão em Pó',
        preco: 21
    },
    {
        name: 'Detergente',
        preco: 2
    },
    {
        name: 'Amaciante',
        preco: 15
    },
    {
        name: 'Leite',
        preco: 4
    },
    {
        name: 'Carne',
        preco: 35
    },
    {
        name: 'Arroz',
        preco: 15
    },
    {
        name: 'Feijão',
        preco: 10
    },
    {
        name: 'Óleo',
        preco: 15
    },
    {
        name: 'Azeite',
        preco: 23
    },
];

const saldoDisponivel = 500;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(
        function(prev,current, index){
            console.log('rodada',index + 1);
            console.log({prev});
            console.log({current});
            return prev - current.preco;
        },saldoDisponivel);
}

var saldo = saldoDisponivel- calculaSaldo(saldoDisponivel,lista);
console.log(calculaSaldo(saldoDisponivel,lista));
console.log(`Você ainda tem ${saldo} de ${saldoDisponivel} `);