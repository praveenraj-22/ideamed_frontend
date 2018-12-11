var LoginModule=angular.module('LoginModule',[])

LoginModule.service('LoginService',['REST_URI','$http',function(REST_URI,$http)
{
    this.login=function(loginAD){
        console.log('content reached to login service');
        return $http.post(REST_URI+'/loginUser',loginAD)
    }
 
    this.logout=function(user){
        console.log('content reached to logout service');
        return $http.put(REST_URI+'/logoutUser',user)
    }

    
    
}]);
