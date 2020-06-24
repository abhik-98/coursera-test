(function(){
          'use strict';
          angular.module("LunchCheck",[]).controller("LunchCheckController",myCtrl);

          function myCtrl($scope){
            $scope.name = "";
            $scope.output1= "";
            $scope.output2= "";
            $scope.cal = function(){
                $scope.output1= "";
                $scope.output2= "";
              let str = $scope.name;
              let word = str.split(",");
              if(str == ""){
                $scope.output1 = "Please enter data first";
              }
              else if(word.length <= 3){
                $scope.output2 = "Enjoy!";
              }
              else{
                $scope.output2 = "Too much!";
              }

            }
          };

        })();
