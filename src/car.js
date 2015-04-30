function Car(make, model, year, color){
  this.year = year ;
  this.state =  "off";
  this.previousOwners ="empty";
  this.currentOwner ="manufacturer";
}
Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;