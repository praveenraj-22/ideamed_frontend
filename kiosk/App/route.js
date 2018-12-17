
 //app.constant('REST_URI','http://13.250.202.199:8080/ideamed/');
 app.constant('REST_URI','http://localhost:8080/ideamed/');
app.config(function($routeProvider)
{

    $routeProvider

    .when("/home", {
        templateUrl: 'App/Components/Home/home.html'
     
    })

   

    .when('/feedback', {
     templateUrl: 'App/Components/Feedback/feedback.html',

        controller: 'FeedbackController',
     
    })
    .when('/select', {
        templateUrl: 'App/Components/Feedback/select.html',
   
           controller: 'FeedbackController',
        
       })


       .when('/submit', {
        templateUrl: 'App/Components/Feedback/submit.html',
   
           controller: 'FeedbackController',
        
       })
       .when('/thank', {
        templateUrl: 'App/Components/Feedback/thank.html',
   
           controller: 'FeedbackController',
        
       })


       .when('/login', {
        templateUrl: 'App/Components/login/login.html',
   
           controller: 'logincontroller',
        
       })


       .when('/patient', {
        templateUrl: 'App/Components/DashBoard/Dashboard.html',
   
           controller: 'DashboardController',
        
       })

       
       .when('/selected', {
        templateUrl: 'App/Components/DashBoard/selected.html',
   
           controller: 'DashboardController',
        
       })


       .when('/admin', {
        templateUrl: 'App/Components/DashBoard/selected.html',
   
           controller: 'DashboardController',
        
       })



    .otherwise({
        templateUrl: 'App/Components/Home/home.html'
    })
   
   
})