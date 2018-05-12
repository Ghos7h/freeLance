angular.module('mainCtrl', [])
    .controller('mainCtroller', function($rootScope, $scope, $location, Auth) {
        /* body... */
        var vm = this;
        vm.value;
        vm.error = false;

        vm.getNumber = function() {
            console.log('hi', vm.value);
            if (vm.value == null || vm.value == undefined) {
                vm.error = true;
            } else {
                vm.error = false;
                Auth.getNumber(vm.value)
                .then(function(data) {
                    vm.result = data.data;
                    console.log('result : ', vm.result);
                });
            }

        }
    });