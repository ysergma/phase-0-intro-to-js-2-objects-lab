// Write your solution in this file!
var employee = {name:"abdou",streetAddress:"cite 72 logts"};
var updateEmployeeWithKeyAndValue=function(obj,key,value){
    // obj={...employee};
   // obj[key]=value;
  return {...employee,
    [key]:value,}
}

var destructivelyUpdateEmployeeWithKeyAndValue=function(obj,key,value){
employee[key]=value
return employee;
}

const deleteFromEmployeeByKey=function(employee,key){
     // return {...employee,
    //"key":"value",}
     
         var obj={...employee};
          return obj[key]={};
          console.log (obj)

}
const destructivelyDeleteFromEmployeeByKey=function(employee,key){
  delete employee[key]
  return employee
}