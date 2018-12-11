app.controller('LoginController', ['LoginService' ,'$scope', '$location', '$rootScope', '$cookieStore', function (LoginService, $scope, $location, $rootScope, $cookieStore) {

    $rootScope.currentUser={};
    $scope.login = function () {
        console.log('content reached to login controller')
// console.log($scope.loginAD.username)
// console.log($scope.loginAD.password)

        LoginService.login($scope.loginAD).then(function (response) {

            console.log(response.data)
            $rootScope.currentUser = response.data
            $cookieStore.put('currentUser', response.data)   //currenuser =name of user login

            $location.path('/patient')
        }, function (response) {
            console.log(response.data)
            $scope.loginFail = response.data
            //alert('please register first');
            $location.path('/login')
        })
    }

   $rootScope.logout=function(){
        console.log('content reached to logout controller');
            LoginService.logout($rootScope.currentUser).then(function(response){
                
                $rootScope.currentUser={};
                
                $cookieStore.remove('currentUser');
               $scope.currentUser=null;
                $location.path('/login');
    
            },function(response){
                console.log(response.data)
                
            })
             
        }
        
        

}]);