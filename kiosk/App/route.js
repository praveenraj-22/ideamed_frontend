
app.constant('REST_URI','http://localhost:8080/ideamed');

app.config(function($routeProvider)
{

    $routeProvider

    .when("/home", {
        templateUrl: 'App/Components/Home/home.html'
     
    })

    // .when('/Register', {
    //     templateUrl: 'App/components/register/Register.html',
    //     controller: 'RegisterController',
    // })
    

    // .when('/login',{
    //     templateUrl: '/components/login/login.html',
    //     controller: 'LoginController'
    // })
    // .when('/editprofile',{
    //     templateUrl: '/components/register/editprofile.html',
    //     controller:'registercontroller1',
    // })

   
    // .when("/appointment", {
    //     templateUrl: 'App/Components/appointment/appointment.html'
     
    // })

    // .when("/registration", {
    //     templateUrl: 'App/Components/Registration/registration.html'
     
    // })

    // .when("/booked", {
    //     templateUrl: 'App/Components/Registration/booked.html'
     
    // })


    
    // .when("/appbooking", {
    //     templateUrl: 'App/Components/appointment/appbooking.html'
     
    // })
    



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

    // .when('/Register', {
    //     templateUrl: 'App/components/register/Register.html',
    //     controller: 'RegisterController',
    // })
    

    // .when('/login',{
    //     templateUrl: '/components/login/login.html',
    //     controller: 'LoginController'
    // })
    // .when('/editprofile',{
    //     templateUrl: '/components/register/editprofile.html',
    //     controller:'registercontroller1',
    // })

    


   
    // .when("/emp", {
    //     templateUrl: 'App/Components/bookonline/emp.html'
     
    // })
 
    
    // .when("/prp", {
    //     templateUrl: 'App/Components/bookonline/prp.html'
     
    // })
    
    // .when("/img", {
    //     templateUrl: 'App/Components/bookonline/img.html'
     
    // })
    
    // .when("/fml", {
    //     templateUrl: 'App/Components/bookonline/fml.html'
     
    // })
    
    // .when("/cony", {
    //     templateUrl: 'App/Components/bookonline/cony.html'
     
    // })
    
    // .when("/cri", {
    //     templateUrl: 'App/Components/bookonline/cri.html'
     
    // })




    .otherwise({
        templateUrl: 'App/Components/Home/home.html'
    })
   

})