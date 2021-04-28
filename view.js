
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(),   this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function (elem) {
        elem.paint(ctx);
    });
};

Shape.prototype.paint = function(ctx){
    ctx.lineWidth = this.getColor();
    ctx.filStyle = this.getThickness();
}