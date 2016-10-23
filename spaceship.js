class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    if (crew.length > 0) {
      this.docked = false;
      this.assignCrew(crew);
    } else {
      this.docked = true;
    }
  }

  assignCrew(crew) {
    for(let i = 0, l = crew.length; i < l; i++) {
      crew[i].currentShip = this;
    }
  }
}