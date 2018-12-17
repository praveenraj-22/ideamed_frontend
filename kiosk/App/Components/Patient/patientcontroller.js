app.controller('patientcontroller', ['patientservice', '$location', '$scope','$rootScope','$cookieStore','$routeParams', function (patientservice, $location, $scope,$rootScope,$cookieStore,$routeParams) 
{

    
    var id=$routeParams.id;
    
   
    function listOfPatient(){
    patientservice.listOfPatient().then(function(response){
            console.log('hit in controller');
            console.log(response.data)
            console.log(response.status)
            $scope.feedback = response.data;        // <tr ng-repeat="job in jobs | filter:searchText">
        
        },function(response){
            console.log(response.status)
            if(response.status==401)
            $location.path('/adminlogin')
        })
        }
        listOfPatient()



}]);