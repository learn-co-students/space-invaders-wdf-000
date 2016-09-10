function Spaceship(name,crew,phasers,shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  // scope control
  var thisship=this;
  if (this.crew.length > 0) {
    this.docked = false;
    this.crew.forEach(function(element){
      element.currentShip = thisship;
    });
  } else {
    this.docked = true;
  }
  this.warpDrive = "disengaged";
  this.cloaked = false;
  this.phasersCharge = "uncharged";
}
