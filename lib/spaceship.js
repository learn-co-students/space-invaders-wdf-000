function Spaceship(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged'
  this.docked = this.crew.length < 1
  this.phasersCharge = 'uncharged'
  this.setCurrentShip();
}


Spaceship.prototype.setCurrentShip = function(){
  var that = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = that;
  });
}