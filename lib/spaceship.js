function Spaceship(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = (typeof crew[0] == 'undefined' ? true : false)
    for(var i = 0; i < crew.length; i ++){
      crew[i].currentShip = this;
  }
}
