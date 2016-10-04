class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.crew = crew;
    this.docked = true;
    this.phasersCharge = "uncharged";
    if (crew.length === 0) {
      this.docked = true;
    }else{
      this.docked = false;
    }
    this.notifyCrew();
  }

  docked () {
    if (this.crew.length != 0) {
      return false;
    } else {
      return true;
    }
  }

  
  notifyCrew(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }

}
