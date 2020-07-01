function ApptListController (importData) {
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
};


angular.module('components.tutors').controller('ApptListController', ApptListController);


                                                                      
                                                                      
                                                                      
/*//Import json service using $http get request
function importData ($http){
    
    //once get request is complete, then return the response.data
    return $http.get('./tutortimes.json')
        .then(function(response) {
            return response.data;
        });
        
}
//add service to app
angular.module('components.tutors').service('importData', importData);
//Inject $http into importData service
importData.$inject = ['$http'];
*/
