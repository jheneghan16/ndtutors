angular
  .module('components.auth', [
    'ui.router',
    'ngParse'
  ])
  
  .run(function ($transitions, $state, AuthService) {
    $transitions.onBefore({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
        if (!AuthService.requireAuthentication()){
            return $state.target('auth.login');
        }
      //return AuthService
      //  .requireAuthentication()
        //.catch(function () {
          //return $state.target('auth.logIn');
        //});
    });
    //});
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
