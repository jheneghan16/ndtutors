function ApptListController (importData, ApptModel) {
   // So we can reference the same this at lower levels.     
    var ctrl = this;


    ctrl.dataObj = {};

    //ctrl.testing = ApptModel.getById('aRJvgTT1UW');
	var hold = ApptModel.getAllAppts('CSE 1111');
	
	hold.then(function(dataObj) {
		for (const appt of dataObj){
			console.log(appt);
			appt.showForm = false;
			appt.finished = false;
		};
		console.log(dataObj);
		ctrl.dataObj = dataObj;
	});
	//console.log(ApptModel.data);
    console.log(ctrl.dataObj);
    //call service function to get json, put it in ctrl.dataObj
    /*importData.getTutors().then(function(successResponse) {
        ctrl.dataObj = successResponse;
        return successResponse;
    });*/
   
    //initialize showform and complete attributes to each appointment to false
    /*for (const appt in ctrl.dataObj){
        appt.showForm = false;
        appt.finished = false;
    };*/
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
