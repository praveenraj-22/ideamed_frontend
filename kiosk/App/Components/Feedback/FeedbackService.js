var FeedbackModule=angular.module('FeedbackModule',[])

FeedbackModule.service('FeedbackService',['REST_URI','$http',function(REST_URI,$http){
    this.register=function(feedback){                               /** this.register-> function of ng-click */
        console.log('content reached to register service');
    return  $http.post(REST_URI +'/registerFeedback',feedback)
    .then(
        function(response){
            return response.data;
        }
    )
}
}])

