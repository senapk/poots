# Pratica - Círculos e Pontos Colidindo

- Pegue o Retângulo que você criou na atividade [Pontos e Círculos](vector2d-circulo-pratica.md).

- Crie o código para verificar se um Retângulo está colidindo com outro. Pesquise na internet ou tente implementar o algorimo abaixo.

```ts
class Rectangle {
    pos: Vector2d
    size: Vector2d

    hasPoint(point: Vector2d): boolean {
        //está dentro 
        // se o point.x é maior que this.pos.x e menor que this.pos.x + this.size.x
        // e  o ponto.y é maior que this.pos.y e menor que this.pos.y + this.size.y 
    }

    collideRectangle(other: Rectangle): boolean {
        // calcule os 4 pontos do rect this e verifique se algum deles está dentro do rect other
        // calcule os 4 pontos do rect other e verifique se algum deles está dentro do rect this
        // retorne falso caso contrário
    }
}

```

Adapte o código do Circulo para funcionar com retângulos.
