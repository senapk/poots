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

    toString(): string {
        return `${this.x}:${this.y}`
    }
}

class Circulo {
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

    collideWithCircle(other: Circulo): boolean {
        return this.center.dist(other.center) < this.radius + other.radius;
    }
    
    collideWithList(list: Circulo[]): boolean {
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

let vet: Circulo[] = [new Circulo(100, 100, 50)];
let colorir: boolean = false;
let aumentar: boolean = false;

function setup() {
    createCanvas(600, 300);
    frameRate(10);
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
                if (elem.radius > 1) {
                    elem.radius -= 1;
                }
            } else {
                elem.radius += 1;
            }
        }
    }
}

function mousePressed() {
    vet.push(new Circulo(mouseX, mouseY, 50));
}

function keyPressed() {
    if (key == "c") {
        colorir = !colorir;
    }
    if (key == "a") {
        aumentar = !aumentar;
    }
}