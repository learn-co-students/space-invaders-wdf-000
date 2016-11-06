class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.shields = shields;
    this.crew = crew;
    this.phasers = phasers;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    if(this.crew.length > 0){
      this.docked = false;
      this.setCrew();
    }else { this.docked = true}
  }


  setCrew(){
    this.crew.forEach(member => {member.currentShip = this;});
  }

}
