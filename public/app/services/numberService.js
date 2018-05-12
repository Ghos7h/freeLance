angular.module("authService", [])

.factory('Auth', function($http, $q) {
/* body... */

var numFactory = {};

numFactory.getNumber = function(number) {
    /* body... */
    return $http.post('/api/free', {
            number: number
        })
        /*.success(function(data) {
            AuthToken.setToken(data.token);
            return data;
        })*/
        .then(function(data) {            
            return data;
        }, function(error) {
            return error;
        });
};
return numFactory;
});