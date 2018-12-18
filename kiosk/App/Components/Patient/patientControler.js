app.controller('patientControler', ['patientservice', '$location', '$scope', '$rootScope', '$cookieStore', '$routeParams', function (patientservice, $location, $scope, $rootScope, $cookieStore, $routeParams) {

    $scope.feedback = {};
    $scope.feedback1 = {};
    $scope.date = {};
    var id=$routeParams.id;

    $scope.datead = function ()                                               /**$scope.register ->ng-click value */ 
    {



        // console.log('content reached to patient Controller');
        // console.log("From date : " + $scope.dateAD.fdatead);
        // console.log("To Date : " + $scope.dateAD.tdatead);
        // console.log("Mobile number :"+$scope.dateAD.mobile);


        if ($scope.dateAD.tdatead == null) {

          //  alert("please select To Date")
            $location.path('/patient')
        } else if ($scope.dateAD.fdatead == null) {
        //    alert("please select From Date")
            $location.path('/patient')
        }
else if($scope.dateAD.mobile==null)
{
  //  alert($scope.dateAD.mobile);
    $scope.feedback.pmobile=0;
    patientservice.datead($scope.dateAD.fdatead, $scope.dateAD.tdatead, $scope.dateAD.mobile, $scope.dateAD).then(function (response) {
        console.log(response)

        $scope.feedback = response.data;


        $location.path('/patient')
    }
    )
}

else if($scope.dateAD.mobile=="")
{
    $scope.dateAD.mobile=0;
    $scope.feedback.pmobile=0;
    //  alert($scope.dateAD.mobile);
    //  alert($scope.feedback.pmobile);
    patientservice.datead($scope.dateAD.fdatead, $scope.dateAD.tdatead, $scope.dateAD.mobile, $scope.dateAD).then(function (response) {
        console.log(response)
  
        $scope.feedback = response.data;


        $location.path('/patient')
    }
    )
}

        else {
            patientservice.datead($scope.dateAD.fdatead, $scope.dateAD.tdatead, $scope.dateAD.mobile, $scope.dateAD).then(function (response) {
                console.log(response)
            
                $scope.feedback = response.data;


                $location.path('/patient')
            }
            )
        }
    }

  

    $scope.feedback=patientservice.getValue(id,$scope.feedback).then(function(response){
        console.log("Patient ID is :" + id);
        $scope.feedback=[
            response.data
        ];
        if(response.data.recreg==1)
        {
            response.data.recreg="Excellent"
        }
        else if(response.data.recreg==2)
        {
            response.data.recreg="Good"
        }
        else if(response.data.recreg==3)
        { response.data.recreg="Poor"}
      else if(response.data.recreg==0)
      {
        response.data.recreg=" "
      }


      if(response.data.cleaning==1)
      {
          response.data.cleaning="Excellent"
      }
      else if(response.data.cleaning==2)
      {
          response.data.cleaning="Good"
      }
      else if(response.data.cleaning==3)
      { response.data.cleaning="Poor"}
      else if(response.data.cleaning==0)
      {
        response.data.cleaning=" "
      }

    if(response.data.counseling==1)
    {
        response.data.counseling="Excellent"
    }
    else if(response.data.counseling==2)
    {
        response.data.counseling="Good"
    }
    else if(response.data.counseling==3)
    { response.data.counseling="Poor"}
    else if(response.data.counseling==0)
    {
      response.data.counseling=" "
    }



  if(response.data.doccoord==1)
  {
      response.data.doccoord="Excellent"
  }
  else if(response.data.doccoord==2)
  {
      response.data.doccoord="Good"
  }
  else if(response.data.doccoord==3)
  { response.data.doccoord="Poor"}
  else if(response.data.doccoord==0)
  {
    response.data.doccoord=" "
  }




if(response.data.docser==1)
{
    response.data.docser="Excellent"
}
else if(response.data.docser==2)
{
    response.data.docser="Good"
}
else if(response.data.docser==3)
{ response.data.docser="Poor"}
else if(response.data.docser==0)
{
  response.data.docser=" "
}





if(response.data.lab==1)
{
    response.data.lab="Excellent"
}
else if(response.data.lab==2)
{
    response.data.lab="Good"
}
else if(response.data.lab==3)
{ response.data.lab="Poor"}
else if(response.data.lab==0)
{
  response.data.lab=" "
}






if(response.data.optical==1)
{
    response.data.optical="Excellent"
}
else if(response.data.optical==2)
{
    response.data.optical="Good"
}
else if(response.data.optical==3)
{ response.data.optical="Poor"}
else if(response.data.optical==0)
{
  response.data.optical=" "
}






if(response.data.opto==1)
{
    response.data.opto="Excellent"
}
else if(response.data.opto==2)
{
    response.data.opto="Good"
}
else if(response.data.opto==3)
{ response.data.opto="Poor"}
else if(response.data.opto==0)
{
  response.data.opto=" "
}





if(response.data.ot==1)
{
    response.data.ot="Excellent"
}
else if(response.data.ot==2)
{
    response.data.ot="Good"
}
else if(response.data.ot==3)
{ response.data.ot="Poor"}
else if(response.data.ot==0)
{
  response.data.ot=' '
}







if(response.data.pharmacy==1)
{
    response.data.pharmacy="Excellent"
}
else if(response.data.pharmacy==2)
{
    response.data.pharmacy="Good"
}
else if(response.data.pharmacy==3)
{ response.data.pharmacy="Poor"}
else if(response.data.pharmacy==0)
{
  response.data.pharmacy=" "
}


if(response.data.recommend==1)
{
    response.data.recommend="Yes"
}
else if(response.data.recommend==2)
{
    response.data.recommend="No"
}
else if(response.data.recommend==0)
{ response.data.recommend=" "}




if(response.data.overall==1)
{
    response.data.overall="Excellent"
}
else if(response.data.overall==2)
{
    response.data.overall="Good"
}
else if(response.data.overall==3)
{ response.data.overall="Poor"}
else if(response.data.overall==0)
{
  response.data.overall==" "
}





      console.log(response.data.recreg);
        console.log(response.data.pname);
        console.log(response.data)
        
        console.log(response.status)

    })





}]);