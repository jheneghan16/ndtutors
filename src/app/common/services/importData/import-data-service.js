function importData ($http){
    
    //once get request is complete, then return the response.data
    this.getTutors = function()  {
        return $http.get('../appt-list/tutortimes.json')
        .then(function(response) {
            return response.data;
        });
    }
        
};
//add service to app
angular.module('components.tutors').service('importData', importData);
