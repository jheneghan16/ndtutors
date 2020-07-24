# CHANGELOG.md

## 0.4.0 (Heneghan)

Contributors:

  - Jamie Heneghan

Features:

  - Added email notification when students sign up for an appointment
  - Implemented Parse Cloud function to do this.
  - Used Twilio's Sendgrid API to send emails.

To run: 
  - Run `gulp`
  - Open server shown, and sign up for an appointment.
  - An email will be sent to the tutor when this is completed.
  - Files associated with thie feature are: appt-list-elem.controller.js, appt-list-elem.html, Parse Cloud function.

Files:

 - Files used for sendgrid api and Parse Cloud Backend are located in sendgridstuff/ these files were added to the cloud, and are not used locally, they are just here for reference.

Bug Fixes: 
- No known bugs at this release

## 0.3.0 

Contributors:

  - Stacy Manrique, Justin Doney, Jamie Heneghan

Features:

  - Added the forTutors component. 
  - Added authentication (using Parse) to the forTutors component. 
  - Added login and register capabilities. 
  - Added proper authentication redirects. 

Bug Fixes: 

 - No known bugs in prior release.

## 0.2.0 

Contributors:

  - Stacy Manrique, Justin Doney, Jamie Heneghan

Features:

  - Replaces fake back-end with real back4app Parse server.
  - Implemented build system using gulp.js.
  - Added ApptModel to make http requests to the backend database.
  - Added navigation bar and styling.
  - Added capability for appointments to be reserved by submitting form which updates the backend server.

Bug Fixes: 

 - No known bugs in prior release.
 
 

