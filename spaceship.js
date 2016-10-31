// alert('space')
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    if (crew.length > 0) {
      crew.forEach(member => member.currentShip = this);
      this.crew = crew;
      this.docked = false;
    } else {
      this.crew = crew;
      this.docked = true;
    }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
  }
}
