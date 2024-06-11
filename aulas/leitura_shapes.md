# Interface em Programação Orientada a Objetos

Em programação orientada a objetos (POO), uma interface define um contrato que outras classes devem seguir. Ela especifica os métodos que devem ser implementados por qualquer classe que implemente a interface, mas não fornece a implementação desses métodos. A interface garante que as classes que a implementam terão uma estrutura consistente.

## Interface em TypeScript

TypeScript, uma extensão tipada de JavaScript, suporta interfaces para ajudar a definir a forma dos objetos e garantir que as classes sigam certas estruturas. As interfaces em TypeScript são usadas para definir a assinatura de métodos e propriedades que uma classe deve implementar.

### Exemplo: Definição da Interface Shape

``` typescript
interface Shape {
    getArea(): number;
    getPerimeter(): number;
    getName(): string;
}
```

Aqui, a interface Shape define três métodos que qualquer classe que implemente Shape deve ter:

getArea(): deve retornar um número representando a área da forma.
getPerimeter(): deve retornar um número representando o perímetro da forma.
getName(): deve retornar uma string com o nome da forma.

### Exemplo: Implementação da Classe Circle

``` typescript
class Circle implements Shape {
    private name: string = "Circ";
    private center: Point2D;
    private radius: number;

    constructor(center: Point2D, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    getName(): string {
        return this.name;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return Math.PI * 2 * this.radius;
    }
}
```

A classe Circle implementa a interface Shape, o que significa que ela deve fornecer implementações para os métodos getArea, getPerimeter e getName definidos na interface Shape.

getName(): retorna o nome do círculo.
getArea(): calcula e retorna a área do círculo.
getPerimeter(): calcula e retorna o perímetro do círculo.
Além disso, a classe Circle tem propriedades privadas name, center e radius.

### Exemplo: Classe Point2D

``` typescript
class Point2D {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x; 
        this.y = y;
    }
    toString(): string {
        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
}
```

A classe Point2D é uma classe simples que representa um ponto no espaço bidimensional, com coordenadas x e y. Ela inclui um método toString que retorna uma string formatada com as coordenadas do ponto.

### Como Tudo se Conecta

1. Definição da Interface: A interface Shape define os métodos que uma forma deve ter.
2. Implementação da Interface: A classe Circle implementa a interface Shape, garantindo que fornece implementações para getArea, getPerimeter e getName.
3. Uso de Composição: A classe Circle usa a classe Point2D para definir o centro do círculo.

### Vantagens das Interfaces

1. Consistência: As interfaces garantem que as classes que as implementam têm uma estrutura consistente.
2. Flexibilidade: Permitem que diferentes classes compartilhem a mesma interface, possibilitando polimorfismo.
3. Documentação: Servem como documentação clara dos métodos que uma classe deve implementar.

Assim, utilizando interfaces em TypeScript, você pode definir contratos claros que classes devem seguir, garantindo consistência e previsibilidade no comportamento das classes que implementam essas interfaces.