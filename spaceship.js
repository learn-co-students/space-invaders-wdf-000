class Spaceship{
  constructor(name,crew,phasers,shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'

    if (crew.length == 0){
      this.docked = true
    }else{
      this.docked = false
      this.notifyCrew(crew);
    }
    this.phasersCharge = 'uncharged';
  }

  notifyCrew(crew){
    for(var i = 0; i < crew.length; i++){
      crew[i].currentShip = this;
    }
  }

}



// chargePhasers(crew){
//   for(var i = 0; i < crew.length; i++){
//     if (crew[i].currentShip === this && crew[i] === "Gunner"){
//       if (crew[i].counter > 0){
//         this.chargePhasers = "charged";
//       }
//     }
//   }
// }
