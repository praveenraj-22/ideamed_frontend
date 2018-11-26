
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
// $scope.contactForm1=function()
// {
//     if($scope.contactform1.$valid)
//     {
//         $("#contactFormSubmit1").click(function () {


//             $('#contact_form').hide();
//             $('#contact_form1').hide();
//             $('#contactFormSubmit1').hide();
//             $('#contact_form2').show();
//             $('#next2').show();
//             $('#next1').hide();
//             $('#next').hide();


//         });
//     }else{
//         alert("Please select all feedback option");
//     }
// }


    $scope.register = function ()                                               /**$scope.register ->ng-click value */ {
        console.log("used data" + $scope.feedback);

        console.log('content reached to  RegisterController');
        console.log($scope.feedback.pmobile);
        console.log($scope.feedback.pdate);

        FeedbackService.register($scope.feedback).then(function (response) {
            console.log(response)

            $location.path('/thank')
        },
            function (response) {
                console.log(error)
                $scope.response = response.status.data
                console.log(response.status)
                console.log(response.data)

                $scope.error = response.data
                if ($scope.error.code == 303) {
                    $scope.duplicateEmail = response.data;
                    alert('user email-id is already exists');
                }
                if ($scope.error.code == 202) {
                    $scope.duplicateUsername = response.data;
                    alert('username already exists');
                }
                if ($scope.error.code == 101) {
                    $scope.exception = response.data;
                }

                $location.path('/Register')
            }


        )


    }

}]);
