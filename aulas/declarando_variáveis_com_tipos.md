# Declarando variáveis com tipos

Em TypeScript, você pode usar tipos para definir o formato esperado das variáveis. Isso ajuda a melhorar a verificação de tipos durante a compilação e fornece informações úteis sobre o que é esperado de uma variável em seu código. Aqui estão algumas maneiras de usar tipos em variáveis do TypeScript:

1. **Tipo Explícito:**
Você pode declarar o tipo de uma variável explicitamente ao mesmo tempo em que a declara. Por exemplo:

```typescript
let idade: number = 25;
let nome: string = "João";
```

2. **Inferência de Tipo:**
O TypeScript é capaz de inferir o tipo da variável com base no valor que você atribui a ela. Isso é chamado de inferência de tipo. Por exemplo:

```typescript
let idade = 25;    // TypeScript inferirá que "idade" é do tipo number
let nome = "João"; // TypeScript inferirá que "nome" é do tipo string
```

3. **Tipos Personalizados:**
Além dos tipos básicos como `number`, `string`, etc., você também pode criar seus próprios tipos personalizados usando interfaces, tipos literais, uniões e outros recursos do TypeScript.

```typescript
interface Pessoa {
  nome: string;
  idade: number;
}

let pessoa: Pessoa = {
  nome: "Maria",
  idade: 30,
};
```

4. **Tipos de União:**
Você pode definir uma variável com um tipo que seja uma união de vários tipos. Isso permite que a variável aceite qualquer um dos tipos na união.

```typescript
let idadeOuNome: number | string;
idadeOuNome = 25;     // Válido
idadeOuNome = "João"; // Válido
```

5. **Tipos Nullable:**
Você pode usar o operador `null` ou `undefined` como parte do tipo da variável.

```typescript
let valor: number | null = null;
```

6. **Tipos Constantes:**
Você pode usar a palavra-chave `const` para declarar variáveis com tipos literais, que aceitam apenas um valor específico.

```typescript
const status: "ativo" | "inativo" = "ativo";
```

Essas são apenas algumas das maneiras pelas quais você pode usar tipos em variáveis no TypeScript. A vantagem de usar tipos é que eles ajudam a capturar erros de tipo em tempo de compilação, tornando seu código mais robusto e legível.

## Sempre inicialize suas variáveis

Sim, é possível criar variáveis sem inicializá-las em TypeScript. Quando você declara uma variável sem atribuir um valor a ela, seu tipo será considerado `undefined`. Isso é útil quando você sabe que vai atribuir um valor a essa variável posteriormente no código, mas ainda não tem um valor inicial.

Aqui está um exemplo:

```typescript
let numero: number; // Declaração de variável sem inicialização
numero = 42;        // Atribuição de valor posteriormente
```

Neste exemplo, a variável `numero` é declarada sem ser inicializada. Ela é considerada do tipo `number | undefined`, indicando que ela pode conter um valor numérico ou `undefined`. A atribuição é feita posteriormente, quando um valor numérico é atribuído à variável.

Lembre-se de que, ao usar uma variável declarada sem inicialização, você precisará garantir que ela seja atribuída com um valor adequado antes de tentar usá-la em algum cálculo ou operação. Caso contrário, você pode encontrar erros de tempo de execução devido ao valor `undefined`.

## Não existe int e float no typescript

Para imprimir apenas a parte inteira de um número em TypeScript, você pode usar a função `Math.floor()`, que arredonda um número para baixo para o inteiro mais próximo. Aqui está como você pode fazer isso:

```typescript
const numero: number = 7.83;
const parteInteira: number = Math.floor(numero);

console.log(parteInteira); // Isso imprimirá somente a parte inteira, ou seja, 7
```

Neste exemplo, a variável `numero` contém o valor 7.83. Usando `Math.floor(numero)`, você obtém a parte inteira do número, que é 7. Em seguida, você pode imprimir o valor da variável `parteInteira`, que mostrará apenas a parte inteira do número original.

## Não existe char em typescript

Não, o TypeScript não possui um tipo de dado específico chamado `char`, como em algumas outras linguagens de programação. Em TypeScript, o tipo principal para representar caracteres individuais é o tipo `string`, que representa sequências de caracteres.

Se você deseja trabalhar com um único caractere de uma string, pode acessar o caractere usando um índice, já que em JavaScript e TypeScript, as strings são indexadas como arrays. Por exemplo:

```typescript
const palavra: string = "Hello";
const primeiroCaractere: string = palavra[0]; // "H"
```

No exemplo acima, `palavra[0]` acessa o primeiro caractere da string `"Hello"`.

No entanto, lembre-se de que, embora `palavra[0]` retorne um caractere como uma string de comprimento 1, o tipo é `string`, não `char`.

Se você está interessado em tratar caracteres como valores individuais, geralmente você usa o tipo `string`. Se você precisa trabalhar com códigos Unicode ou operações mais avançadas relacionadas a caracteres, pode ser útil pesquisar funções e bibliotecas que manipulam strings e caracteres em JavaScript ou TypeScript.