// Modified from Todd Motto's Ultimate Angular Repository.
function RegisterController(AuthService, $state) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };
  ctrl.createUser = function (event) {
    return AuthService
      .register(event.user)
      .then(function () {
        $state.go('forTutors');
      }, function (reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);
