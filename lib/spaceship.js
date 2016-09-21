class Spaceship {
  constructor(name, crew = [], phasers = "uncharged", shields = 0) {
    var self = this
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged"
    this.docked = this.crew.length < 1;
    $.each(this.crew, function(index, el) {
      el.currentShip = self
    });
  }
}
