var apptListElem = {
    templateUrl: './appt-list-elem.html',
    controller: 'ApptListElemController',
    bindings: {apptelem: '<'}
}
//ask when we need $stateProvider or not

angular
    .module('components.tutors')
    .component('apptListElem', apptListElem);
    /*.config(function ($stateProvider) {
    $stateProvider
        .state('apptListElem', {
        parent: 'app',
        url: '/apptListElem',
        component: 'apptListElem'
    });
});*/ 
