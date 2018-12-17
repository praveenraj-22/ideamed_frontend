
var DashboardModule= angular.module('DashboardModule',[]) /*creating a new module **/

DashboardModule.service('DashboardService',['REST_URI','$http',function(REST_URI,$http){

  
    this.listOfPatient=function(feedback){
        console.log('content reached to list of listOfPatient service');
        return $http.get(REST_URI+'/patient',feedback)
    }
/*
    this.getJobById=function(id,job){
        console.log("content reached to get by id")
        return $http.get(REST_URI+"/getjob/"+id,job)
    
    }*/
    
    this.getJob=function(id,job){
        console.log("content reached to get by id");
        return $http.get(REST_URI+"/getjob/"+id,job)
        }
    
}])