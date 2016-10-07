class CrewMember{
  constructor(position, currentShip = "Looking for a Rig"){
    this.position = position;
    this.currentShip = currentShip;
  }

  on_board(){
    return (this.currentShip !== "Looking for a Rig");
  }

  setsInvisibility(){
    if (this.position === "Defender" && this.on_board()){
      this.currentShip.cloaked = true;
    } else {
      return "had no effect";
    }
  }

  engageWarpDrive(){
    if (this.position === "Pilot" && this.on_board()){
      this.currentShip.warpDrive = "engaged!";
    } else {
      return "had no effect";
    }
  }

  chargePhasers(){
    if (this.position === "Gunner" && this.on_board()){
      this.currentShip.phasersCharge = "charged!";
    } else {
      return "had no effect";
    }
  }
}
