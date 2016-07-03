var Spaceship = function(name, crew, phasers, shields){
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = crew.length === 0 ? true : false;
  this.phasersCharge = 'uncharged';

  var spaceship = this;
  crew.forEach(function(crewMember){ crewMember.currentShip = spaceship; });
}
