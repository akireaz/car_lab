function Car(make, model, year, color){
  this.year = year ;
  this.state =  "off";
  this.previousOwners ="" ;
  this.currentOwner ="Manufacturer" ;
  this.passengers ="" ;
  this.sale ="Manufacturer" ;
  this.Charlie ="new owner" ;
  this.paint = "Blue" ;
  

}
Car.prototype.sale = function(newOwner){
 
this.previousOwners.push(this.currentOwner) ;

this.currentOwner = 'Charlie';

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;