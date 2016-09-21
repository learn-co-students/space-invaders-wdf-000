function CrewMember(position,currentShip="Looking for a Rig") {
  this.position = position;
  this.currentShip = currentShip;
}

CrewMember.prototype.engageWarpDrive = function() {
  if ( this.position == "Pilot" ) {
    this.currentShip.warpDrive = "engaged!";
  }
  return "had no effect";
}

CrewMember.prototype.setsInvisibility = function() {
  if ( this.position == "Defender" ) {
    this.currentShip.cloaked = true;
  }
  return "had no effect";
}

CrewMember.prototype.chargePhasers = function() {
  if ( this.position == "Gunner" ) {
    this.currentShip.phasersCharge = "charged!";
  }
  return "had no effect";
}
