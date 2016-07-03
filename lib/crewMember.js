var CrewMember = function(position){
  this.position = position;
  this.currentShip = 'Looking for a Rig';

  var noEffect = 'had no effect'

  this.engageWarpDrive = function(){ 
    if (typeof this.currentShip === 'object' && this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged!';
    } else {
      return noEffect; 
    }
  }

  this.setsInvisibility = function(){
    if (typeof this.currentShip === 'object' && this.position === 'Defender'){
      this.currentShip.cloaked = true;
    } else {
      return noEffect;
    }
  }

  this.chargePhasers = function(){
    if (typeof this.currentShip === 'object' && this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged!';
    } else {
      return noEffect;
    }
  }
}
