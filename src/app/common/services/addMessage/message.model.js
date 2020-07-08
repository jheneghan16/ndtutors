class ApptModel {
    constructor(Parse) {
        this.Parse = Parse;
        this.data = {};
        this.collection = [];
        this.name = 'Appts';
        this.fields = [
            'tutorName',
            'tutorEmail',
            'isAvail',
            'location',
			'courseName',
			'apptDate'
        ];
    }

    New(obj) {
		console.log('new test');
        if (angular.isUndefined(obj)) {
            const parseObject = new this.Parse.Object(this.name)
			console.log('pre define new');
            this.Parse.defineAttributes(parseObject, this.fields);
			console.log('post define new');
            return parseObject;
        } else {
            this.Parse.defineAttributes(obj, this.fields);
            return obj;
        }
    }
    getById(id) {
		console.log('id test');
        return new this.Parse.Query(this.New())
            .get(id)
            .then(result => {
                console.log('result', result);
				console.log('pre define id');
                this.Parse.defineAttributes(result, this.fields);
                this.data = result;
				console.log('post define id');
				
                return Promise.resolve(result);
            })
            .catch(error => { console.log('reject'); Promise.reject(error); });
    }

    getAllAppts(courseName) {
        return new this.Parse.Query(this.New())
            .equalTo('courseName', courseName)
            .descending("createdAt")
            .find(results => {
                results.forEach(result =>
                    this.Parse.defineAttributes(result, this.fields)
                );
                this.data = results;
				//console.log(this.data);
                return Promise.resolve(results);
            })
            .catch(error => Promise.reject(error));
    }
}

angular
    .module('components.tutors')
    .service('ApptModel', ApptModel);
