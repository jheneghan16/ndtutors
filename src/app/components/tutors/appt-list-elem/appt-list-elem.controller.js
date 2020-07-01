// apptList element controller
angular.module('app').controller('apptListElemController', ['importData', function(importData) {

}]);

//Import json service using $http get request
function importData ($http){
    
    //once get request is complete, then return the response.data
    return $http.get('/tutortimes.json')
        .then(function(response) {
            return response.data;
        });
        
}
//add service to app
angular.module('components.tutors').service('importData', importData);
//Inject $http into importData service
importData.$inject = ['$http'];