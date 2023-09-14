class Vector2d {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x; 
        this.y = y;
    }

    dist(other: Vector2d) {
        return dist(this.x, this.y, other.x, other.y);
    }

}

class Circle {
    center: Vector2d;
    radius: number;

    constructor(x: number, y: number, raio: number) {
        this.center = new Vector2d(x, y);
        this.radius = raio;
    }

    contains(pos: Vector2d) {
        return pos.dist(this.center) < this.radius;
    }

    draw() {
        circle(this.center.x, this.center.y, this.radius * 2);
    }   
}

let ball: Circle = new Circle(0, 0, 50);

function setup() {
    createCanvas(400, 400);
    frameRate(10);
}

function draw() {
    background(0);
    if (ball.contains(new Vector2d(mouseX, mouseY))) {
        ball.radius -= 1;
        fill("red");
    } else {
        fill("blue");
        ball.radius += 1;
    }
    ball.draw();
}

function mouseClicked() {
    ball.center = new Vector2d(mouseX, mouseY);
}

function keyPressed() {
    if (key == "m") {
        ball.radius += 10;
    } else if (key == "n") {
        ball.radius -= 10;
    }
}
