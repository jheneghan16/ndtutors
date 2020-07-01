const apptList = {
    templateUrl: './appt-list.html',
    controller: 'apptListController'
}

angular
    .module('components.tutors')
    .component('apptList', apptList)
    .config(function ($stateProvider) {
    $stateProvider
        .state('apptList', {
        parent: 'app',
        url: '/apptList',
        component: 'apptList'
    });
});