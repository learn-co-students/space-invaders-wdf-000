class Spaceship{
	constructor(name, crew, phasers, shields, cloaked, warpDrive, docked) {
	    this.name = name;
	    this.crew = crew;
	    this.phasers = phasers;
	    this.shields = shields;
	    this.cloaked = false;
	    this.warpDrive = "disengaged";
	    if (crew.length < 1){
	    	this.docked = true
	    } else {
	    	this.docked = false;
	    };
	    this.phasersCharge = "uncharged";
	    this.activeCrew() 
  }

  	activeCrew(){
   		this.crew.forEach(crewMember => {
      		crewMember.currentShip = this
    	})
  	}

}