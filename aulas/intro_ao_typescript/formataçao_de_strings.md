# Formatação de Strings

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