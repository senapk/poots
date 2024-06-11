# Modificando arrays

**Inserção de Elementos:**

1. **push(item1, item2, ...)**: Adiciona um ou mais elementos no final do array. Retorna o novo comprimento do array.

```typescript
let arr = [1, 2, 3];
let newLength = arr.push(4, 5); // Retorna 5, arr agora é [1, 2, 3, 4, 5]
```

2. **unshift(item1, item2, ...)**: Adiciona um ou mais elementos no início do array. Retorna o novo comprimento do array.

```typescript
let arr = [2, 3, 4];
let newLength = arr.unshift(0, 1); // Retorna 5, arr agora é [0, 1, 2, 3, 4]
```

**Remoção de Elementos:**

1. **pop()**: Remove e retorna o último elemento do array.

```typescript
let arr = [1, 2, 3, 4, 5];
let lastElement = arr.pop(); // Retorna 5, arr agora é [1, 2, 3, 4]
```

2. **shift()**: Remove e retorna o primeiro elemento do array.

```typescript
let arr = [1, 2, 3, 4, 5];
let firstElement = arr.shift(); // Retorna 1, arr agora é [2, 3, 4, 5]
```

3. **splice(startIndex, deleteCount, item1, item2, ...)**: Remove elementos de uma posição específica e, opcionalmente, insere novos elementos no lugar. Retorna um array contendo os elementos removidos.

```typescript
let arr = [1, 2, 3, 4, 5];
let removedElements = arr.splice(1, 2, 6, 7); // Retorna [2, 3], arr agora é [1, 6, 7, 4, 5]
```

4. **slice(startIndex, endIndex)**: Retorna uma cópia superficial dos elementos entre os índices `startIndex` (incluído) e `endIndex` (não incluído) do array original.

```typescript
let arr = [1, 2, 3, 4, 5];
let subArray = arr.slice(1, 4); // Retorna [2, 3, 4]
```

Lembre-se de que esses são apenas alguns dos métodos disponíveis para manipulação de arrays em TypeScript. Existem muitos outros métodos úteis, como `concat`, `splice`, `sort`, `reverse`, entre outros. Certifique-se de consultar a documentação do TypeScript ou do JavaScript para obter informações completas sobre os métodos de arrays.