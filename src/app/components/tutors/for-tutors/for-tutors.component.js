var forTutors = {
    templateUrl: './for-tutors.html',
    controller: 'forTutorsController',
	bindings: {
		dataObj: '<'
       // AuthService: '<'
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
        data: {requiredAuth: true},
		resolve: {
            //authenticate: AuthService.requireAuthentication,
			//get classes before showing page
			dataObj: function(ApptModel){
				return ApptModel.getAllAppts('CSE 2222');
			}
		}
		});
	});