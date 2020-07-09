var apptList = {
    templateUrl: './appt-list.html',
    controller: 'ApptListController',
	bindings: {
		dataObj: '<'
	}
};

angular
    .module('components.tutors')
    .component('apptList', apptList)
    .config(function ($stateProvider) {
    $stateProvider
        .state('apptList', {
        parent: 'app',
        url: '/apptList',
        component: 'apptList',
		resolve: {
			//get classes before showing page
			dataObj: function(ApptModel){
				return ApptModel.getAllAppts('CSE 2222');
			}
		}
		});
	});