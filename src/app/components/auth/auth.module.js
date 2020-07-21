// Modified from Todd Motto's Ultimate Angular Repository.
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
        // We had to rewrite AuthService.requireAuthentication().catch to the following. 
        // This is due to requireAuthentication only returning a Boolean rather than a Promise. 
        if (!AuthService.requireAuthentication()){
            return $state.target('auth.login');
        }
        // Original Firebase that uses a Promise:
        //return AuthService
        //  .requireAuthentication()
        //  .catch(function () {
        //  return $state.target('auth.logIn');
        //});
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
