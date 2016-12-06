class Spaceship {

  constructor(name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;

    this.warpDrive = "disengaged";
    if(this.crew.length > 0) {
      this.docked = false;
    } else {
      this.docked = true;
    };

    this.phasersCharge = "uncharged";
    this.informCrew();
  }

  informCrew() {
    this.crew.forEach(member => {
      member.currentShip = this;
    });
  }

}

