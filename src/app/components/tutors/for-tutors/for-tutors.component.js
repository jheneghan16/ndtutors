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
        // Go to state called "forTutors"
        .state('forTutors', {
        parent: 'app',
        url: '/forTutors',
        component: 'forTutors',
        // Authentication is required
        data: {requiredAuth: true},
		resolve: {
			//get classes before showing page
			dataObj: function(ApptModel){
				return ApptModel.getAllAppts('CSE 2222');
			}
		}
		});
	});