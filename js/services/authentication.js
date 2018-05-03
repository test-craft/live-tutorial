myApp.factory('Authentication',
    ['$rootScope', '$location',
        function($rootScope, $location) {

            var myObject;

            myObject = {
                register: function() {
                    $location.path('/registeremail');
                }, //register
                registeremail: function() {
                    $location.path('/success');
                }, //
                registerpassword: function() {
                    $location.path('/success');
                } //

            }; //return

            return myObject;

        }]); //factory