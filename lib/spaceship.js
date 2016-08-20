// class Spaceship {
//   constructor(name, crews, phasers, shields) {
//     this.name = name;
//     this.crews = crews;
//     this.phasers = phasers;
//     this.shields = shields;
//     this.cloaked = false;
//     this.warpDrive = 'disengaged';
//     if (crew.length === 0) {
//       this.docked = true;
//     }else{
//       this.docked = false;
//     }
//     this.phasersCharge = 'uncharged';
//
//     this.setCrewShip();
//   }
//
//   setCrewsShip() {
//     this.crews.forEach((crew) => {
//       crew.currentShip = this;
//     });
//   }
//
// }


function Spaceship (name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if (crew.length === 0) {
    this.docked = true;
  }else{
    this.docked = false;
  }
  this.phasersCharge = 'uncharged';
  this.notifyCrew();
}

// Because Spaceship only needs one 'instance' method
// I add the method to the existing Spaceship Prototype
Spaceship.prototype.notifyCrew = function(){
  // need to assign this to that `name` isn't called on the window
  var that = this;
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = that;
  });
}
