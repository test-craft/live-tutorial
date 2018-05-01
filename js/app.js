var myApp = angular.module('myApp',
    ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/register');
        }//Auth Required
    }); //$routeChangeError
}]); //run

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
    }).
    when('/registeremail', {
        templateUrl: 'views/registeremail.html',
        controller: 'RegistrationController'
    }).
    when('/registerpassword', {
        templateUrl: 'views/registerpassword.html',
        controller: 'RegistrationController'
    }).
    when('/success', {
        templateUrl: 'views/success.html',
        controller: 'SuccessController'
    }).
    otherwise({
        redirectTo: '/register'
    });
}]);