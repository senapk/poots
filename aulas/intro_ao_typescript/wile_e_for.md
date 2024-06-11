# wile e for

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