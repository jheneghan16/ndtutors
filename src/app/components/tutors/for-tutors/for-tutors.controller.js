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

    // Function for changing apptsTab boolean variable and opening/closing the Appointments tab view. 
    ctrl.toggleApptsTab = function () {
        if (ctrl.accountSettingsTab == true) {
            ctrl.accountSettingsTab == false;
        }
        ctrl.apptsTab = !ctrl.apptsTab;
    };

    // Function for changing accountSettingsTab boolean variable and opening/closing the Account Settings tab view.
    ctrl.toggleAccountSettingsTab = function () {
        if (ctrl.apptsTab == true) {
            ctrl.apptsTab = false;
        }
        ctrl.accountSettingsTab = !ctrl.accountSettingsTab;
    };

    // Function for changing showViewAllApptsSection boolean variable and opening/closing the submenu's View All Appointments view.
    ctrl.toggleShowViewAllApptsSection = function () {
        if (ctrl.showNewApptSection == true) {
            ctrl.showNewApptSection = false;
        }
        ctrl.showViewAllApptsSection = !ctrl.showViewAllApptsSection;
    };

    // Function for changing showNewApptSection boolean variable and opening/closing the submenu's Create New Appointment view.
    ctrl.toggleShowNewApptSection = function () {
        if (ctrl.showViewAllApptsSection == true) {
            ctrl.showViewAllApptsSection = false;
        }
        ctrl.showNewApptSection = !ctrl.showNewApptSection;
    };

    // Getting each particular class and their appointments in an array. 
    ctrl.particularClass = function () {
        ctrl.classesArray = ['CSE 1111', 'CSE 2222', 'CSE 3333'];
        
        // Will go through the ctrl.classesArray and pass each string element to ApptModel.getAllAppts(), resulting in a new array populated with these results. 
        const promises = ctrl.classesArray.map(el => ApptModel.getAllAppts(el));

        // The Promise.all method is "useful for aggregating the results of multiple promises" (Promise.all() - MDN Web Docs).
        // It is especially useful here so that we don't have to use a loop and risk the program making too many requests at a time. 
        // Input is the array of promises from line 57. 
        // Promise will get resolved when ALL promises in array get resolved.
        Promise.all(promises).then((results) => ctrl.allAppointments = results);
        
        console.log("at the end of particularClass");
    }

    // Function for the Create New Appointment feature. 
    // Without an actual function calling ApptModel.New(), tutors would only be able to create one single appointment. 
    // Any other "Create New Appointment" forms submitted would simply be modifications to that one appointment. 
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