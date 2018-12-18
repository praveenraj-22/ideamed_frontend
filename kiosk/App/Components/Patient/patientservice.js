
var PatientModule= angular.module('PatientModule',[]) /*creating a new module **/

PatientModule.service('patientservice',['REST_URI','$http',function(REST_URI,$http){

  
    this.listOfPatient=function(feedback){
        console.log('content reached to list of listOfPatient service');
        return $http.get(REST_URI+'/allpatient',feedback)
    }

    this.datead=function(fdatead,tdatead,mobile,dateAD){
     //   console.log("content reached to get by id");
        return $http.get(REST_URI+"/patient/"+fdatead +"/"+tdatead +"/"+mobile,dateAD)
    
    }
    
    
    this.datead1=function(Tdatead,dateAD){
      //  console.log("content reached to get by id");
        return $http.get(REST_URI+"/patient/"+Tdatead,dateAD)
    
    }


    this.getValue=function(id,feedback){
     //   console.log("content reached to get by id");
        return $http.get(REST_URI+"/getvalue/"+id,feedback)
        }
    
}])