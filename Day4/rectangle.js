/*
 * Complete the Rectangle function
 */
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    get perimeter() {
        return this.calcPerimeter();
    }
    calcPerimeter() {
        return ((this.length * 2) + (this.width * 2));
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return (this.length * this.width);
    }
}

function main() {
    var a = 5;
    var b = 7;

    const rec = new Rectangle(a, b);

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();