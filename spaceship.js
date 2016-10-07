class Spaceship{
  constructor(name, crewmembers = [], phasers = 5, shields = 4){
    this.name = name;
    this.crewmembers = crewmembers;

    ///// THIS works:
    for (var i = 0; i < this.crewmembers.length; i++){
      this.crewmembers[i].currentShip = this;
    }

    ///// THIS did NOT work. What is THIS?  forEach changes the scope for 'this', maybe?
    // this.crewmembers.forEach(function(member){
    //   console.log(member.position);  //ensuring that ship has access to the members
    //   console.log(this);
    //   member.currentShip = this;  //does not work!! :/
    // });

    (this.crewmembers.length === 0) ? this.docked = true : this.docked = false;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
  }


}
