function ApptListElemController (ApptModel) {
	const ctrl = this;
	ctrl.updateAppt = ApptModel.updateAppt;

	ctrl.emailToSend = {}

	//var receiverEmail = ctrl.apptelem.tutorEmail;

	ctrl.params = {
		toEmail: "",
		subject: "Someone signed up for your appointment",
		body: " Someone signed up for your appointment "
	}

	ctrl.sendTutorEmail = function(params) {
		console.log(params);
		Parse.Cloud.run("sendgridEmail", params).then( function() {
		console.log(response);
	});
	}

}

// apptList element controller
angular.module('components.tutors').controller('ApptListElemController', ApptListElemController);