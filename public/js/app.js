angular.module('routerApp',[])
//ENTIRE CONTROLLER
.controller('mainController', function() {
    var vm = this;
    vm.bigMessage='It is main message';
})
//HOME CONTROLLER
.controller('homeController', function() {
    var vm = this;
    vm.message = 'This is HOME message';
})
//ABOUT CONTROLLER
.controller('aboutController', function() {
    var vm = this;
    vm.message = 'This is ABOUT message';
})
//CONTACT CONTROLLER
.controller('contactController', function() {
    var vm = this;
    vm.message = 'Contact us!';
});