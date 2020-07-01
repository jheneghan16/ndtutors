angular.module('components.tutors').controller('apptListElemController', ['importData', function(importData) {
   // So we can reference the same this at lower levels.     
    var ctrl = this;

    ctrl.dataObj = {}
    //call service function to get json, put it in ctrl.dataObj
    importData.then(function(successResponse) {
        ctrl.dataObj = successResponse;
        return successResponse;
    })
   
    //initialize showform and complete attributes to each appointment to false
    for (appt in ctrl.dataObj.classAppts){
        appt.showForm = false;
        appt.complete = false;
    }
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
angular.module('app').service('importData', importData);
//Inject $http into importData service
importData.$inject = ['$http'];

// apptList element controller
angular.module('components.tutors').controller('apptListElemController', ['importData', function(importData) {

}]);