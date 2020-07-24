# CHANGELOG.md

## 0.4.0 

Contributors:

  - Stacy Manrique

Features:

  - Added a For Tutors Dashboard, which can be seen as soon as tutors log in. 
  - Added a second navigation bar with styling so tutors can move within the dashboard.
  - Added the ability for tutors to view all appointments registered under their email/username across all three classes.
  - Added the ability for tutors to create a new appointment directly from the web application. After a short form is filled out, the new appointment is initialized with the information provided and saved on Back4App. 
 
How to Install:

  - Apart from `npm i` to install node packages for the first time, nothing else needs to be installed for this individual feature to work. 

How to Run:

  - Run `gulp` and open the link where the server was started (http://0.0.0.0:8885) on your browser. 
  - Make sure to "Empty Cache and Hard Reload." On Google Chrome, this can be accessed by first opening DevTools and right clicking on the Reload button.

Expected Functionality:

  - The first page you will see is the Login page. Here, enter your login credentials (if you have any) or create an account by clicking on "Don't have an account? Create one here."
  - As soon as you log in, you will see a welcome with your specific username (email entered to log in) and a menu with "Appointments" and "Account Settings" as its tabs.  
  - On the "Appointments" tab, there are two options "View All Appointments" or "Create New Appointment." 
  - "View All Appointments" lists all of the appointments (across the 3 different classes) registered under the tutor's email/username. "Appointment Information" always appears three times (representing the three classes) regardless of whether there is an appointment for that class or not.
  - Please note that if the account is new, no appointments will be shown; however, you can add some with the second part of my feature, as explained on the next bullet point. If you would like to see how it functions or looks with appointments already registered under the username/email, feel free to use my testing account, which has a username of "stacy@gmail.com" and a password of "ndtutors".
  - When clicked on, "Create New Appointment" displays a form asking tutors for information regarding their new appointment. Make sure that the email provided is the same one you used to log in (your username). Otherwise, the appointment will not show up on "View All Appointments."
  - After filling out the form completely, tutors can press send and then get a short message letting them know their appointment has been recorded. Tutors can double check that this is the case by clicking on "View All Appointments." The newly created appointment might take a few seconds to be added, so if you click on "View All Appointments" right as soon as you submit, the new appointment may or may not be displayed. If it does not show up after a while, try closing and opening the "View All Appointments" section again.  
  - Tutors may want to see if their appointment shows up in the "CSE 1111," "CSE 2222," or "CSE 3333" tabs; however, note that regardless of which of the three tabs you choose, it will only show appointments for the CSE 2222 class. This is just the way that it was set up from previous releases. Justin Doney's individual feature addresses this and allows for the appointments shown to correspond to the class tab they are in.
  - You may also click on the "Account Settings" tab, but it has no actual functionality besides listing two features I would like to implement in the future, which include the ability for tutors to change their username/email and password.

Files Associated:

  - The main sfiles that were modified for this individual feature are for-tutors.html, for-tutors.controller.js, and styles.css. 

Bug Fixes: 

 - No known bugs in prior release.
 
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
 
 

