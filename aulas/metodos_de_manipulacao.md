# Métodos de manipulação de arrays em typescript

Abaixo, apresentamos alguns métodos de manipulação de arrays em typescript, que serão úteis não só para resolver a próxima atividade @manipulacao mas também para outros exercícios de POO que surgirão ao longo da disciplina.

## filter

O método filter é usado para criar um novo array contendo todos os elementos do array original que passam em um teste específico. O teste é implementado por uma função callback que retorna true ou false para cada elemento do array.

Sintaxe:

``` typescript
let novoArray = arrayOriginal.filter(callback(elemento, indice, array));
```

Parâmetros:

- callback: Uma função que é chamada para cada elemento no array. Recebe três argumentos:
    - elemento: O elemento atual sendo processado no array.
    - indice (opcional): O índice do elemento atual.
    - array (opcional): O array original.

Exemplo:

``` typescript
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
```

Neste exemplo, filter cria um novo array contendo apenas os números pares do array original numeros.

## slice

O método slice é usado para retornar uma cópia rasa de uma porção do array original. Você pode especificar o início e o fim da porção que deseja copiar.

Sintaxe:

``` typescript
let novoArray = arrayOriginal.slice(inicio, fim);
```

Parâmetros:

- inicio: O índice no qual começa a extração. O elemento neste índice é incluído. Se omitido, começa do início do array.
- fim (opcional): O índice no qual termina a extração. O elemento neste índice não é incluído. Se omitido, vai até o final do array.

Exemplo:

``` typescript
let frutas = ['maçã', 'banana', 'cereja', 'damasco'];
let citricas = frutas.slice(1, 3);
console.log(citricas); // ['banana', 'cereja']
```

Neste exemplo, slice cria um novo array com os elementos de índice 1 a 2 do array original frutas.

## sort

O método sort é usado para ordenar os elementos de um array no local e retorna o array. Por padrão, a ordenação é feita como strings em ordem alfabética.

Sintaxe:

``` typescript
arrayOriginal.sort([funcaoComparacao]);
```

Parâmetros:

funcaoComparacao (opcional): Uma função que define a ordenação. Recebe dois argumentos:

- a: O primeiro elemento para comparação.
- b: O segundo elemento para comparação.

A função deve retornar:

- Um valor negativo se a deve vir antes de b.
- Zero se a e b são considerados iguais.
- Um valor positivo se a deve vir depois de b.
Exemplo:

``` typescript
let numeros = [4, 2, 5, 1, 3];
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 3, 4, 5]
```

Neste exemplo, sort ordena os números em ordem crescente.

## includes

O método includes é usado para determinar se um array contém um determinado elemento, retornando true ou false conforme apropriado.

Sintaxe:

``` typescript
let existe = arrayOriginal.includes(valorParaProcurar, [posicaoInicio]);
```

Parâmetros:

- valorParaProcurar: O valor a ser procurado no array.
- posicaoInicio (opcional): A posição no array na qual iniciar a busca. O padrão é 0.

Exemplo:

``` typescript
let frutas = ['maçã', 'banana', 'cereja'];
let temBanana = frutas.includes('banana');
console.log(temBanana); // true
```

Neste exemplo, includes verifica se 'banana' está no array frutas e retorna true.

## Resumo

- filter: Cria um novo array com todos os elementos que passam em um teste específico.
- slice: Retorna uma cópia rasa de uma porção do array original.
- sort: Ordena os elementos do array no local.
- includes: Verifica se um array contém um determinado elemento, retornando true ou false.