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
}

function setup() {
    createCanvas(600, 300);
    rectMode(CENTER);
}

let rect1 = new Rect(200, 100, 120, 100);
let size = 150;

function draw() {
    background(100);
    let rect2 = new Rect(mouseX, mouseY, size, size);

    if (rect1.isColliding(rect2)) {
        fill(255, 0, 0);
    } else {
        fill(0, 255, 0);
    }
    text("use scroll to increase or decrease size", 10, 10);
    rect1.draw();
    rect2.draw();
}

//scroll to increase ou decrease size
function mouseWheel(event: WheelEvent) {
    size += event.deltaY / 10;
}
