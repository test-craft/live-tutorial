myApp.controller('RegistrationController', ['$scope', 'Authentication',
    function($scope, Authentication) {

        $scope.register = function() {
            Authentication.register($scope);
        };
        $scope.registerpassword = function() {
            Authentication.registerpassword($scope);
        };
        $scope.registeremail = function() {
            Authentication.registeremail($scope);
        };

    }]); //Controller