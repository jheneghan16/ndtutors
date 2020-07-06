function ApptListElemController (importData) {

}


// apptList element controller
angular.module('components.tutors').controller('ApptListElemController', ApptListElemController);
                                                            
                                                            


/*//Import json service using $http get request
function importData ($http){
    
    //once get request is complete, then return the response.data
    return $http.get('../appt-list/tutortimes.json')
        .then(function(response) {
            return response.data;
        });
        
}
//add service to app
angular.module('components.tutors').service('importData', importData);
//Inject $http into importData service
importData.$inject = ['$http'];*/