function ApptListController (ApptModel) {
   // So we can reference the same this at lower levels.     
    var ctrl = this;


    ctrl.dataObj = {};
	var hold = ApptModel.getAllAppts('CSE 2222');
	
	hold.then(function(dataObj) {
		for (const appt of dataObj){
			appt.showForm = false;
			appt.finished = false;
		};
		ctrl.dataObj = dataObj;
	});
};


angular.module('components.tutors').controller('ApptListController', ApptListController);