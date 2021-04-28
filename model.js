
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
    shapes = [];

    getShapes(){
        return this.shapes;
    }
    addShape(shape){
        this.shapes.push(shape);
    }
}

class Shape {

    constructor(color, thickness) {
        this.color = color;
        this.thickness = thickness;
    }

    getColor(){
        return this.color;
    }
    getThickness(){
        return this.thickness;
    }
}

class Rectangle extends Shape{

    constructor(initX, initY, width, height, thickness, color) {
        super(color, thickness);
        this.initX = initX;
        this.initY = initY;
        this.width = width;
        this.height = height;
    }

    getInitX() {
        return this.initX;
    }
    getInitY() {
        return this.initY;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}

class Line extends Shape{

    constructor(initX, initY, finalX, finalY, thickness, color) {
        super(color, thickness);
        this.initX = initX;
        this.initY = initY;
        this.finalX = finalX;
        this.finalY = finalY;
    }

    getInitX() {
        return this.initX;
    }
    getInitY() {
        return this.initY;
    }
    getFinalX() {
        return this.finalX;
    }
    getFinalY() {
        return this.finalY;
    }
}