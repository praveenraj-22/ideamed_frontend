
app.controller('FeedbackController', ['FeedbackService', '$location', '$scope', function (FeedbackService, $location, $scope) {

    $scope.feedback = {}; /*creating a object{}, user thatr we created in DAO */


    $scope.contactForm = function () {
        if($scope.contactform.$valid)
        {
            $('#contact_form').hide();
            $('#contactFormSubmit1').show();
            $('#contact_form1').show();
            $('#contact_form2').hide()
            $('#next2').hide();
            $('#next1').hide();
            $('#id').hide();
        }
    }

    $scope.register = function ()                                               /**$scope.register ->ng-click value */ {
        $('#next2').hide();
        // console.log("used data" + $scope.feedback);

        // console.log('content reached to  RegisterController');
        // console.log($scope.feedback.pmobile);
         console.log($scope.feedback.hospfloor);

        FeedbackService.register($scope.feedback).then(function (response) {
            console.log(response)

            $location.path('/thank')
        },
            


        )


    }

}]);
