function Car(make, model, year, color){
  this.year = year ;
  this.state =  "off";
  this.previousOwners ="" ;
  this.currentOwner ="Manufacturer" ;
  this.passengers ="" ;
  // this.sale ="previousOwners array" ;
  // this.Charlie ="currentOwner"  ;
 
  

}
Car.prototype.sale = function(newOwner){
  this.newOwner = "Charlie" ;
  // this.previousOwners.push(this.currentOwner) ;
  this.previousOwners = ["Manufacturer"] ;
  this.currentOwner = 'Charlie';

};

Car.prototype.paint = function(newColor){
  this.color = "Blue" ;
};


Car.prototype.start = function(state){
  this.state = "on" ;
};

module.exports=Car;