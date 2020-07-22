function ApptListElemController (ApptModel) {
	const ctrl = this;
	ctrl.updateAppt = ApptModel.updateAppt;

	ctrl.emailToSend = {}

	ctrl.studentName = "";

	//var receiverEmail = ctrl.apptelem.tutorEmail;

	
	ctrl.updateBody = function() {
		ctrl.params.body = ctrl.studentName + " signed up for your appointment at " + ctrl.apptelem.apptTime + " " + ctrl.apptelem.apptDate + " at location: " + ctrl.apptelem.location + "\n" +
		ctrl.studentName + " can be reached at " + ctrl.studentEmail + " or at " + ctrl.studentPhone + "\n" +
		"Brief summary of what they need help with: \n\n" + ctrl.studentIssue;
	}

	ctrl.params = {
		toEmail: "",
		subject: "Someone signed up for your appointment"
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