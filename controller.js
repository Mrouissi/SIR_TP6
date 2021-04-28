
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		if(document.getElementById("butRect").checked){
			this.currEditingMode = editingMode.rect;
		}else{
			this.currEditingMode = editingMode.line;
		}

		this.currColour = document.getElementById("colour").value;
		this.currLineWidth = document.getElementById("spinnerWidth").value;


		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.xStart, dnd.yStart, dnd.xStart-dnd.xFinal,dnd.yStart-dnd.yFinal, document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.xStart, dnd.yStart, dnd.xFinal, dnd.yFinal, document.getElementById("spinnerWidth").value, document.getElementById("colour").value);
				break;
			}
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.xStart, dnd.yStart, dnd.xFinal-dnd.xStart, dnd.yFinal-dnd.yStart, this.currLineWidth, this.currColour);
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.xStart, dnd.yStart, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
				break;
			}
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		switch(this.currEditingMode){
			case editingMode.rect: {
				this.currentShape = new Rectangle(dnd.xStart, dnd.yStart, dnd.xFinal-dnd.xStart, dnd.yFinal-dnd.yStart, this.currLineWidth, this.currColour);
				break;
			}
			case editingMode.line: {
				this.currentShape = new Line(dnd.xStart, dnd.yStart, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
				break;
			}
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.addShape(this.currentShape);
		drawing.paint(ctx, canvas);
		this.currentShape = null;
	}.bind(this);

};


