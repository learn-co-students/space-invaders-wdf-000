class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.crew = crew;
    this.shields = shields;
    if(crew.length > 0){
      this.docked = false;
    }else{
      this.docked = true;
    }
    this.cloaked = false;
    this.crewSpaceship();
    this.warpDrive = 'disengaged';
    this.phasersCharge  = 'uncharged';
  }

  crewSpaceship(){
    this.crew.forEach(function(person) {
      person.currentShip = this;
    });
  }

}
