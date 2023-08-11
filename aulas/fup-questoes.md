# Questões Aula 01

<!-- toc -->
- [Perguntas](#perguntas)
- [Entrevista](#entrevista)
<!-- toc -->

## Perguntas

- O que é TypeScript e como ele se relaciona com o JavaScript?
- Porque dizemos que Typescript é transpilado ao invés de compilado?
- Qual é a diferença entre variáveis ​​declaradas com `var`, `let` e `const` em TypeScript?
- Como você define um tipo explícito para uma variável em TypeScript?
- O que é inferência de tipos?
- Qual a diferença entre atribuição de tipo e inicialização de variável? Me dê um exemplo de variável inicializada e não inicializada.
- Qual valor possui uma variável não inicializada?
- Quais os três tipos de dados primitivos em TypeScript?
- Quais os três tipos de dados que representam "ausência de valor" em TypeScript? Quando usar cada um deles?
- O que é o tipo `any` em TypeScript?
- Crie uma variável que pode ser do tipo `string` ou `number`.
- Como você declara um array de números em TypeScript?
- Como converter de `string` para `number` em TypeScript?
- Como converter de `number` para `string` em TypeScript?
- Dado um número quebrado, como você arredonda ele para baixo?
- Como verificar se uma variável que pode ser `null` possui um valor?
- Se `for` e `while` podem fazer a mesma coisa, por que usar um em vez do outro?

## Entrevista

Faça o código seguindo o que se pede:

- Para todas as variáveis e funções, seja explícito sobre os tipos de dados que eles recebem e retornam.
- crie uma variável `nome` do tipo `string` e atribua a ela o valor `"João"`;
- crie uma variável `idade` do tipo `number` e atribua a ela o valor `18`;
- crie uma constante `limite` do tipo `number` e atribua a ela o valor `18`;
- crie uma variável `maiorDeIdade` do tipo `boolean` e atribua a ela o valor `false`;
- faça um `if` que verifica se `idade` é maior ou igual a `limite` e mude o valor de `maiorDeIdade` para `true` se for maior ou igual;
- crie um vetor de frutas do tipo `string` e adicione a ele as frutas `"maçã"`, `"banana"` e `"laranja"`;
- crie um `for` que imprime cada fruta do vetor de frutas utilizando `console.log`;
- faça um vetor de nomes do tipo `number` ou `null` e adicione a ele os valores `1`, `2`, `null`, `4`, `0`, `null`;
- faça um `for` que imprime cada nome do vetor de nomes utilizando `console.log` apenas se o valor não for `null`;
- crie uma função que recebe uma idade e retorna `criança` se a idade for menor que `12`, `adolescente` se a idade for menor que `18` e `adulto` se a idade for maior ou igual a `18`;
- chame a função para alguns valores de idade e imprima os resultados utilizando `console.log`;
