# Retornando valores absolutos em typescript

Em TypeScript, `Math.abs` é uma função da biblioteca padrão do JavaScript que retorna o valor absoluto de um número. Isso significa que ela remove qualquer sinal negativo do número, transformando-o em um valor positivo. A função `Math.abs` pode ser utilizada com qualquer tipo de número, seja ele inteiro ou decimal.

## Assinatura da Função

```typescript
Math.abs(x: number): number
```

## Exemplo de Uso

Aqui estão alguns exemplos de como usar Math.abs em TypeScript:

``` typescript
let num1: number = -5;
let num2: number = 10.5;
let num3: number = -3.14;

console.log(Math.abs(num1)); // Saída: 5
console.log(Math.abs(num2)); // Saída: 10.5
console.log(Math.abs(num3)); // Saída: 3.14
```

## Explicação dos Exemplos

- Exemplo 1: Math.abs(num1) onde num1 é -5, a função retorna 5, que é o valor absoluto de -5.
- Exemplo 2: Math.abs(num2) onde num2 é 10.5, a função retorna 10.5, que já é positivo.
- Exemplo 3: Math.abs(num3) onde num3 é -3.14, a função retorna 3.14, que é o valor absoluto de -3.14.

## Quando Usar

A função Math.abs é útil em diversas situações, como quando você precisa garantir que uma distância, diferença ou outra medida numérica seja sempre positiva. Aqui estão alguns cenários comuns:

- Calcular distâncias: A distância entre dois pontos deve ser sempre um número positivo.
- Diferenças de valores: Ao calcular a diferença entre dois valores, o resultado deve ser positivo independentemente da ordem dos valores.
- Remover sinais negativos: Quando um valor negativo não faz sentido no contexto da aplicação, como em medidas de tempo ou quantidade.