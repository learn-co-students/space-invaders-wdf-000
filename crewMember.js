class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';

    // if (currentShip) {
    //   this.currentShip = currentShip;
    // } else {
    //   this.currentShip = 'Looking for a Rig';
    // }
    // this.currentShip = currentShip !== undefined ? currentShip : 'Looking for a Rig';
    // this.engageWarpDrive = this.position === "Pilot" ?
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.warpDrive = 'engaged!';
    } else {
      return 'had no effect';
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.cloaked = true;
    } else {
      return 'had no effect';
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig') {
      this.currentShip.phasersCharge = 'charged!';
    } else {
      return 'had no effect';
    }
  }



}
