var apptListElem = {
    templateUrl: './appt-list-elem.html',
    controller: 'ApptListElemController',
    bindings: {apptelem: '<'}
}
//ask when we need $stateProvider or not

angular
    .module('components.tutors')
    .component('apptListElem', apptListElem); 
