# Revisão de FUP

<!-- toc -->
- [Criação de variáveis](#criação-de-variáveis)
- [Tipos](#tipos)
- [Sempre inicialize suas variáveis](#sempre-inicialize-suas-variáveis)
- [Não existe int e float no typescript](#não-existe-int-e-float-no-typescript)
- [Não existe char em typescript](#não-existe-char-em-typescript)
- [Tipos de dados em TS](#tipos-de-dados-em-ts)
- [A união de Tipos](#a-união-de-tipos)
- [União com null](#união-com-null)
- [Lista de coisas que podem ser nulas](#lista-de-coisas-que-podem-ser-nulas)
- [Funções](#funções)
- [Formatação de Strings](#formatação-de-strings)
- [Boas práticas](#boas-práticas)
- [Conversão de tipos](#conversão-de-tipos)
- [if e ternário](#if-e-ternário)
- [while](#while)
- [for](#for)
<!-- toc -->




## Funções

Em TypeScript, assim como em JavaScript, funções são blocos de código que podem ser definidos e chamados para executar tarefas específicas. No entanto, o TypeScript adiciona recursos de tipagem estática às funções, permitindo que você especifique os tipos dos parâmetros e o tipo de retorno da função. Isso torna seu código mais seguro, legível e passível de detecção de erros em tempo de compilação.

Aqui está uma explicação sobre os principais conceitos relacionados a funções em TypeScript:

1. **Declaração de Função:**
   Você pode declarar funções usando a seguinte sintaxe:

   ```typescript
   function nomeDaFuncao(parametro1: Tipo, parametro2: Tipo): TipoRetorno {
       // Corpo da função
   }
   ```

2. **Parâmetros e Tipo de Retorno:**
   Você pode definir os tipos dos parâmetros e o tipo de retorno da função:

   ```typescript
   function soma(a: number, b: number): number {
       return a + b;
   }
   ```

3. **Chamando uma Função:**
   Para chamar uma função, você usa seu nome seguido pelos argumentos entre parênteses:

   ```typescript
   const resultado = soma(5, 3); // resultado terá o valor 8
   ```

4. **Funções Anônimas (Expressões de Função):**
   Você também pode usar funções anônimas (ou expressões de função) que são atribuídas a variáveis ou passadas como argumentos para outras funções:

   ```typescript
   const multiplicacao = function(a: number, b: number): number {
       return a * b;
   };

   const resultado = multiplicacao(4, 6); // resultado terá o valor 24
   ```

5. **Arrow Functions:**
   Arrow functions (funções de seta) são uma sintaxe mais concisa para declarar funções:

   ```typescript
   const divisao = (a: number, b: number): number => a / b;

   const resultado = divisao(10, 2); // resultado terá o valor 5
   ```

6. **Parâmetros Opcionais e Padrão:**
   Você pode definir parâmetros como opcionais ou fornecer valores padrão:

   ```typescript
   function saudacao(nome: string = "Visitante"): string {
       return `Olá, ${nome}!`;
   }

   const mensagem = saudacao(); // "Olá, Visitante!"
   ```

Esses são apenas alguns dos conceitos básicos relacionados a funções em TypeScript. Funções desempenham um papel fundamental na programação, permitindo a modularização do código e a reutilização de lógica. O TypeScript enriquece essas funcionalidades adicionando um sistema de tipos forte, o que ajuda a evitar erros comuns e a criar código mais confiável e legível.

## Formatação de Strings

Em TypeScript, você pode formatar strings de várias maneiras usando strings de modelo (template strings) e concatenação. Aqui estão algumas abordagens comuns para formatar strings:

1. **String de Modelo (Template String):**
As strings de modelo são uma maneira conveniente de formatar strings, permitindo que você insira valores diretamente em uma string usando a sintaxe `${}`.

```typescript
const nome = "Alice";
const idade = 30;

const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem); // "Olá, meu nome é Alice e tenho 30 anos."
```

2. **Concatenação de Strings:**
Você também pode usar a concatenação de strings para formatar strings, juntando diferentes partes com o operador `+`.

```typescript
const saudacao = "Olá, ";
const nome = "Bob";

const mensagem = saudacao + nome + "!";
console.log(mensagem); // "Olá, Bob!"
```

## Boas práticas

Escrever funções de maneira limpa e eficiente é uma parte fundamental da programação. Aqui estão algumas boas práticas a serem consideradas ao escrever funções em TypeScript:

1. **Nomes Descritivos:**
   Dê nomes descritivos e significativos às suas funções. Isso facilita a compreensão do propósito da função sem precisar examinar o código inteiro.

2. **Limitação do Tamanho:**
   Tente manter suas funções relativamente curtas e focadas em uma única tarefa. Funções muito longas podem se tornar difíceis de entender e manter.

3. **Comentários e Documentação:**
   Forneça comentários internos na função sempre que o código possa não ser imediatamente óbvio. Além disso, é uma boa prática usar comentários de documentação para descrever a finalidade da função, os parâmetros que ela aceita e o tipo de retorno.

4. **Parâmetros e Tipos:**
   Defina claramente os tipos esperados dos parâmetros da função. Isso ajuda a evitar erros de tipos e melhora a legibilidade. Se necessário, adicione verificações de tipos dentro da função para garantir que os parâmetros atendam às expectativas.

5. **Retorno Explícito:**
   É uma boa prática sempre ter um tipo de retorno explicitamente definido para suas funções, a menos que seja uma função que nunca retorna (`void`, por exemplo).

6. **Nível Adequado de Abstração:**
   Procure um bom equilíbrio entre abstração e detalhes. Funções devem encapsular lógica complexa, mas ainda serem compreensíveis sem precisar navegar por várias camadas de chamadas.

7. **Retorno Default (ou Valores Padrão):**
   Não é obrigatório ter um valor de retorno default para todas as funções, mas é uma boa prática definir um valor de retorno padrão, especialmente quando isso faz sentido semântico. Isso pode ajudar a evitar retornos inesperados de `undefined`.

8. **Evite Efeitos Colaterais:**
   Idealmente, as funções devem ser "puras", ou seja, produzir o mesmo resultado para os mesmos argumentos e não causar efeitos colaterais imprevisíveis.

9. **Reutilização:**
    Projete suas funções para serem reutilizáveis sempre que possível. Isso ajuda a evitar a duplicação de código e simplifica a manutenção.

Lembrando que as boas práticas podem variar dependendo do contexto e das necessidades do projeto. A chave é escrever código claro, organizado e que seja fácil de entender para você e outros desenvolvedores.

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

## if e ternário

No TypeScript, a sintaxe para o comando `if` e o operador ternário (`? :`) é muito semelhante à sintaxe em JavaScript, uma vez que o TypeScript é uma superset da linguagem. Aqui estão exemplos da sintaxe do `if` e do operador ternário:

1. **Comando `if`:** O `if` é usado para executar um bloco de código condicionalmente, com base em uma expressão booleana.

```typescript
const idade: number = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

2. **Operador Ternário (`? :`):** O operador ternário é uma forma compacta de expressar uma estrutura `if-else`. Ele avalia uma condição e retorna um valor com base nessa condição.

```typescript
const idade: number = 20;
const mensagem: string = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem); // "Maior de idade"
```

Aqui está a sintaxe básica do operador ternário:

```c
condicao ? valorSeVerdadeiro : valorSeFalso
```

No exemplo acima, se `idade >= 18` for verdadeiro, a expressão retorna `"Maior de idade"`, caso contrário, retorna `"Menor de idade"`.

Lembre-se de que tanto o `if` quanto o operador ternário podem ser usados no TypeScript para controlar o fluxo condicional em seu código. Escolha aquele que melhor se adapte à legibilidade e à lógica do seu código específico.

## while

A sintaxe do `while` em TypeScript é a mesma que em JavaScript, já que o TypeScript é uma superset da linguagem. Aqui está a sintaxe do `while`, bem como uma explicação sobre como funcionam os comandos `break` e `continue` dentro de um loop `while`:

**Sintaxe do `while`:**

```typescript
while (condicao) {
    // Bloco de código a ser repetido enquanto a condição for verdadeira
}
```

**Exemplo de `while`:**

```typescript
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}
```

**Funcionamento do `break`:**
O comando `break` é usado para interromper imediatamente a execução de um loop (seja `while`, `for` ou outro). Ele é usado quando uma determinada condição é atendida e você deseja sair do loop imediatamente.

**Exemplo de `break`:**

```typescript
let contador = 0;

while (true) {
    if (contador === 3) {
        break; // Sai do loop quando o contador é igual a 3
    }
    console.log(contador);
    contador++;
}
```

**Funcionamento do `continue`:**
O comando `continue` é usado para interromper a execução da iteração atual de um loop e passar para a próxima iteração. Ele é usado quando você deseja pular uma iteração em específico, mas continuar o loop.

**Exemplo de `continue`:**

```typescript
let contador = 0;

while (contador < 5) {
    contador++;
    if (contador === 3) {
        continue; // Pula a iteração quando o contador é igual a 3
    }
    console.log(contador);
}
```

No exemplo acima, quando o contador atinge o valor 3, a instrução `continue` é acionada, pulando a iteração onde o valor 3 seria impresso, mas o loop continua com as iterações subsequentes.

Em resumo, o `while` no TypeScript funciona da mesma forma que em JavaScript, e os comandos `break` e `continue` são usados para controlar o fluxo de execução dentro do loop, permitindo sair dele antecipadamente ou pular iterações específicas.

## for

A sintaxe do loop `for` em TypeScript é a mesma que em JavaScript, já que o TypeScript é uma extensão da linguagem JavaScript. Aqui está a sintaxe do `for`:

**Sintaxe do `for`:**

```typescript
for (inicializacao; condicao; incremento) {
    // Bloco de código a ser repetido enquanto a condição for verdadeira
}
```

- `inicializacao`: Uma expressão que é executada antes da primeira iteração do loop e geralmente é usada para inicializar variáveis de controle.
- `condicao`: Uma expressão booleana que determina se o loop deve continuar ou não.
- `incremento`: Uma expressão que é executada após cada iteração do loop e geralmente é usada para incrementar ou decrementar variáveis de controle.

**Exemplo de `for`:**

```typescript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Neste exemplo, o loop `for` irá imprimir os números de 0 a 4, pois a variável `i` é inicializada com 0, a condição é `i < 5`, e a cada iteração, `i` é incrementado em 1.

O loop `for` em TypeScript é muito útil para iterar sobre uma sequência de valores, como índices de arrays ou propriedades de objetos. A sintaxe básica é a mesma que em JavaScript, e você pode usar as mesmas técnicas de controle de fluxo, como `break` e `continue`, para ajustar o comportamento do loop de acordo com suas necessidades.
