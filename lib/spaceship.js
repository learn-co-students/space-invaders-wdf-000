function Spaceship(name, crew = [], phasers = "uncharged", shields = 0, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
  var self = this;
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = cloaked;
  this.warpDrive = warpDrive;
  this.docked = this.crew.length < 1;
  this.phasersCharge = phasersCharge;
  $.each(this.crew, function(index, cm) { cm.currentShip = self });
}

// class Spaceship {
//   constructor(name, crew = [], phasers = "uncharged", shields = 0, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
//     var self = this
//     this.name = name;
//     this.crew = crew;
//     this.phasers = phasers;
//     this.shields = shields;
//     this.cloaked = cloaked;
//     this.warpDrive = warpDrive;
//     this.docked = this.crew.length < 1;
//     this.phasersCharge = phasersCharge;
//     $.each(this.crew, function(index, cm) { cm.currentShip = self });
//   }
// }
