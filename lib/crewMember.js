// class CrewMember {
//   constructor(position) {
//     this.position = position;
//     this.currentShip = 'Looking for a Rig';
//   }
//
//   engageWarpDrive() {
//     if (this.position === "Pilot" && this.currentShip !== 'Looking for a Rig') {
//       this.currentShip.warpDrive = "engaged!";
//     }else{
//       return "had no effect";
//     }
//   }
//
//   setsInvisibility() {
//     if (this.position === "Defender" && this.currentShip !== 'Looking for a Rig') {
//       this.currentShip.cloaked = true;
//     }else{
//       return "had no effect";
//     }
//   }
//
//   chargePhasers() {
//     if (this.position === "Gunner" && this.currentShip !== 'Looking for a Rig') {
//       this.currentShip.phasersCharge = "charged!";
//     }else{
//       return "had no effect";
//     }
//   }
// }

function CrewMember (position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig'; //the default
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.position === "Pilot" && this.currentShip !== 'Looking for a Rig') {
    this.currentShip.warpDrive = "engaged!";
  }else{
    return "had no effect";
  }
}
CrewMember.prototype.setsInvisibility = function(){
  if (this.position === "Defender" && this.currentShip !== 'Looking for a Rig') {
    this.currentShip.cloaked = true;
  }else{
    return "had no effect";
  }
}
CrewMember.prototype.chargePhasers = function(){
  if (this.position === "Gunner" && this.currentShip !== 'Looking for a Rig') {
    this.currentShip.phasersCharge = "charged!";
  }else{
    return "had no effect";
  }
}
