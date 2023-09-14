class V2d {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    dist(other: V2d): number {
        return dist(this.x, this.y, other.x, other.y);
    }

    clone(): V2d {
        return new V2d(this.x, this.y);
    }

    toString(): string {
        return `${this.x}:${this.y}`
    }
}

class Circle {
    center: V2d;
    radius: number;
    
    constructor(x: number, y: number, r: number) {
        this.center = new V2d(x, y);
        this.radius = r;
    }
    
    draw(): void {
        circle(this.center.x, this.center.y, this.radius * 2);
    }
    
    contains(pos: V2d): boolean {
        return this.center.dist(pos) < this.radius;
    }

    collideWithCircle(other: Circle): boolean {
        return this.center.dist(other.center) < this.radius + other.radius;
    }
    
    collideWithList(list: Circle[]): boolean {
        for (let elem of list) {
            if (this !== elem && this.collideWithCircle(elem)) {
                return true;
            }
        }
        return false;
    }

    toString(): string {
        return `${this.center.x}:${this.center.y}:${this.radius}`
    }
}

class Rect {
    pos: V2d;
    size: V2d;
    constructor(x: number, y: number, w: number, h: number) {
        this.pos = new V2d(x, y);
        this.size = new V2d(w, h);
    }
    draw() {
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    containsPoint(p: V2d): boolean {
        return  (p.x >= this.pos.x) &&
                (p.y >= this.pos.y) &&
                (p.x <= this.pos.x + this.size.x) &&
                (p.y <= this.pos.y + this.size.y)
    }
    containsCircle(circle: Circle): boolean {
        let x = this.pos.x;
        let y = this.pos.y;
        let w = this.size.x;
        let h = this.size.y;
        let r = circle.radius;

        let novo = new Rect(x + r, y + r, w - 2 * r, h - 2 * r);
        return novo.containsPoint(circle.center);
    }
}

let larg = 600, prof = 500;
let pers: Circle = new Circle(larg / 2, prof / 2, 50);
let borda: Rect = new Rect(150, 150, larg - 300, prof - 300);
let obstaculos: Circle[] = [
    new Circle(50, 50, 50), 
    new Circle(200, 100, 50),
    new Circle(100, 300, 50)
];

function setup() {
    createCanvas(larg, prof);
    frameRate(30);
}

function mover_circulo(elem: Circle) {
    if (keyIsDown(LEFT_ARROW)) {
        elem.center.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        elem.center.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        elem.center.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        elem.center.y += 5;
    }
}

function draw() {
    background(220);
    
    let antes: V2d = pers.center.clone();
    mover_circulo(pers);
    if (pers.collideWithList(obstaculos)) {
        pers.center = antes;
    }
    if (!borda.containsCircle(pers)) {
        let dx = pers.center.x - antes.x;
        let dy = pers.center.y - antes.y;
        for (let elem of obstaculos) {
            elem.center.x -= dx;
            elem.center.y -= dy;
        }
        pers.center = antes;
    }

    // desenhos
    fill("white");
    // borda.draw();
    for (let elem of obstaculos) {
        elem.draw();
    }
    fill("green");
    pers.draw()

}

function mousePressed() {
    obstaculos.push(new Circle(mouseX, mouseY, 50));
}

function keyPressed() {
    console.log(key + ": " + keyCode);
}

