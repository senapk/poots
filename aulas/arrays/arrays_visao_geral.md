# Arrays: visão Geral

Em TypeScript, assim como em JavaScript, um array é uma estrutura de dados que armazena uma coleção de elementos. Cada elemento em um array é acessado por meio de um índice numérico, começando do índice 0 para o primeiro elemento, 1 para o segundo e assim por diante. Arrays podem conter elementos de qualquer tipo, incluindo tipos primitivos como números, strings, booleanos, bem como objetos complexos e até mesmo outros arrays.

Aqui está um exemplo simples de como criar e usar arrays em TypeScript:

```typescript
// Declarando um array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Declarando um array de strings
let nomes: string[] = ["Alice", "Bob", "Charlie"];

// Acessando elementos do array
console.log(numeros[0]);  // Saída: 1
console.log(nomes[1]);    // Saída: "Bob"

// Modificando elementos do array
numeros[2] = 10;  // Agora, o array é [1, 2, 10, 4, 5]

// Obtendo o comprimento do array
console.log(numeros.length);  // Saída: 5

// Iterando por todos os elementos do array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

Além disso, TypeScript fornece muitas funcionalidades para trabalhar com arrays, como métodos de array embutidos e recursos de tipos mais avançados. Alguns exemplos de métodos de array incluem:

```typescript
let frutas: string[] = ["maçã", "banana", "laranja"];

// Adicionando um elemento no final do array
frutas.push("uva");  // Agora, o array é ["maçã", "banana", "laranja", "uva"]

// Removendo o último elemento do array
frutas.pop();  // Agora, o array é ["maçã", "banana", "laranja"]

// Encontrando o índice de um elemento no array
let indice = frutas.indexOf("banana");  // Retorna 1

// Removendo um elemento pelo índice
frutas.splice(1, 1);  // Remove o elemento no índice 1

// Concatenando arrays
let outrasFrutas: string[] = ["pêssego", "pera"];
let todasFrutas: string[] = frutas.concat(outrasFrutas);  // ["maçã", "laranja", "pêssego", "pera"]
```

Lembre-se de que TypeScript também fornece recursos de tipo que podem ser usados para declarar arrays com tipos específicos, tornando seu código mais seguro e legível. Por exemplo:

```typescript
let numeros: Array<number> = [1, 2, 3];
let nomes: string[] = ["Alice", "Bob"];
```
