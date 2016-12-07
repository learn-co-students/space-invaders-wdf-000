class Spaceship {

  constructor(name, members, phasers, shields) {
    this.name = name;
    this.crewMembers = members;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged"


      if(members.length > 0){
        this.docked = false;

        var spaceObject = this
        members.map(function(member) {
          return member.currentShip = spaceObject
        })

      }else{
        this.docked = true
      }
  }


  

}
