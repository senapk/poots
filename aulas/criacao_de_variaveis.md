# Criação de variáveis

Em TypeScript, tanto `let` quanto `var` são palavras-chave usadas para declarar variáveis, mas existem diferenças importantes entre elas em termos de escopo e tempo de vida da variável.

1. **Escopo de Bloco:**
   - **let:** As variáveis declaradas com `let` têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco onde foram declaradas, seja um bloco de função, um loop `for`, uma condicional `if`, etc.
   - **var:** As variáveis declaradas com `var` têm escopo de função ou escopo global. Isso significa que elas são acessíveis em todo o corpo da função em que foram declaradas ou, se forem declaradas fora de qualquer função, em todo o escopo global.

2. **Hoisting (Elevação):**
   - **let:** Variáveis declaradas com `let` não são elevadas (hoisted) para o topo do escopo. Isso significa que você não pode acessar uma variável `let` antes de sua declaração no código.
   - **var:** Variáveis declaradas com `var` são elevadas para o topo do escopo em que foram definidas. Isso permite que você as acesse antes de sua declaração no código, mas pode levar a comportamentos inesperados se não for cuidadoso.

Em resumo, a preferência em TypeScript é usar `let` em vez de `var`, pois `let` é mais seguro em termos de escopo e ajuda a evitar erros sutis que podem ocorrer devido ao hoisting e ao escopo global compartilhado das variáveis `var`.