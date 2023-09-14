# Pratica - Círculos e Pontos Colidindo

- Pegue o Retângulo que você criou na atividade [Pontos e Círculos](vector2d_pratica.md

Adapte o código do Circulo para funcionar com retângulos. Adicione ou mude algum comportamento que achar interessante.

## Resultado

[resultado](https://user-images.githubusercontent.com/4747652/266114332-630d2777-b01d-48f7-baeb-a047735cc6d3.mp4)

## Rascunho

```ts
class Vector2d {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    dist(other: Vector2d): number {
        return dist(this.x, this.y, other.x, other.y);
    }

    toString(): string {
        return `${this.x}:${this.y}`
    }
}

class Rect {
    pos: Vector2d;
    size: Vector2d;

    constructor(x: number, y: number, w: number, h: number) {
        this.pos = new Vector2d(x, y);
        this.size = new Vector2d(w, h);
    }

    draw(): void {
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    contains(pos: Vector2d): boolean {
        // verifique se o x da pos é 
        // maior que this.pos.x e menor que this.pos.x + this.size.x
        // e o y da pos é maior que this.pos.y e menor que this.pos.y + this.size.y
    }

    getVertices(): Vector2d[] {
        // crie um vetor
        // adicione os 4 vertices do retangulo
        // o primeiro seria this.pos
        // o segundo seria this.pos.x + this.size.x, this.pos.y
        // ...
        // retorne o vetor
    }

    collideWithRect(other: Rect): boolean {
        //para cada vertice de this
            //se ele estiver dentro de other
                //retorne true
        //para cada vertice de other
            //se ele estiver dentro de this
                //retorne true
        //retorne false
    }

    collideWithList(list: Rect[]): boolean {
        //aqui é exatamente igual ao do circulo
    }
}

let vet: Rect[] = [new Rect(100, 100, 50, 50), new Rect(200, 200, 50, 50)];
let colorir: boolean = false;
let aumentar: boolean = false;

function setup() {
    createCanvas(600, 300);
}

function draw() {
    background(100);

    for (let elem of vet) {
        if (colorir) {
            fill(random(255), random(255), random(255))
        }
        elem.draw();
    }

    if (aumentar) {
        for (let elem of vet) {
            if (elem.collideWithList(vet)) {
                //se elem.size.x e elem.size.y forem maiores que 0
                //diminua 1 nos dois
            } else {
                //aumente 1 no tamanho em x e y
            }
        }
    }
}

function mousePressed() {
    vet.push(new Rect(mouseX, mouseY, 50, 70));
}

function keyPressed() {
    if (key == "c") {
        colorir = !colorir;
    }
    if (key == "a") {
        aumentar = !aumentar;
    }
}
```
