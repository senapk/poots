# Iterando sobre arrays

Existem várias formas de iterar sobre um array em TypeScript. Vou mostrar algumas das formas mais comuns de fazer isso:

1. **For Loop Tradicional:**

```typescript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

2. **For...of Loop:**
   
O `for...of` itera sobre os valores dos elementos do array, em vez dos índices.

```typescript
let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}
```

3. **For...in Loop:**

Embora menos comum para arrays, o `for...in` itera sobre as propriedades enumeráveis de um objeto, e você pode usá-lo para iterar sobre os índices de um array.

```typescript
let arr = [1, 2, 3, 4, 5];
for (let index in arr) {
    console.log(arr[index]);
}
```

Lembre-se de escolher a abordagem mais adequada para sua situação, considerando a legibilidade do código, a complexidade da lógica e as necessidades específicas do seu projeto.

## Limitações do `for of`

O `for...of` loop não é projetado para alterar os elementos de um array durante a iteração. Isso ocorre porque o loop `for...of` itera sobre os valores dos elementos, não sobre os índices ou referências dos elementos reais no array. Isso faz com que a atribuição a uma variável de iteração não afete diretamente os elementos do array original.

Por exemplo, considere o seguinte código:

```typescript
let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    element = element * 2; // Isso não altera o array original
}
console.log(arr); // [1, 2, 3, 4, 5]
```

Nesse caso, o valor de `element` é apenas uma cópia do valor do elemento do array, e a atribuição `element = element * 2` não tem efeito sobre o array original `arr`.

Se você quiser alterar os elementos de um array durante a iteração, o `for` loop tradicional é mais apropriado, pois você terá acesso aos índices e, assim, poderá modificar os elementos diretamente. Veja um exemplo:

```typescript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2; // Isso altera o array original
}
console.log(arr); // [2, 4, 6, 8, 10]
```

Lembre-se de que, ao usar o `for` loop tradicional para alterar elementos, você está manipulando os elementos no próprio array original, o que pode ter consequências importantes dependendo do contexto. Certifique-se de entender como as operações afetam seus dados antes de realizar modificações em massa.