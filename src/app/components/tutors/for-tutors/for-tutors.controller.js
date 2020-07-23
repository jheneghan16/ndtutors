function forTutorsController(ApptModel, AuthService) {
    // So we can reference the same this at lower levels.     
    console.log(AuthService.getUser());
    var ctrl = this;

    ctrl.logout = AuthService.logout;

    // Getting the Log In username
    ctrl.username = AuthService.getUser().username;

    // Boolean Variables
    ctrl.apptsTab = false;
    ctrl.accountSettingsTab = false;
    ctrl.showNewApptSection = false;
    ctrl.showViewAllApptsSection = false;

    // Initially the New Appointment form is collapsed. 
    ctrl.showNewApptForm = false;

    // Function for Appointments Tab
    ctrl.toggleApptsTab = function () {
        if (ctrl.accountSettingsTab == true) {
            ctrl.accountSettingsTab == false;
        }
        ctrl.apptsTab = !ctrl.apptsTab;
    };

    // Function for Account Setting Tab
    ctrl.toggleAccountSettingsTab = function () {
        if (ctrl.apptsTab == true) {
            ctrl.apptsTab = false;
        }
        ctrl.accountSettingsTab = !ctrl.accountSettingsTab;
    };

    // Function for View All Appts Section
    ctrl.toggleShowViewAllApptsSection = function () {
        if (ctrl.showNewApptSection == true) {
            ctrl.showNewApptSection = false;
        }
        ctrl.showViewAllApptsSection = !ctrl.showViewAllApptsSection;
    };

    // Function for New Appt Section
    ctrl.toggleShowNewApptSection = function () {
        if (ctrl.showViewAllApptsSection == true) {
            ctrl.showViewAllApptsSection = false;
        }
        ctrl.showNewApptSection = !ctrl.showNewApptSection;
    };

    // Getting each particular class and their appointments in an array. 
    ctrl.particularClass = function () {
        ctrl.classesArray = ['CSE 1111', 'CSE 2222', 'CSE 3333'];
        const promises = ctrl.classesArray.map(el => ApptModel.getAllAppts(el));

        Promise.all(promises).then((results) => ctrl.allAppointments = results);

        console.log("at the end of particularClass");
    }

    // Add a new appointment feature
    ctrl.newAppointmentFunction = function () {
        ctrl.newAppointment = ApptModel.New();
    }

    // Update follows same format as in appt-list-elem.controller.js.
    ctrl.updateAppointment = ApptModel.updateAppt;
    ctrl.dataObj = {};

    var hold = ApptModel.getAllAppts('CSE 2222');

    hold.then(function (dataObj) {
        for (const appt of dataObj) {
            appt.showForm = false;
            appt.finished = false;
        };
        ctrl.dataObj = dataObj;
    });
};


angular.module('components.tutors').controller('forTutorsController', forTutorsController);