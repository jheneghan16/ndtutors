function AuthService(Parse) {
  var auth = Parse.AuthProvider;
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  //function onSignIn(user) {
//    authData = user;
  //  return auth.$requireSignIn();
  //}
  function clearAuthData() {
    authData = null;
  }
  this.login = function (user) {
    return auth
      .logIn(user.email, user.password)
      .then(storeAuthData);
  };
  this.register = function (user) {
    return auth
      .signUp(user.email, user.password)
      .then(storeAuthData);
  };
  this.logout = function () {
    return auth
      .logOut()
      .then(clearAuthData);
  };
  this.requireAuthentication = function () {
    return auth
      .authenticated();
  };
  this.isAuthenticated = function () {
    return !!authData;
  };
  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
