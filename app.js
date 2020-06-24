(function(){
          'use strict';
          angular.module("LunchCheck",[]).controller("LunchCheckController",myCtrl);

          function myCtrl($scope){
            $scope.name = "";
            $scope.output = "";
            $scope.cal = function(){
              let str = $scope.name;
              let word = str.split(",");
              if(str == ""){
                $scope.output = "Please enter data first";
              }
              else if(word.length <= 3){
                $scope.output = "Enjoy!";
              }
              else{
                $scope.output = "Too much!";
              }

            }
          };

        })();
