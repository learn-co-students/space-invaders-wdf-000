function CrewMember(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  this.engageWarpDrive = function(){
    if(this.currentShip == "Looking for a Rig") {
      return "had no effect";
    }
    else if (this.position == "Pilot"){
      this.currentShip.warpDrive = 'engaged!'
    }
  }
  this.setsInvisibility = function(){
    if(this.currentShip == "Looking for a Rig") {
      return "had no effect";
    }
    else if (this.position == "Defender") {
      this.currentShip.cloaked = true;
    }
  }
  this.chargePhasers = function(){
    if(this.currentShip == "Looking for a Rig") {
      return "had no effect";
    }
    else if (this.position == "Gunner")
      this.currentShip.phasersCharge = "charged!"
    }
}
