angular
    .module('common', [
        'ui.router',
        'ngParse'
])

.config(function ($locationProvider, ParseProvider) {
    var MY_PARSE_APP_ID = 'gQyY6OXvKSw3jr6QeIoewjcNM8hYnNvWjKKwX9KX';
    var MY_PARSE_JS_KEY = 'Ubvews9hpPAhLZVgFgTk3yYm1IvwZXKet7p5CyJC';
    ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
    ParseProvider.serverURL = 'https://parseapi.back4app.com/';
});