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
}

function setup() {
    createCanvas(600, 300);
}

let rect1 = new Rect(100, 100, 230, 170);

function draw() {
    background(100);
    let mouse = new Vector2d(mouseX, mouseY);
    if (rect1.contains(mouse)) {
        fill(255, 0, 0);
    } else {
        fill(0, 255, 0);
    }
    rect1.draw();
}