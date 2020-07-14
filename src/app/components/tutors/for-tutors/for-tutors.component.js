var forTutors = {
    templateUrl: './for-tutors.html',
    controller: 'forTutorsController',
	bindings: {
		dataObj: '<'
	}
};

angular
    .module('components.tutors')
    .component('forTutors', forTutors)
    .config(function ($stateProvider) {
    $stateProvider
        .state('forTutors', {
        parent: 'app',
        url: '/forTutors',
        component: 'forTutors',
		resolve: {
			//get classes before showing page
			dataObj: function(ApptModel){
				return ApptModel.getAllAppts('CSE 2222');
			}
		}
		});
	});