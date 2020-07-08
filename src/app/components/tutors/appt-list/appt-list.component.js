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
			dataObj: function(ApptModel){
				return ApptModel.getAllAppts('CSE 2222');
			}
		}
		})
				
			/*var hold = ApptModel.getAllAppts('CSE 2222');
	
			hold.then(function(dataObj) {
				for (const appt of dataObj){
					console.log(appt);
					appt.showForm = false;
					appt.finished = false;
				};
				console.log(dataObj);
				ctrl.dataObj = dataObj;
			});
		});*/
});