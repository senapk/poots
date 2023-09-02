# Prática - Classes Aninhadas

Crie uma class Retangulo que representa um retângulo na tela. Essa classe deve ter os seguintes atributos:

- `posicao`: um objeto do tipo `Vector2d` que representa a posição do retângulo na tela.
- `tamanho`: um objeto do tipo `Vector2d` que representa o tamanho do retângulo na tela.

A classe `Retangulo` deve ter os seguintes métodos:

- `constructor(x: number, y: number, width: number, height: number)`: inicializa os atributos `posicao` e `tamanho
- `contemPonto(ponto: Vector2d)`: retorna `true` se o ponto passado como parâmetro estiver dentro do retângulo e `false` caso contrário.
- `desenhar()`: desenha o retângulo na tela.

- Na main do seu programa, crie um retângulo na posição (100, 100) e com tamanho (50, 50). Desenhe o retângulo na tela.
- Sempre que o mouse estiver dentro do retângulo, mude a cor do retângulo para vermelho. Caso contrário, mude a cor do retângulo para azul.
- Sempre que o mouse estiver dentro do retângulo, diminua o tamanho do retângulo em 1 pixel, tanto em largura quanto em altura. Caso contrário, aumente o tamanho do retângulo em 1 pixel, tanto em largura quanto em altura.
