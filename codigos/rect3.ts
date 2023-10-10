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
        //Faça seu código aqui
    }

    isColliding(other: Rect): boolean {
        //Faça seu código aqui
    }

    isCollidingList(list: Rect[]): boolean {
        //Faça seu código aqui
    }
    clone(): Rect {
        //Faça seu código aqui
    }
    increase(): void {
        //Faça seu código aqui
    }
    decrease(): void {
        //Faça seu código aqui
    }
}

let elementos: Rect[] = [];

function setup() {
    createCanvas(900, 700);
    noFill();
    frameRate(10);
    for (let i = 0; i < 100; i++) {
        elementos.push(new Rect(random(0, width), random(0, height), random(50), random(50)));
    }
}

function draw() {
    background(100);
    for (let elem of elementos) {
        if (elem.isCollidingList(elementos)) {
            elem.decrease();
        } else {
            elem.increase();
        }
    }
    for (let elem of elementos) {
        elem.draw();
    }
}
