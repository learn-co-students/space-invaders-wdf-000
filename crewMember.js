// This will also require you to make sure a crew member becomes aware
// of their ship when they are added to it.


class CrewMember {

  constructor(position, currentShip = "Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
  }



  engageWarpDrive() {

    // debugger;
    var member = this

    if (member.currentShip != "Looking for a Rig"){
      if (member.position == "Pilot"){
        member.currentShip.warpDrive = "engaged!"
      }
    } else {
      return "had no effect"
    }
  }


  setsInvisibility() {
    var member = this

    if (member.currentShip != "Looking for a Rig"){
        if (member.position == "Defender"){
          member.currentShip.cloaked = true
        }
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    var member = this

    if (member.currentShip != "Looking for a Rig"){
        if (member.position == "Gunner"){
          member.currentShip.phasersCharge = "charged!"
        }
    } else {
      return "had no effect"
    }
  }

}
