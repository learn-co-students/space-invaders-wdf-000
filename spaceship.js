class Spaceship {

  constructor(name,crew,phasers,shields) {
    this.name = name;
    this.crew = crew;
    if (crew.length > 0) {
      for (var i = 0; i < crew.length; i++) {
        crew[i].currentShip = this;
      }
    }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.crew.length === 0 ? this.docked = true : this.docked = false;
    this.phasersCharge = "uncharged";
  }

}
