# Tipos de dados em TS

O TypeScript fornece vários tipos de dados que você pode usar para declarar variáveis e especificar o tipo de valores que essas variáveis podem conter. Aqui estão alguns dos principais tipos de dados em TypeScript:

- Básicos
  - **number:** Representa números, tanto inteiros quanto números de ponto flutuante.
  - **string:** Representa sequências de caracteres.
  - **boolean:** Representa valores `true` ou `false`.
- Vazios
  - **void:** Representa a ausência de um valor, comumente usado para funções que não retornam nada.
  - **null:** Representa um valor nulo.
  - **undefined:** Representa um valor indefinido.
- Misturas
  - **any:** Representa um tipo de valor dinâmico, permitindo qualquer tipo de valor.
  - **Array:** Representa uma matriz de valores do mesmo tipo.
  - **Tuple:** Representa uma matriz de elementos com tipos fixos e conhecidos.
  - **enum:** Representa um conjunto de valores nomeados.

Além desses tipos básicos, o TypeScript também permite a criação de tipos personalizados usando interfaces, tipos literais, tipos genéricos e muito mais. Essa flexibilidade permite que você modele seus dados de maneira precisa e eficiente, tornando seu código mais seguro e legível.

## A união de Tipos

A união de tipos é um recurso poderoso do TypeScript que permite declarar que uma variável pode ser de mais de um tipo específico. Isso é útil quando você deseja que uma variável possa conter diferentes tipos de valores em diferentes momentos. A sintaxe básica da união de tipos é usar o caractere de barra vertical `|` entre os tipos que você deseja unir. Aqui está como funciona:

```typescript
let valor: number | string;

valor = 42;     // Válido, atribuindo um número
valor = "foo";  // Válido, atribuindo uma string
```

Neste exemplo, a variável `valor` pode conter tanto números quanto strings. Isso permite que você atribua diferentes tipos de valores à mesma variável em momentos diferentes.

A vantagem da união de tipos é que ela ajuda a tornar o código mais flexível, permitindo que as variáveis se adaptem a diferentes tipos de dados. No entanto, você deve estar ciente de que, quando se trabalha com uma variável de união de tipos, só é possível acessar propriedades ou métodos que são comuns a todos os tipos na união. Por exemplo:

```typescript
function imprimirTamanho(texto: number | string) {
    console.log(texto.length); // Isso resultaria em um erro de compilação, pois "length" não é comum a ambos os tipos
}
```

Neste caso, a função `imprimirTamanho` causa um erro de compilação, pois a propriedade `length` não é comum a ambos os tipos (`number` e `string`). Para resolver isso, você pode verificar o tipo usando as verificações de tipo ou os operadores condicionais.

```typescript
function imprimirTamanho(texto: number | string) {
    if (typeof texto === "string") {
        console.log(texto.length); // Isso é seguro, porque agora TypeScript sabe que texto é uma string
    }
}
```

Em resumo, a união de tipos é uma maneira útil de lidar com variáveis que podem conter diferentes tipos de valores. No entanto, você precisa lidar com as diferenças nos tipos ao acessar propriedades ou executar operações específicas a um tipo dentro da união.

## União com null

A união de tipos com `null` é uma maneira de declarar que uma variável pode ter um valor de um tipo específico ou pode ser nula (`null`). Isso é útil quando você quer indicar explicitamente que uma variável pode estar ausente, além de conter valores do tipo especificado. Para fazer uma união com `null`, você simplesmente inclui o tipo `null` na união usando o caractere de barra vertical `|`.

Aqui está como funciona:

```typescript
let valor: number | null;

valor = 42;    // Válido, atribuindo um número
valor = null;  // Válido, atribuindo nulo
```

Neste exemplo, a variável `valor` pode conter valores do tipo `number` ou pode ser `null`.

Lembre-se de que, ao trabalhar com variáveis que possuem tipos de união que incluem `null`, é uma boa prática verificar se a variável é `null` antes de tentar acessar propriedades ou realizar operações nela:

```typescript
if (valor !== null) {
    console.log(valor.toFixed(2)); // Acessar toFixed somente se valor não for nulo
}
```

Essa verificação é importante porque tentar acessar propriedades ou métodos de uma variável nula pode resultar em erros de tempo de execução.

A união com `null` é útil para expressar claramente a possibilidade de ausência de valor em uma variável, o que ajuda a evitar erros de tempo de execução relacionados a valores nulos não esperados.

## Lista de coisas que podem ser nulas

```typescript
let numerosOuNulos: (number | null)[] = [5, null, 10, null, 15];

console.log(numerosOuNulos); // Saída: [5, null, 10, null, 15]
```

Neste exemplo, a variável `numerosOuNulos` é uma matriz de elementos que podem ser do tipo `number` ou `null`. Você pode ver que tanto os valores numéricos quanto os valores nulos foram inseridos na matriz.

Lembre-se de que, ao acessar elementos dessa matriz, é uma boa prática verificar se um elemento é `null` antes de tentar realizar operações que se aplicam apenas a números:

```typescript
for (const elemento of numerosOuNulos) {
    if (elemento !== null) {
        console.log(elemento * 2); // Multiplicar somente se o elemento não for nulo
    }
}
```

Dessa forma, você evita erros de tempo de execução causados por tentar realizar operações matemáticas em valores nulos.

## Conversão de tipos

Em TypeScript, você pode realizar conversões entre tipos usando várias abordagens, dependendo da situação. Aqui estão algumas das maneiras mais comuns de realizar conversões de tipos:

**Construtores de Tipo:**
Muitos tipos primitivos, como `Number`, `String`, `Boolean`, `Array`, etc., também têm funções construtoras que podem ser usadas para realizar conversões explícitas.

```typescript
let valor: string = "123";
let numero: number = Number(valor); // Conversão para número
let texto: string = String(numero); // Conversão para string
```

**Operações Aritméticas e Lógicas:**

```typescript
let numero: number = +"5";
let texto = "" + 5;
```