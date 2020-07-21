// Refactored all Firebase logic to Parse. 
// Modified from Todd Motto's Ultimate Angular Repository. 
function AuthService(Parse) {
  var auth = new Parse.User();
  console.log(Parse);
  console.log(auth);
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function clearAuthData() {
    authData = null;
  }
  this.login = function (user) {
      auth.set("username", user.email);
      auth.set("password", user.password);
      auth.set("email", user.email);
      console.log(user);
    return auth
      .logIn()
      .then(storeAuthData);
  };
  this.register = function (user) {
      console.log(user);
      auth.set("username", user.email);
      auth.set("password", user.password);
      auth.set("email", user.email);
      console.log(auth);
    return auth
      .signUp()
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
