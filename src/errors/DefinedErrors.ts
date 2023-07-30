import CustomErrorInterface from "./CustomErrorInterface";
class DefinedErrors extends Error implements CustomErrorInterface{
 status = 500;
 constructor(message:string){
  super(message);
  this.name = this.constructor.name;

 }
}
export default DefinedErrors;