
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
  this.xStart = 0;
  this.yStart = 0;
  this.xFinal = 0;
  this.yFinal = 0;
  this.isPress = false;
  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements
  this.mouseDown = function(evt) {
    console.log("Mouse down");
    this.isPress = true;
    let mousePosition = getMousePosition(canvas, evt);
    this.xStart = mousePosition.x;
    this.yStart = mousePosition.y;
    this.interactor.onInteractionStart(this);
  }

  this.mouseMove = function(evt) {
    if(this.isPress){
      console.log("Mouse move");
      let mousePosition = getMousePosition(canvas, evt);
      this.xFinal = mousePosition.x;
      this.yFinal = mousePosition.y;
      this.interactor.onInteractionUpdate(this);
    }
  }

  this.mouseUp = function(evt) {
    if(this.isPress){
      console.log("Mouse Up");
      let mousePosition = getMousePosition(canvas, evt);
      this.xFinal = mousePosition.x;
      this.yFinal = mousePosition.y;
      this.interactor.onInteractionEnd(this);
    }
    this.isPress = false;
  }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
  canvas.addEventListener('mousemove', this.mouseMove.bind(this), false);
  canvas.addEventListener('mouseup', this.mouseUp.bind(this), false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



