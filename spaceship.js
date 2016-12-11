class Spaceship{
  constructor(name, crew, phasers, shields  ){
      this.name = name;
      this.crew = crew;
      this.phasers = phasers;
      this.shields = shields;
      this.cloaked = false;
      this.warpDrive = "disengaged";
      if (crew.length < 1){
        this.docked = true;
      } else{
        this.docked = false;
      };
      this.phasersCharge = "uncharged";

   this.assign();

  }

   assign(){
     this.crew.forEach(member => {
       member.currentShip = this;
     })
   }

}
