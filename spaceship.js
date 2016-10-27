class Spaceship {
  constructor(name, crewArray, phasers, shields, cloaked) {
    this.name = name;
    this.crewArray = crewArray;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.docked = crewArray.length === 0 ? true : false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    
    // invoke assignShipToCrew as a ship is 'initialized'
    this.assignShipToCrew();
  }

  // assign currentShip to each crew member
  assignShipToCrew() {
  this.crewArray.forEach( member => member.currentShip = this );
  }
}
