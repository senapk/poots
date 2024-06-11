# Funções

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