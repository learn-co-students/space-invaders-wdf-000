function CrewMember(position, currentShip) {
  this.position = position;
  this.currentShip = currentShip || "Looking for a Rig"
  switch (this.position) {
    case "Pilot":
      this.engageWarpDrive = function() { 
	if (this.currentShip != "Looking for a Rig")
	  this.currentShip.warpDrive = "engaged!";
	else
	  return "had no effect";
      }
      this.chargePhasers = function() { return "had no effect" }
      this.setsInvisibility = function() { return "had no effect" }
      break;
    case "Defender":
      this.setsInvisibility = function() { 
	if (this.currentShip != "Looking for a Rig")
	  this.currentShip.cloaked = true;
	else
	  return "had no effect";
      }
      this.engageWarpDrive = function() { return "had no effect" }
      this.chargePhasers = function() { return "had no effect" }
      break;
    case "Gunner":
      this.chargePhasers = function() { 
	if (this.currentShip != "Looking for a Rig")
	  this.currentShip.phasersCharge = "charged!"
	else
	  return "had no effect"
      }
      this.setsInvisibility = function() { return "had no effect" }
      this.engageWarpDrive = function() { return "had no effect" }
  }
  
}

// class CrewMember {
//   constructor(position, currentShip) {
//     this.position = position;
//     this.currentShip = currentShip || "Looking for a Rig"
//     switch (this.position) {
//       case "Pilot":
// 	this.engageWarpDrive = function() { 
// 	  if (this.currentShip != "Looking for a Rig")
// 	    this.currentShip.warpDrive = "engaged!";
// 	  else
// 	    return "had no effect";
// 	}
// 	this.chargePhasers = function() { return "had no effect" }
// 	this.setsInvisibility = function() { return "had no effect" }
// 	break;
//       case "Defender":
// 	this.setsInvisibility = function() { 
// 	  if (this.currentShip != "Looking for a Rig")
// 	    this.currentShip.cloaked = true;
// 	  else
// 	    return "had no effect";
// 	}
// 	this.engageWarpDrive = function() { return "had no effect" }
// 	this.chargePhasers = function() { return "had no effect" }
// 	break;
//       case "Gunner":
// 	this.chargePhasers = function() { 
// 	  if (this.currentShip != "Looking for a Rig")
// 	    this.currentShip.phasersCharge = "charged!"
// 	  else
// 	    return "had no effect"
// 	}
// 	this.setsInvisibility = function() { return "had no effect" }
// 	this.engageWarpDrive = function() { return "had no effect" }
//     }
//   }
// }
