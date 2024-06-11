# if e ternário

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