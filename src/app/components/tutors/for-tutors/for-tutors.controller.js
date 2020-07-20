function forTutorsController (ApptModel, AuthService) {
   // So we can reference the same this at lower levels.     
    var ctrl = this;
	ctrl.logout = AuthService.logout;
	ctrl.newappt = ApptModel.New();
	ctrl.update = ApptModel.updateAppt;
	ctrl.showForm = true;
	
	/*ctrl.newappt = {
		'tutorName' : '',
		'tutorName' : '',
		'tutorEmail' : '',
		'apptTime' : '',
		'isAvail' : '',
		'location' : '',
		'courseName' : '',
		'apptDate' : ''
	}*/

	ctrl.logit = function() {
		console.log(ctrl.newappt);
		return;
	}

    /*ctrl.dataObj = {};
	var hold = ApptModel.getAllAppts('CSE 2222');
	
	hold.then(function(dataObj) {
		for (const appt of dataObj){
			appt.showForm = false;
			appt.finished = false;
		};
		ctrl.dataObj = dataObj;
	});*/

	console.log(ctrl.newappt)


};


angular.module('components.tutors').controller('forTutorsController', forTutorsController);