class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = crew.length == 0;
    this.phasersCharge = "uncharged";
    this.crew = this.setCrew(crew);
  }

  

  setCrew(crew) {
    this.crew = crew;

    if(this.crew && typeof this.crew == "object" && this.crew.length > 0) {
      // this.phasersCharge = "charged!"
      // this.warpDrive = "engaged!"
      // this.cloaked = true;
      // set ship as crew-members' ship
      for (var member of crew) {
        member.currentShip = this;
      }
    }
  }
}