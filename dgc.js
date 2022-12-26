class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape('red', false,);
console.log(shape);

class Circle {
    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea() {
        return Math.pow(this.radius,2)*3.14;
    }
    getPerimeter() {
        return 2*this.radius*3.14;
    }
}
let circle = new Circle('red', 'indigo', false);
console.log(circle);

class Rectangle {
    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}
let rectangle = new Rectangle('orange', true, 3, 4);

class Square {
    constructor(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let square = new Square('yellow', true, 6);
console.log(square);


