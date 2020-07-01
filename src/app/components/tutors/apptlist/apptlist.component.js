const apptListElem = {
    templateUrl: './apptlist.html',
    controller: 'apptListElemController',
    bindings: {apptelem: '<'}
}

angular
    .module('components.tutors')
    .component('apptListElem')
    .config(function ($stateProvider) {
    $stateProvider
        .state('apptListElem', {
        parent: 'app',
        url: '/apptListElem',
        component: 'apptListElem'
    });
});