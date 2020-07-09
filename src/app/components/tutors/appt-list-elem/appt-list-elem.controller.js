function ApptListElemController (ApptModel) {
	const ctrl = this;
	ctrl.updateAppt = ApptModel.updateAppt;
}

// apptList element controller
angular.module('components.tutors').controller('ApptListElemController', ApptListElemController);